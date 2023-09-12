import { Hero } from "@/components/sections/Hero";
import Navbar from "@/components/sections/NavBar";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <Hero />
      <Skills />
    </main>
  );
}
