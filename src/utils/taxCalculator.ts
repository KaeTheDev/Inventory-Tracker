import Product from "../models/Product";

function CalculateTax(product: Product): number {
    const taxRate = 0.1; // 10% tax
    const taxAmount = product.price * taxRate;
    return product.price + taxAmount;
} 