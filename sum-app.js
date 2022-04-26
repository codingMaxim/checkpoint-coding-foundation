class SumApp {
  // Add you solution here
  constructor(numbers) {
    this.numbers = [];
  }

  addNumber(n) {
    return this.numbers.push(n);
  }

  getSum() {
    let sum = 0;
    if (this.numbers.length === 0) {
      return 0;
    }

    for (let i = 0; i < this.numbers.length; i++) {
      sum += this.numbers[i];
    }

    return sum;
  }

  reset() {
    this.numbers = [];
  }
}
