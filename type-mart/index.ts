import products from "./products";

let shipping: number = 0;
let taxPercentage: number;
let taxTotal: number;
let total: number;
const shippingAddress: string = "Adenta, Accra";
const productName: string = "fanny pack";
const product = products.filter(product => product.name === productName)[0];

if (product.preOrder === "true") {
    console.log("We will send you a message when your product is on its way.");
}

if (Number(product.price) >= 25) {
    shipping = 0;
    console.log("Free shipping for products GH₵25 and more");
} else if (Number(product.price) < 25) {
    shipping = 5;
}

if (shippingAddress.match(/Accra/)) {
    taxPercentage = 0.1;
} else {
    taxPercentage = 0.05;
}

taxTotal = Number(product.price) * taxPercentage;
total = Number(product.price) + taxTotal + shipping;
console.log(`the total cost for a ${product.name} bought in ${shippingAddress} should be $${total},
    Tax: $${taxTotal} + Shipping: $${shipping} = Total Amount: $${total}`);
