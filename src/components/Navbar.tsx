
import React from "react";
import { useStore } from "@/context/StoreContext";
import { ShoppingCart, MessageCircle, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Navbar: React.FC = () => {
  const { toggleCart, toggleChat, cartItems, isChatOpen, isCartOpen } = useStore();
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <header className="w-full bg-background sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Coffee className="h-6 w-6 text-coffee" />
          <h1 className="text-xl font-bold text-coffee">Smart Café</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#menu" className="text-foreground hover:text-coffee transition-colors">
            Menu
          </a>
          <a href="#about" className="text-foreground hover:text-coffee transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-coffee transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button 
            variant={isChatOpen ? "default" : "outline"}
            size="icon" 
            onClick={toggleChat}
            className="relative"
            aria-label="Chat with AI assistant"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          
          <Button 
            variant={isCartOpen ? "default" : "outline"}
            size="icon" 
            onClick={toggleCart}
            className="relative"
            aria-label="Open shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <Badge 
                className="absolute -top-2 -right-2 px-1.5 py-0.5 min-w-5 h-5 flex items-center justify-center bg-coffee text-white"
              >
                {totalItems}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
