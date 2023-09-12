import { Hero } from "@/components/Hero";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <Navbar />
      <Hero />
    </main>
  );
}
