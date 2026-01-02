"use client";

import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Skills() {
    const { skills } = portfolioData;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    };

    const gradients = [
        "from-violet-500 to-purple-500",
        "from-blue-500 to-cyan-500",
        "from-fuchsia-500 to-pink-500",
        "from-indigo-500 to-blue-500",
    ];

    return (
        <section id="skills" className="py-24 px-6 lg:px-20 bg-slate-50 relative overflow-hidden transition-colors duration-300">
            {/* Background Decorative */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

            <div className="max-w-6xl mx-auto relative z-10">
                <SectionHeading
                    title="My Tools"
                    subtitle="Skills & Expertise"
                    titleClassName="text-violet-700 dark:text-violet-700" // Force dark color for light background
                    subtitleClassName="text-slate-900 dark:text-slate-900" // Force dark color for light background
                />

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    {skills.map((skill, index) => {
                        const gradient = gradients[index % gradients.length];
                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className={`p-4 rounded-xl shadow-md border border-transparent hover:scale-105 transition-all duration-300 group cursor-default flex flex-col items-center text-center gap-3 bg-gradient-to-br ${gradient} w-40 h-40 justify-center`}
                            >
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
                                    <span className="text-xl font-bold text-white drop-shadow-md">
                                        {skill.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white drop-shadow-sm">
                                        {skill.name}
                                    </h3>
                                    <span className="text-[10px] text-white/80 font-medium uppercase tracking-wider block mt-1">
                                        {skill.category}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
