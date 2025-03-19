"use client";

import Hero from "@/components/Hero";

import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <AuroraBackground>
    <main className=" min-h-screen w-full flex items-center justify-center">
      <div className="">
        
        <Hero />
        
      </div>

      
    </main>

    </AuroraBackground>
  );
}