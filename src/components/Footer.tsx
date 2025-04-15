
import React from "react";
import { Coffee } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full py-8 bg-coffee text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Coffee className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Smart Café</h3>
            </div>
            <p className="text-coffee-light/90 text-sm">
              Bringing technology and great coffee together for a modern café experience.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-coffee-light/90 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="text-coffee-light/90 hover:text-white transition-colors">Menu</a>
              </li>
              <li>
                <a href="#about" className="text-coffee-light/90 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="text-coffee-light/90 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <address className="not-italic text-sm space-y-2 text-coffee-light/90">
              <p>123 Coffee Street</p>
              <p>Brewville, BC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: hello@smartcafe.com</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm text-coffee-light/70">
          <p>© {new Date().getFullYear()} Smart Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
