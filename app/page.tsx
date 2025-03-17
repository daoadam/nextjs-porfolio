import Hero from "@/components/hero";
export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center flex-col justify-center overflow-hidden mx-auto sm:px-10 bg-black">
      
      <div className ='relative' >
        <div className="text-center space-y-2 max-w-2xl z-10">
            <div className="space-y-2">
            <Hero />
              
          </div>
          </div>
      </div>
    </main>
        );
}
