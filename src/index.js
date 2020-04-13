export class CoinCounter {
  countCoins(num) {
    const quarterPrice = 0.25;
    const dimePrice = 0.1;
    const nickelPrice = 0.05;
    const pennyPrice = 0.01;
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    if (isNaN(num)) {
      return "Not a number";
    } else if (num === 0) {
      return `# Quarters ${quarters}. # Dimes ${dimes}. # Nickels ${nickels}. # Pennies ${pennies}`;
    } else {
      if (num / quarterPrice >= 1) {
        quarters = Math.floor(num / quarterPrice);
        return countCoins(num % quarterPrice);
      } else if (num / dimePrice >= 1) {
        dimes = Math.floor(num / dimePrice);
        return countCoins(num % dimePrice);
      } else if (num / nickelPrice >= 1) {
        nickels = Math.floor(num / nickelPrice);
        return countCoins(num % nickelPrice);
      } else {
        pennies = Math.floor(num / pennyPrice);
        return countCoins(num % pennyPrice);
      }
    }
  }
}
