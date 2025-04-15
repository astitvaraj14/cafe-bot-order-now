
import React from "react";
import { StoreProvider } from "@/context/StoreContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import ChatBot from "@/components/ChatBot";

const Index: React.FC = () => {
  return (
    <StoreProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1">
          <Hero />
          <Menu />
          <About />
        </main>
        
        <Footer />
        
        {/* Panels that can be toggled */}
        <Cart />
        <ChatBot />
      </div>
    </StoreProvider>
  );
};

export default Index;
