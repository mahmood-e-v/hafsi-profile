"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

export default function Portfolio() {
    const { portfolio } = portfolioData;
    const [selectedProject, setSelectedProject] = useState<typeof portfolio[0] | null>(null);

    return (
        <section id="portfolio" className="py-24 px-6 lg:px-20 bg-white">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="Recent Works"
                    subtitle="Portfolio"
                    titleClassName="text-violet-700 dark:text-violet-700" // Force dark color
                    subtitleClassName="text-slate-900 dark:text-slate-900" // Force dark color
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolio.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 cursor-pointer"
                        >
                            <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-200 flex flex-col items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                                        <span className="text-4xl mb-2">+</span>
                                        <span className="text-xs font-medium uppercase tracking-wider">Upload Image</span>
                                    </div>
                                )}
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded-md text-white text-xs font-medium mb-2">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-5">
                                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">{project.title}</h4>
                                <p className="text-slate-500 text-sm line-clamp-2">{project.description}</p>
                                <div className="mt-4 flex items-center text-violet-600 text-sm font-medium">
                                    See Details <ExternalLink className="w-3 h-3 ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal with cleanup */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-slate-100 rounded-full transition-colors z-20"
                            >
                                <X className="w-5 h-5 text-slate-700" />
                            </button>

                            <div className="md:w-1/2 bg-slate-100 relative min-h-[300px]">
                                {selectedProject.image ? (
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-contain absolute inset-0 bg-slate-100"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                                        <span className="text-sm">No Image Available</span>
                                    </div>
                                )}
                            </div>

                            <div className="md:w-1/2 p-8 overflow-y-auto">
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                                        {selectedProject.category}
                                    </span>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{selectedProject.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                    <h5 className="font-bold text-slate-900 mb-4">Project Details</h5>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Client</span>
                                            <span className="font-medium text-slate-900">Confidential</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Year</span>
                                            <span className="font-medium text-slate-900">2023</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Tools</span>
                                            <span className="font-medium text-slate-900">Illustrator, Photoshop</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
