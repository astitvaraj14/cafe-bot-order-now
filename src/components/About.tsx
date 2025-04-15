
import React from "react";
import { Clock, MapPin, Phone, Coffee } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-12 relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1601379977601-419b5093a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Café interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cream/90"></div>
      </div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee">About Smart Café</h2>
          <p className="text-muted-foreground max-w-[700px]">
            A modern café experience with AI-powered ordering
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <p className="text-lg">
              At Smart Café, we blend traditional coffee craftsmanship with cutting-edge technology to create 
              a unique café experience. Our AI-powered ordering system makes getting your favorite drinks and food
              easier than ever, while our expert baristas ensure every cup is perfect.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-coffee" />
                <span>Open Daily: 7:00 AM - 8:00 PM</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-coffee" />
                <span>123 Coffee Street, Brewville</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-coffee" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden aspect-square shadow-xl animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1525480122447-64809d765ec4?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
              alt="Coffee barista"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-coffee-light/20 to-coffee/40 flex items-center justify-center">
              <div className="text-center p-8 bg-white/90 rounded-lg backdrop-blur-sm max-w-xs">
                <Coffee className="h-12 w-12 mx-auto mb-4 text-coffee" />
                <h3 className="text-xl font-semibold text-coffee-dark mb-2">
                  Coffee Reimagined
                </h3>
                <p className="text-sm text-muted-foreground">
                  We source the finest beans and use state-of-the-art brewing techniques to create 
                  exceptional coffee experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
