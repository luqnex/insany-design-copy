import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Projects />
    </div>
  );
}
