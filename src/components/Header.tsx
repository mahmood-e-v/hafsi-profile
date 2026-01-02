"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const { name } = portfolioData.personal;

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
                scrolled ? "bg-white/80 backdrop-blur-md border-slate-200 py-3 shadow-sm" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-1 group">
                    <span className="w-8 h-8 rounded-lg bg-violet-600 text-white flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">H</span>
                    <span className="text-slate-900 group-hover:text-violet-600 transition-colors">Eranhikkade</span>
                </Link>

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
            </div>
        </header>
    );
}
