import Product from "./Product";

export default class PhysicalProduct extends Product {
   private _weight: number;

    constructor(sku: string, name: string, price: number, weight: number){
        super(sku, name, price);
        this._weight = weight;
    }

    get weight(): string {
        return `${this._weight} kg`;
        }
    
    getPriceWithTax(): number {
        const taxRate = 0.1; // 10%
        return this.price + this.price * taxRate;
    }

    displayDetails(): string {
        return `${super.displayDetails()} Weight: ${this.weight}`;
      }
}