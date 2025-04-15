
import { MenuItem } from "../context/StoreContext";

export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: "coffee-1",
    name: "Espresso",
    description: "Rich, concentrated coffee served in a small cup",
    price: 2.99,
    category: "coffee",
    image: "/placeholder.svg"
  },
  {
    id: "coffee-2",
    name: "Cappuccino",
    description: "Espresso with steamed milk foam",
    price: 4.49,
    category: "coffee",
    image: "/placeholder.svg"
  },
  {
    id: "coffee-3",
    name: "Latte",
    description: "Espresso with steamed milk and a light layer of foam",
    price: 4.99,
    category: "coffee",
    image: "/placeholder.svg"
  },
  {
    id: "coffee-4",
    name: "Americano",
    description: "Espresso diluted with hot water",
    price: 3.49,
    category: "coffee",
    image: "/placeholder.svg"
  },
  {
    id: "coffee-5",
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk",
    price: 5.49,
    category: "coffee",
    image: "/placeholder.svg"
  },
  
  // Food
  {
    id: "food-1",
    name: "Croissant",
    description: "Buttery, flaky pastry",
    price: 3.99,
    category: "food",
    image: "/placeholder.svg"
  },
  {
    id: "food-2",
    name: "Blueberry Muffin",
    description: "Freshly baked muffin with blueberries",
    price: 3.49,
    category: "food",
    image: "/placeholder.svg"
  },
  {
    id: "food-3",
    name: "Avocado Toast",
    description: "Whole grain toast with smashed avocado and seasoning",
    price: 7.99,
    category: "food",
    image: "/placeholder.svg"
  },
  {
    id: "food-4",
    name: "Breakfast Sandwich",
    description: "Egg, cheese, and choice of bacon or sausage on a bagel",
    price: 6.99,
    category: "food",
    image: "/placeholder.svg"
  },
  
  // Desserts
  {
    id: "dessert-1",
    name: "Tiramisu",
    description: "Coffee-flavored Italian dessert",
    price: 5.99,
    category: "dessert",
    image: "/placeholder.svg"
  },
  {
    id: "dessert-2",
    name: "Chocolate Chip Cookie",
    description: "Fresh baked cookie with chocolate chips",
    price: 2.49,
    category: "dessert",
    image: "/placeholder.svg"
  },
  
  // Cold Drinks
  {
    id: "cold-1",
    name: "Iced Coffee",
    description: "Chilled coffee served with ice",
    price: 3.99,
    category: "cold-drinks",
    image: "/placeholder.svg"
  },
  {
    id: "cold-2",
    name: "Cold Brew",
    description: "Coffee brewed with cold water for 12+ hours",
    price: 4.99,
    category: "cold-drinks",
    image: "/placeholder.svg"
  },
  {
    id: "cold-3",
    name: "Iced Latte",
    description: "Espresso and milk served over ice",
    price: 5.49,
    category: "cold-drinks",
    image: "/placeholder.svg"
  }
];

export const categories = [
  { id: "coffee", name: "Coffee" },
  { id: "food", name: "Food" },
  { id: "dessert", name: "Desserts" },
  { id: "cold-drinks", name: "Cold Drinks" }
];
