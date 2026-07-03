export class Product { 
    private readonly id: number;
    private name: string;
    private price: number;
    private stock: number;

    constructor(id: number, name: string, price: number, stock: number = 0){
        this.id = id;
        this.name = this.validateName(name);
        this.price = this.validatePrice(price);
        this.stock = this.validateStock(stock);
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getPrice(): number {
        return this.price;
    }
    getStock(): number {
        return this.stock;
    }
    setName(name: string): void {
        this.name = this.validateName(name);
    }
    setStock(stock: number): void {
        this.stock = this.validateStock(stock);
    }
    setPrice(price: number): void {
        this.price = this.validatePrice(price);
    }
    decreaseStock(quantity: number): void {
        if (quantity <= 0) {
            throw new Error("Quantity cannot be negative or zero");
        }
        if (this.stock < quantity) {
            throw new Error("Insufficient stock");
        }
        this.stock -= quantity;
    }
    increaseStock(quantity: number): void {
        if (quantity <= 0) {
            throw new Error("Quantity cannot be negative or zero");
        }
        this.stock += quantity;
    }
    private validateStock(stock: number ): number {
        if (stock < 0) {
            throw new Error("Stock cannot be negative");
        }
        return stock;
    }
    private validatePrice(price: number): number {
        if (price < 0) {
            throw new Error("Price cannot be negative");
        }
        return price;
    }
    private validateName(name: string): string {
        if (name.trim() === "") {
            throw new Error("Product name cannot be empty");
        }
        return name;
    }
}