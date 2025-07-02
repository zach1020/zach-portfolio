'use client';

import Image from "next/image";
import Hero from "../../components/Hero";
import About from "../../components/About";
import TechStack from "../../components/TechStack";
import Projects from "../../components/Projects";
import MusicEmbed from "../../components/MusicEmbed";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <MusicEmbed />
      <Contact />
    </div>
  );
}
