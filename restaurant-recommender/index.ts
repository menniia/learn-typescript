import { Order, orders, priceBracket } from "./orders";
import { Restaurant, restaurants } from "./restaurants";

const getMaxPrice = (price: priceBracket): number => {
    if (price === priceBracket.Low) {
        return 10.0;
    } else if (price === priceBracket.Medium) {
        return 20.0;
    } else if (price === priceBracket.High) {
        return 30.0
    }
    throw new Error("Invalid Price Bracket");
}

const getOrders = (price: priceBracket, orders: Order[][]): Order[][] => {
    const filteredOrders: Order[][] = [];
    orders.filter((restaurantOrders: Order[]) => {
        const result = restaurantOrders.filter((order: Order) => {
            order.price <= getMaxPrice(price);
        });
        filteredOrders.push(result);
    });
    return filteredOrders;
};

const printOrders = (restaurants: Restaurant[], orders: Order[][]) => {
    restaurants.forEach((restaurant: Restaurant, index: number) => {
        const restaurantOrders = orders[index];
        if (restaurantOrders.length > 0) {
            console.log(`Orders for ${restaurant.name}`);
            restaurantOrders.forEach(order => {
                console.log(`- Order ${order.name}: ${order.price}`);
            })
        }
    })
}

const eligibleOrders = getOrders(priceBracket.Low, orders);
printOrders(restaurants, eligibleOrders);