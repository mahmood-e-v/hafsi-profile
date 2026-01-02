"use client";

import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Button } from "./ui/moving-border";

export default function About() {
    const { title, description } = portfolioData.about;

    return (
        <section id="about" className="py-24 px-6 lg:px-20 relative bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <SectionHeading title="Who I Am" subtitle={title} />

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line mb-8">
                            {description}
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-violet-500 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                                <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 mb-1 group-hover:scale-110 transition-transform origin-left">5+</h4>
                                <span className="text-sm font-medium text-slate-400 group-hover:text-slate-200">Years of Experience</span>
                            </div>
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-blue-500 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1 group-hover:scale-110 transition-transform origin-left">50+</h4>
                                <span className="text-sm font-medium text-slate-400 group-hover:text-slate-200">Projects Completed</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative flex justify-center"
                    >
                        <Button
                            borderRadius="1.5rem"
                            className="bg-slate-900/90 dark:bg-black/90 text-white border-slate-800"
                            containerClassName="w-full h-auto p-0"
                            duration={3000}
                        >
                            <div className="p-8 w-full">
                                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <span className="w-2 h-8 bg-gradient-to-b from-violet-500 to-blue-500 rounded-full mr-3 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                                    Quick Facts
                                </h4>
                                <ul className="space-y-5">
                                    <li className="flex justify-between items-center border-b border-slate-800 pb-3 group">
                                        <span className="text-slate-400 font-medium group-hover:text-violet-400 transition-colors">Location</span>
                                        <span className="font-bold text-slate-200">{portfolioData.personal.location}</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-slate-800 pb-3 group">
                                        <span className="text-slate-400 font-medium group-hover:text-violet-400 transition-colors">Focus</span>
                                        <span className="font-bold text-slate-200">Brand Identity</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-slate-800 pb-3 group">
                                        <span className="text-slate-400 font-medium group-hover:text-violet-400 transition-colors">Style</span>
                                        <span className="font-bold text-slate-200">Modern & Clean</span>
                                    </li>
                                    <li className="flex justify-between items-center pt-1 group">
                                        <span className="text-slate-400 font-medium group-hover:text-violet-400 transition-colors">Status</span>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.2)]">
                                            Available
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
