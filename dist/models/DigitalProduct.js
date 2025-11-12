import Product from "./Product.js";
export default class DigitalProduct extends Product {
    _fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this._fileSize = fileSize;
    }
    get fileSize() {
        return `${this._fileSize} MB`;
    }
    getPriceWithTax() {
        return this.price;
    }
    displayDetails() {
        return `${super.displayDetails()} File size: ${this.fileSize}`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map