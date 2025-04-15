
import { MenuItem } from "@/context/StoreContext";
import { menuItems } from "@/data/menuItems";
import { ChatMessage } from "@/context/StoreContext";

type AIResponse = {
  message: string;
  items?: MenuItem[];
};

// Simple function to detect if user is ordering menu items
const detectOrderItems = (message: string): MenuItem[] => {
  const lowerMessage = message.toLowerCase();
  const detectedItems: MenuItem[] = [];
  
  // Check each menu item to see if it's mentioned in the message
  menuItems.forEach(item => {
    if (lowerMessage.includes(item.name.toLowerCase())) {
      detectedItems.push(item);
    }
  });
  
  return detectedItems;
};

// Mock AI response function
export const messageAI = async (
  message: string, 
  chatHistory: ChatMessage[]
): Promise<AIResponse> => {
  // Simulate processing delay for realism
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const detectedItems = detectOrderItems(message);
  const lowerMessage = message.toLowerCase();
  
  // Generate appropriate response based on the message
  let responseText = "";
  
  if (detectedItems.length > 0) {
    // User is ordering items
    const itemNames = detectedItems.map(item => item.name).join(", ");
    responseText = `I've added ${itemNames} to your cart. Would you like anything else with your order?`;
    
    // If it's just one item, maybe suggest a complementary item
    if (detectedItems.length === 1) {
      const item = detectedItems[0];
      if (item.category === "coffee") {
        responseText += ` Perhaps a pastry to go with your ${item.name}?`;
      } else if (item.category === "food") {
        responseText += ` Would you like a coffee to go with your ${item.name}?`;
      }
    }
  } else if (lowerMessage.includes("menu") || lowerMessage.includes("what do you have")) {
    // User is asking about the menu
    responseText = "We have a variety of coffee drinks, food items, and desserts. Our most popular coffee options include Espresso, Cappuccino, and Latte. For food, we have Croissants, Muffins, and Avocado Toast. Would you like me to add any of these to your order?";
  } else if (lowerMessage.includes("recommend") || lowerMessage.includes("suggestion") || lowerMessage.includes("what's good")) {
    // User is asking for recommendations
    responseText = "I'd recommend our Cappuccino which pairs perfectly with our freshly baked Croissant. Our Avocado Toast is also very popular for breakfast. Would you like to try any of these?";
  } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi ") || lowerMessage === "hi") {
    // Greeting
    responseText = "Hello! Welcome to Smart Café. What can I help you with today?";
  } else if (lowerMessage.includes("thank")) {
    // Thanks
    responseText = "You're welcome! Is there anything else I can help you with?";
  } else if (lowerMessage.includes("bye") || lowerMessage.includes("goodbye")) {
    // Goodbye
    responseText = "Thank you for ordering with Smart Café! We hope to see you again soon.";
  } else {
    // Default response
    responseText = "I'm not sure I understand. Would you like to order something from our menu? We have coffee, food items, and desserts available.";
  }
  
  return {
    message: responseText,
    items: detectedItems.length > 0 ? detectedItems : undefined
  };
};
