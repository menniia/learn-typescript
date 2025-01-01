import restaurants from "./restaurants";


const cediSign = "GH₵";
const deliveryTimeMinutes = 90;
const maxDistance = "10";
let result: string;
let hour: number = new Date().getHours();

const priceBracket: number = cediSign.length;

const filteredRestaurants = restaurants.filter(restaurant => {
    if(Number(restaurant.priceBracket) > priceBracket) {
        return false;
    }
    if(restaurant.deliveryTimeMinutes > deliveryTimeMinutes) {
        return false
    }
    if(restaurant.distance > maxDistance) {
        return false;
    }
    if(hour < Number(restaurant.openHour) || hour > Number(restaurant.closeHour)) {
        return false;
    }

    return restaurant;
})

if(filteredRestaurants.length === 0) {
    result = "There are no restaurants available";
} else {
    result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}