import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
      <body>
        <Header />
        <main>
          <Hero />
          <Features />
        </main>
        <Footer />
      </body>
  );
};

export default HomePage;
