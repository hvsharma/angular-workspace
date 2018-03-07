export class Ingredient {
  /*
    Declaring just this will have same effect as the model class Recipe has with
    all the field declarations and getters + setters
  */
  constructor(private name: string, private amount: number) {}

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getAmount(): number {
    return this.amount;
  }

  setAmount(amount: number) {
    this.amount = amount;
  }
}
