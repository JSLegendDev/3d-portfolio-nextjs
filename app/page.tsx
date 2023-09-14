import { Hero } from "@/components/sections/Hero";
import Navbar from "@/components/sections/NavBar";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="flex flex-col bg-gray-900 text-white">
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}
