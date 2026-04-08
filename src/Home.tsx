import React from "react";
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Products from './Products';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white" dir="auto">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Products />
      </main>
      <Footer />
    </div>
  );
}