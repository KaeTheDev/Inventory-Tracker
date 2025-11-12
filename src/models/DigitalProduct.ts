import Product from "./Product";

export default class DigitalProduct extends Product {
   private _fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this._fileSize = fileSize;
    }

    get fileSize(): string {
        return `${this._fileSize} MB`;
        }
        
    getPriceWithTax(): number {
        return this.price;
    }

    displayDetails(): string {
        return `${super.displayDetails()} File size: ${this.fileSize}`;
      }      
}