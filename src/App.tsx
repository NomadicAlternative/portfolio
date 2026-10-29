import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import WhatIBuild from "./components/sections/WhatIBuild";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import HowIWork from "./components/sections/HowIWork";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="relative z-10 min-h-screen text-ink">
      <NavBar />
      <Hero />
      <main className="mx-auto max-w-5xl px-4">
        <div className="pb-12"><WhatIBuild /></div>
        <div className="pb-12"><About /></div>
        <div className="pb-12"><Skills /></div>
        <div className="pb-12"><Projects /></div>
        <div className="pb-12"><HowIWork /></div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
