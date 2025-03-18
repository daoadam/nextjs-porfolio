"use client";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import { FloatingNav }  from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <main className=" min-h-screen w-full flex items-center justify-center">
      <div className="">
        <Hero />
      </div>
    </main>
  );
}