
import React, { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { menuItems, categories } from "@/data/menuItems";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const Menu: React.FC = () => {
  const { addToCart } = useStore();
  const [activeCategory, setActiveCategory] = useState("coffee");
  
  return (
    <section id="menu" className="w-full py-12 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee">Our Menu</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Explore our selection of premium coffees, delicious foods, and refreshing beverages
          </p>
        </div>
        
        <Tabs defaultValue="coffee" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/50">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-coffee data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems
                  .filter(item => item.category === category.id)
                  .map(item => (
                    <Card key={item.id} className="overflow-hidden group hover-scale">
                      <div className="aspect-video bg-muted overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex justify-between items-center">
                          <span>{item.name}</span>
                          <span className="text-coffee">${item.price.toFixed(2)}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          onClick={() => addToCart(item)} 
                          className="w-full bg-coffee hover:bg-coffee-dark"
                        >
                          <PlusCircle className="h-4 w-4 mr-2" />
                          Add to Order
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
