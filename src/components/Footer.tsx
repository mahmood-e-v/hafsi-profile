import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { name } = portfolioData.personal;

    return (
        <footer className="bg-slate-900 text-slate-200 py-16 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
                    <p className="text-slate-400 text-sm max-w-xs">
                        Designing impactful visual identities that leave a lasting impression.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={portfolioData.personal.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="mailto:hafsimahmood@gmail.com" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <div className="text-sm text-slate-500">
                    &copy; {currentYear} {name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
