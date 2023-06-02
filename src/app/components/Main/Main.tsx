import Hero from "../layout/Hero";
import About from "./About";
import Contact from "./Contact";
import Features from "./Features";
import MisionYVision from "./MisionYVision";
import Pricing from "./Pricing/Pricing";
import Who from "./Who";

export default function Main(){
  return (
    <main className="dark:bg-background-radialD bg-background-radialL">
      <Hero>
        <Who/>
        <div className="p-14">
          <About/>
          <MisionYVision />
          <Features/>
          <Pricing/>
          <Contact/>
        </div>
      </Hero>
    </main>
  );
}