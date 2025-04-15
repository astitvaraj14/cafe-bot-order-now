
import React, { useState, useRef, useEffect } from "react";
import { useStore } from "@/context/StoreContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { messageAI } from "@/utils/ai-utils";
import { Send, Bot, User, Coffee, RefreshCw } from "lucide-react";

const ChatBot: React.FC = () => {
  const { 
    chatMessages, 
    addMessage, 
    isChatOpen, 
    toggleChat, 
    clearChat, 
    addToCart 
  } = useStore();
  
  const [inputMessage, setInputMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChatOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || isProcessing) return;
    
    // Add user message
    addMessage(inputMessage, "user");
    setInputMessage("");
    setIsProcessing(true);
    
    try {
      // Get AI response
      const aiResponse = await messageAI(inputMessage, chatMessages);
      addMessage(aiResponse.message, "bot");
      
      // If AI detected items to add to cart
      if (aiResponse.items && aiResponse.items.length > 0) {
        aiResponse.items.forEach(item => {
          addToCart(item);
        });
      }
    } catch (error) {
      console.error("Error getting AI response:", error);
      addMessage("Sorry, I'm having trouble processing your request right now. Please try again later.", "bot");
    } finally {
      setIsProcessing(false);
    }
  };

  // Initial welcome message when chat is first opened and empty
  useEffect(() => {
    if (isChatOpen && chatMessages.length === 0) {
      addMessage("Hi there! I'm your Smart Café assistant. I can help you order coffee, food, or answer questions about our menu. What can I get for you today?", "bot");
    }
  }, [isChatOpen, chatMessages.length, addMessage]);

  return (
    <Sheet open={isChatOpen} onOpenChange={toggleChat}>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
        <SheetHeader className="text-left mb-4">
          <SheetTitle className="text-xl flex items-center">
            <Bot className="mr-2 h-5 w-5 text-cafe-green" />
            Smart Café Assistant
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex justify-end mb-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearChat}
            className="text-xs h-8"
          >
            <RefreshCw className="h-3 w-3 mr-1" />
            New Conversation
          </Button>
        </div>

        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4 mb-4">
            {chatMessages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}
              >
                <div 
                  className={`
                    flex items-start space-x-2 max-w-[80%] animate-fade-in
                    ${msg.sender === "bot" 
                      ? "bg-muted rounded-lg p-3 rounded-tl-none" 
                      : "bg-coffee text-white rounded-lg p-3 rounded-tr-none"
                    }
                  `}
                >
                  {msg.sender === "bot" ? (
                    <Coffee className="h-5 w-5 mt-1 flex-shrink-0" />
                  ) : (
                    <User className="h-5 w-5 mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {msg.text}
                    </p>
                    <span className="text-xs opacity-70 mt-1 block text-right">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {isProcessing && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-3 rounded-tl-none max-w-[80%] animate-pulse">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-coffee-light"/>
                    <div className="w-2 h-2 rounded-full bg-coffee-light"/>
                    <div className="w-2 h-2 rounded-full bg-coffee-light"/>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        <form onSubmit={handleSendMessage} className="mt-4 flex space-x-2">
          <Input
            ref={inputRef}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your order or question..."
            className="flex-1"
            disabled={isProcessing}
          />
          <Button 
            type="submit" 
            size="icon" 
            disabled={!inputMessage.trim() || isProcessing}
            className="bg-coffee hover:bg-coffee-dark"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default ChatBot;
