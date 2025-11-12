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
    getPriceWithTax(taxRate) {
        return (this.price = this.price * taxRate);
    }
}
//# sourceMappingURL=Product.js.map