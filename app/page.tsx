import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchPrompt from "./components/SearchPrompt";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-400">
      <Navbar />
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        <Hero />
        <SearchPrompt />
      </div>
    </main>
  );
}
