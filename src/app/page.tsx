import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="relative">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Footer />
        </main>
    );
}
