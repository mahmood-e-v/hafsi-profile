import { cn } from "@/lib/utils";

export default function SectionHeading({
    title,
    subtitle,
    className,
    titleClassName,
    subtitleClassName
}: {
    title: string;
    subtitle?: string;
    className?: string; // Container class
    titleClassName?: string; // Small Pill Text class
    subtitleClassName?: string; // Large Subtitle class
}) {
    return (
        <div className={cn("mb-16 text-center", className)}>
            <div className="inline-flex items-center space-x-2 mb-3 bg-violet-50 dark:bg-violet-900/30 px-3 py-1 rounded-full border border-violet-100 dark:border-violet-800">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
                <h2 className={cn("text-xs font-bold tracking-widest text-violet-700 dark:text-violet-300 uppercase", titleClassName)}>
                    {title}
                </h2>
            </div>
            {subtitle && (
                <h3 className={cn("text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight", subtitleClassName)}>
                    {subtitle}
                </h3>
            )}
        </div>
    );
}
