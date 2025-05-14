import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Head>
        <title>Full Stack Developer | Your Name</title>
        <meta name="description" content="Full Stack Developer Portfolio" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Experience />
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Adinda Khaerani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}