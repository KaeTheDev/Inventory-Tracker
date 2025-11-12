import PhysicalProduct from "./models/PhysicalProduct";
import DigitalProduct from "./models/DigitalProduct";

const book = new PhysicalProduct("9502", "JavaScript for Beginners", 10, 20);
const headphones = new DigitalProduct("9250", "Apple Beats", 250, 20);

const products = [book, headphones];

// Loop through and display details
for (const product of products) {
    console.log(product.displayDetails());          
    console.log("Price with tax:", product.getPriceWithTax()); 
    console.log("--------------------------------");
  }