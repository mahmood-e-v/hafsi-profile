import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "Hafsath Eranhikkade | Creative Graphic Designer",
    description: "Portfolio of Hafsath Eranhikkade - Logo, Poster & Brand Identity Designer.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.variable, playfair.variable, "font-sans antialiased min-h-screen flex flex-col")}>
                {children}
            </body>
        </html>
    );
}
