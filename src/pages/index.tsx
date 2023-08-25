import Development from "./components/Development";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InfinityList from "./components/InfinitList";
import ItemCase from "./components/ItemCase";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Projects />
      <ItemCase
        number={1}
        logo="./assets/unico.svg"
        services={["design", "front-end", "wordpress"]}
        image="./assets/unico-01.jpg"
        title="Acesso Digital agora é unico.io"
        links={[{ link: "http://google.com.br", name: "unico.io" }]}
        description="Junto a mudança da marca veio também a mudança do site. Construimos do zero toda interface e desenvolvimento das páginas. Entregamos um projeto completo em Wordpress. "
      />
      <ItemCase
        number={1}
        logo="./assets/unico.svg"
        services={["design", "front-end", "wordpress"]}
        image="./assets/unico-01.jpg"
        title="Acesso Digital agora é unico.io"
        links={[{ link: "http://google.com.br", name: "unico.io" }]}
        description="Junto a mudança da marca veio também a mudança do site. Construimos do zero toda interface e desenvolvimento das páginas. Entregamos um projeto completo em Wordpress. "
      />
      <ItemCase
        number={1}
        logo="./assets/unico.svg"
        services={["design", "front-end", "wordpress"]}
        image="./assets/unico-01.jpg"
        title="Acesso Digital agora é unico.io"
        links={[{ link: "http://google.com.br", name: "unico.io" }]}
        description="Junto a mudança da marca veio também a mudança do site. Construimos do zero toda interface e desenvolvimento das páginas. Entregamos um projeto completo em Wordpress. "
      />
      <Testimonials />
      <InfinityList />
      <Services />
      <Development />
    </div>
  );
}
