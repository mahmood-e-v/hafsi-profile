"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HeroHighlight = ({
    children,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    let mouseX = 0;
    let mouseY = 0;

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLDivElement>) {
        if (!currentTarget) return;
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX = clientX - left;
        mouseY = clientY - top;

        // Direct DOM manipulation for performance on mousemove
        currentTarget.style.setProperty("--mouse-x", `${mouseX}px`);
        currentTarget.style.setProperty("--mouse-y", `${mouseY}px`);
    }

    return (
        <div
            className={cn(
                "relative h-[40rem] flex items-center bg-white dark:bg-black justify-center w-full group",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
        >
            <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none opacity-20" />
            <div className="absolute inset-0 pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            {/* Background Mask - The Spotlight Effect */}
            <div
                className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    maskImage: `radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), black 40%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), black 40%, transparent 100%)`,
                }}
            />

            <div className={cn("relative z-20", className)}>{children}</div>
        </div>
    );
};

export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{
                backgroundSize: "0% 100%",
                backgroundPosition: "0% center",
            }}
            animate={{
                backgroundSize: isHovered ? "200% 100%" : "0% 100%",
                backgroundPosition: isHovered ? ["0% center", "-200% center"] : "0% center",
            }}
            transition={{
                backgroundSize: {
                    duration: 0.3,
                    ease: "easeOut",
                },
                backgroundPosition: {
                    duration: 2,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                },
            }}
            style={{
                backgroundRepeat: "no-repeat",
                display: "inline",
            }}
            className={cn(
                `relative inline-block pb-1 px-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white`,
                className
            )}
        >
            {children}
        </motion.span>
    );
};
