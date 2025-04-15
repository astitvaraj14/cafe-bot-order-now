
import React from "react";
import { useStore } from "@/context/StoreContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MinusCircle, PlusCircle, Trash2, ShoppingBag } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Cart: React.FC = () => {
  const { cartItems, isCartOpen, toggleCart, removeFromCart, updateQuantity, clearCart, cartTotal } = useStore();

  return (
    <Sheet open={isCartOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
        <SheetHeader className="text-left mb-5">
          <SheetTitle className="text-xl flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Your Order
          </SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
            <ShoppingBag className="h-12 w-12 mb-4 text-muted-foreground" />
            <h3 className="text-lg font-medium">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-6">
              Add some delicious items from our menu
            </p>
            <Button onClick={toggleCart} className="bg-coffee hover:bg-coffee-dark">
              Browse Menu
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto">
              <ul className="space-y-5">
                {cartItems.map((item) => (
                  <li key={item.id} className="animate-fade-in">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <MinusCircle className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <PlusCircle className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => removeFromCart(item.id)}
                        className="h-8 w-8 text-destructive/70 hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Separator className="mt-4" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex items-center justify-between font-medium">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" onClick={clearCart}>
                  Clear Cart
                </Button>
                <Button className="bg-coffee hover:bg-coffee-dark">
                  Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
