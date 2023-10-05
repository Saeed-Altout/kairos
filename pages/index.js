import { ContextProviders } from "@/contexts/ContextProviders";
import {
  About,
  Community,
  Features,
  Footer,
  Hero,
  Navbar,
  Plans,
  Works,
} from "@/layouts";

export default function Home() {
  return (
    <>
      <ContextProviders>
        <Navbar />
        <Hero />
        <About />
        <Works />
        <Features />
        <Plans />
        <Community />
        <Footer />
      </ContextProviders>
    </>
  );
}
