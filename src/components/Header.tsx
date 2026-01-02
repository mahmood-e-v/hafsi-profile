"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled || isOpen ? "bg-white/90 backdrop-blur-md border-slate-200 py-3 shadow-sm" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-1 group z-50">
                    <span className="w-8 h-8 rounded-lg bg-violet-600 text-white flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">H</span>
                    <span className="text-slate-900 group-hover:text-violet-600 transition-colors">Eranhikkade</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-1">
                    {["About", "Skills", "Portfolio"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href={portfolioData.personal.whatsapp}
                        target="_blank"
                        className="ml-4 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/25 transition-all"
                    >
                        Contact Me
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-600 hover:text-violet-600 z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    )}
                </button>

                {/* Mobile Nav Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 bg-white/95 backdrop-blur-lg pt-24 px-6 md:hidden flex flex-col items-center space-y-6 animate-in slide-in-from-top-10 fade-in duration-200">
                        {["About", "Skills", "Portfolio"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-xl font-medium text-slate-800 hover:text-violet-600"
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href={portfolioData.personal.whatsapp}
                            target="_blank"
                            onClick={() => setIsOpen(false)}
                            className="px-8 py-3 bg-slate-900 text-white text-lg font-medium rounded-xl hover:bg-violet-600 shadow-lg hover:shadow-violet-500/25 transition-all w-full text-center"
                        >
                            Contact Me
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}
