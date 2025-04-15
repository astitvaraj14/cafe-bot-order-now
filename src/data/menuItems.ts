
import { MenuItem } from "../context/StoreContext";

export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: "coffee-1",
    name: "Espresso",
    description: "Rich, concentrated coffee served in a small cup",
    price: 2.99,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  {
    id: "coffee-2",
    name: "Cappuccino",
    description: "Espresso with steamed milk foam",
    price: 4.49,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  {
    id: "coffee-3",
    name: "Latte",
    description: "Espresso with steamed milk and a light layer of foam",
    price: 4.99,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  {
    id: "coffee-4",
    name: "Americano",
    description: "Espresso diluted with hot water",
    price: 3.49,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  {
    id: "coffee-5",
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk",
    price: 5.49,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1596951064440-c4c626288189?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  
  // Food
  {
    id: "food-1",
    name: "Croissant",
    description: "Buttery, flaky pastry",
    price: 3.99,
    category: "food",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  {
    id: "food-2",
    name: "Blueberry Muffin",
    description: "Freshly baked muffin with blueberries",
    price: 3.49,
    category: "food",
    image: "https://images.unsplash.com/photo-1587399872588-013bf025b934?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  {
    id: "food-3",
    name: "Avocado Toast",
    description: "Whole grain toast with smashed avocado and seasoning",
    price: 7.99,
    category: "food",
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  {
    id: "food-4",
    name: "Breakfast Sandwich",
    description: "Egg, cheese, and choice of bacon or sausage on a bagel",
    price: 6.99,
    category: "food",
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  
  // Desserts
  {
    id: "dessert-1",
    name: "Tiramisu",
    description: "Coffee-flavored Italian dessert",
    price: 5.99,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  {
    id: "dessert-2",
    name: "Chocolate Chip Cookie",
    description: "Fresh baked cookie with chocolate chips",
    price: 2.49,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  
  // Cold Drinks
  {
    id: "cold-1",
    name: "Iced Coffee",
    description: "Chilled coffee served with ice",
    price: 3.99,
    category: "cold-drinks",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  {
    id: "cold-2",
    name: "Cold Brew",
    description: "Coffee brewed with cold water for 12+ hours",
    price: 4.99,
    category: "cold-drinks",
    image: "https://images.unsplash.com/photo-1578314675229-517a77e1c9f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  {
    id: "cold-3",
    name: "Iced Latte",
    description: "Espresso and milk served over ice",
    price: 5.49,
    category: "cold-drinks",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  }
];

export const categories = [
  { id: "coffee", name: "Coffee" },
  { id: "food", name: "Food" },
  { id: "dessert", name: "Desserts" },
  { id: "cold-drinks", name: "Cold Drinks" }
];
