"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Button } from "./ui/moving-border";

export default function Hero() {
    const { title, subtitle, cta } = portfolioData.hero;
    const { name, role } = portfolioData.personal;

    return (
        <HeroHighlight containerClassName="h-screen min-h-[600px] flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto px-4 z-10 relative flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [20, -5, 0] }}
                    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                    className="flex flex-col items-center w-full"
                >
                    {/* Main Text Block - Left Aligned but Centered in View */}
                    <div className="text-left">
                        <span className="text-4xl md:text-7xl lg:text-8xl font-bold text-neutral-700 dark:text-white block mb-2 ml-1">
                            Hi, I'm
                        </span>
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug">
                            <Highlight className="text-black dark:text-white whitespace-nowrap px-4 py-1">
                                {name}
                            </Highlight>
                        </h1>
                    </div>

                    <h2 className="text-xl md:text-3xl text-neutral-600 dark:text-neutral-300 mt-8 font-medium text-center">
                        {role}
                    </h2>

                    <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-center">
                        {subtitle}
                    </p>

                    {/* Buttons removed as per user request */}
                </motion.div>
            </div>
        </HeroHighlight>
    );
}
