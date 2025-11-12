import Product from "./Product.js";
export default class PhysicalProduct extends Product {
    _weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this._weight = weight;
    }
    get weight() {
        return `${this._weight} kg`;
    }
    getPriceWithTax() {
        const taxRate = 0.1; // 10%
        return this.price + this.price * taxRate;
    }
    displayDetails() {
        return `${super.displayDetails()} Weight: ${this.weight}`;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map