import Product from "../models/Product";
function CalculateTax(product) {
    const taxRate = 0.1; // 10% tax
    const taxAmount = product.price * taxRate;
    return product.price + taxAmount;
}
//# sourceMappingURL=taxCalculator.js.map