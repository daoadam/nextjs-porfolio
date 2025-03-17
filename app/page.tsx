import Hero from "@/components/Hero";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center flex-col justify-center overflow-hidden mx-auto sm:px-10 bg-black">
      
      <div className ='relative' >
        <div className="text-center space-y-2 max-w-2xl z-10">
            <div className="space-y-2">
            <FloatingNav
              navItems={[
                {name: "Home", link: '/', icon: <FaHome />},
              ]}
              />
            <Hero />
            <Grid />
              
          </div>
          </div>
      </div>
    </main>
        );
}
