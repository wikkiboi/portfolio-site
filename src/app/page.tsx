import About from "../modules/about";
import Hero from "../modules/hero";
import Navbar from "../modules/navbar";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 w-full shadow z-50 bg-white">
        <Navbar />
      </header>
      <Hero />
      <About />
    </>
  );
}
