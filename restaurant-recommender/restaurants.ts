import { priceBracket } from "./orders";

export const restaurants = [
  {
    name: "Silver Rice Sushi 🍣",
    priceBracket: priceBracket.Medium,
    deliveryTimeMinutes: 40,
    openHour: "12",
    closeHour: "23",
    distance: "5",
  },
  {
    name: "Nikko's Rotisserie Chicken 🍗",
    priceBracket: priceBracket.Low,
    deliveryTimeMinutes: 20,
    openHour: "12",
    closeHour: "21",
    distance: "8",
  },
  {
    name: "Aita Trattoria 🍝",
    priceBracket: priceBracket.High,
    deliveryTimeMinutes: 60,
    openHour: "18",
    closeHour: "22",
    distance: "1",
  },
  {
    name: "Lula Bagel 🥯",
    priceBracket: priceBracket.Low,
    deliveryTimeMinutes: 20,
    openHour: "0",
    closeHour: "12",
    distance: "2",
  },
  {
    name: "Golden Chopstick 🥢",
    priceBracket: priceBracket.Medium,
    deliveryTimeMinutes: 20,
    openHour: "15",
    closeHour: "23",
    distance: "12",
  },
];

export type Restaurant = (typeof restaurants)[0];
