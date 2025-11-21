export default class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `${this.name} costs $${this.price} and the SKU is ${this.sku}.`;
    }
    getPriceWithTax() {
        return this.price;
    }
}
//# sourceMappingURL=Product.js.map