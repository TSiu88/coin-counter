// working
export class CoinCounter {
  countCoins(num, quarters, dimes, nickels, pennies) {
    const quarterPrice = 0.25;
    const dimePrice = 0.1;
    const nickelPrice = 0.05;
    const pennyPrice = 0.01;
    if (isNaN(num)) {
      return "Not a number";
    } else if (num < 0.01) {
      return `# Quarters ${quarters}. # Dimes ${dimes}. # Nickels ${nickels}. # Pennies ${pennies}.`;
    } else if (num / quarterPrice >= 1) {
      quarters = Math.trunc(num / quarterPrice);
      num = (num % quarterPrice).toFixed(2);
      return this.countCoins(num, quarters, dimes, nickels, pennies);
    } else if (num / dimePrice >= 1) {
      dimes = Math.trunc(num / dimePrice);
      num = (num % dimePrice).toFixed(2);
      return this.countCoins(num, quarters, dimes, nickels, pennies);
    } else if (num / nickelPrice >= 1) {
      nickels = Math.trunc(num / nickelPrice);
      num = (num % nickelPrice).toFixed(2);
      return this.countCoins(num, quarters, dimes, nickels, pennies);
    } else {
      pennies = Math.trunc(num / pennyPrice);
      num = (num % pennyPrice).toFixed(2);
      return this.countCoins(num, quarters, dimes, nickels, pennies);
    }
  }
}
// NOT WORKING BELOW
// var result = new Array();

// export class CoinCounter {
//   countCoins(num, array) {
//     const quarterPrice = 0.25;
//     const dimePrice = 0.1;
//     const nickelPrice = 0.05;
//     const pennyPrice = 0.01;
//     if (isNaN(num)) {
//       return "Not a number";
//     } else if (num === 0 && array.length === 0) {
//       return "No change";
//     } else if (num < 0.01) {
//       return array;
//     } else if (num / quarterPrice >= 1) {
//       //result[0] = Math.trunc(num / quarterPrice) + " quarters";
//       //return this.countCoins((num % quarterPrice).toFixed(2), result);
//       result = array.concat(Math.trunc(num / quarterPrice) + " quarters");
//       return this.countCoins((num % quarterPrice).toFixed(2), result);
//       // array.push(Math.trunc(num / quarterPrice) + " quarters");
//       // return array.concat(countCoins((num % quarterPrice).toFixed(2), result));
//     } else if (num / dimePrice >= 1) {
//       //result[1] = Math.trunc(num / dimePrice) + " dimes";
//       //return this.countCoins((num % dimePrice).toFixed(2), result);
//       result = array.concat(Math.trunc(num / dimePrice) + " dimes");
//       return this.countCoins((num % dimePrice).toFixed(2), result);
//     } else if (num / nickelPrice >= 1) {
//       //result[2] = Math.trunc(num / nickelPrice) + " nickels";
//       result = array.concat(Math.trunc(num / nickelPrice) + " nickels");
//       return this.countCoins((num % nickelPrice).toFixed(2), result);
//     } else {
//       //result[3] = Math.trunc(num / pennyPrice) + " pennies";
//       result = array.concat(Math.trunc(num / pennyPrice) + " pennies");
//       return this.countCoins((num % pennyPrice).toFixed(2), result);
//     }
//   }
// }

// var result = new Array();
// export class CoinCounter {
//   countCoins(num) {
//     const quarterPrice = 0.25;
//     const dimePrice = 0.1;
//     const nickelPrice = 0.05;
//     const pennyPrice = 0.01;
//     var result = [];
//     if (isNaN(num)) {
//       return "Not a number";
//     } else if (num === 0 && result.length === 0) {
//       return "No change";
//     } else if (num < 0.01) {
//       return result;
//     } else if (num / quarterPrice >= 1) {
//       result.push(Math.trunc(num / quarterPrice) + " quarters");
//       num = (num % quarterPrice).toFixed(2);
//       result = result.concat(this.countCoins(num));
//     } else if (num / dimePrice >= 1) {
//       result.push(Math.trunc(num / dimePrice) + " dimes");
//       num = (num % quarterPrice).toFixed(2);
//       result = result.concat(this.countCoins(num));
//     } else if (num / nickelPrice >= 1) {
//       result.push(Math.trunc(num / nickelPrice) + " nickels");
//       num = (num % quarterPrice).toFixed(2);
//       result = result.concat(this.countCoins(num));
//     } else {
//       result.push(Math.trunc(num / pennyPrice) + " pennies");
//       num = (num % quarterPrice).toFixed(2);
//       result = result.concat(this.countCoins(num));
//     }
//     return result;
//   }
// }
