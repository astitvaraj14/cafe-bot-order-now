
import React, { createContext, useContext, useState, useEffect } from "react";

// Define types for our menu items and cart
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

export type CartItem = MenuItem & {
  quantity: number;
};

export type ChatMessage = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

type StoreContextType = {
  // Cart state
  cartItems: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  
  // Chat state
  chatMessages: ChatMessage[];
  addMessage: (text: string, sender: "user" | "bot") => void;
  clearChat: () => void;
  
  // UI state
  isChatOpen: boolean;
  toggleChat: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  
  // Chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  
  // UI state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Calculate cart total whenever cart items change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setCartTotal(total);
  }, [cartItems]);

  // Add item to cart
  const addToCart = (item: MenuItem) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex >= 0) {
        // Item already exists, increase quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        return updatedItems;
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };
  
  // Remove item from cart
  const removeFromCart = (itemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };
  
  // Update item quantity
  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCartItems(prevItems => {
      return prevItems.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      );
    });
  };
  
  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };
  
  // Add chat message
  const addMessage = (text: string, sender: "user" | "bot") => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    
    setChatMessages(prevMessages => [...prevMessages, newMessage]);
  };
  
  // Clear chat
  const clearChat = () => {
    setChatMessages([]);
  };
  
  // Toggle chat panel
  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
    if (isCartOpen) setIsCartOpen(false);
  };
  
  // Toggle cart panel
  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
    if (isChatOpen) setIsChatOpen(false);
  };
  
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    chatMessages,
    addMessage,
    clearChat,
    isChatOpen,
    toggleChat,
    isCartOpen,
    toggleCart
  };
  
  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
