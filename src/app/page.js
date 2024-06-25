'use client'
import Hero from "@/components/Hero";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "@/components/About";
import './styles/globals.css'

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
    </div>
  );
}
