
import React from "react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/context/StoreContext";

const Hero: React.FC = () => {
  const { toggleChat } = useStore();
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-cream to-background">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-8">
        <div className="animate-fade-in space-y-3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-coffee-dark">
            Smart Café Ordering
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto">
            Order your favorite coffee and food with our AI-powered chatbot or browse our menu
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
          <Button 
            size="lg" 
            className="bg-coffee hover:bg-coffee-dark text-white"
            onClick={toggleChat}
          >
            Order with AI Chatbot
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-coffee text-coffee hover:bg-coffee-light/10"
            asChild
          >
            <a href="#menu">Browse Menu</a>
          </Button>
        </div>
        
        <div className="relative w-full max-w-3xl mx-auto mt-8 lg:mt-16 aspect-video rounded-lg overflow-hidden shadow-xl animate-scale-in">
          <div className="absolute inset-0 bg-coffee/10 flex items-center justify-center">
            <div className="p-8 bg-background/90 rounded-lg backdrop-blur-sm shadow-lg">
              <p className="text-xl font-semibold text-coffee">
                "The smartest way to order your coffee"
              </p>
              <p className="text-muted-foreground mt-2">
                Quick, personalized service with AI assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
