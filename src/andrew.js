export class CoinCounterAndrew {
  countCoins(num) {
    if (isNaN(num)) {
      return "Not a number";
    }
    const quarterPrice = 0.25;
    const dimePrice = 0.1;
    const nickelPrice = 0.05;
    const pennyPrice = 0.01;
    const result = [0, 0, 0, 0];
    return recurse(result);

    function recurse(result) {
      if (num === 0) {
        return result;
      }
      if (num / quarterPrice >= 1) {
        result[0] = Math.trunc(num / quarterPrice);
        num = (num % quarterPrice).toFixed(2);
        return recurse(result);
      }
      if (num / dimePrice >= 1) {
        result[1] = Math.trunc(num / dimePrice);
        num = (num % dimePrice).toFixed(2);
        return recurse(result);
      }
      if (num / nickelPrice >= 1) {
        result[2] = Math.trunc(num / nickelPrice);
        num = (num % nickelPrice).toFixed(2);
        return recurse(result);
      } else {
        result[3] = Math.trunc(num / pennyPrice);
        return result;
      }
    }
  }
  // formatResponse(arr) {
  //   let response = "";
  //   let constants = [
  //     "quarter",
  //     "quarters",
  //     "dime",
  //     "dimes",
  //     "nickel",
  //     "nickels",
  //     "penny",
  //     "pennies",
  //   ];

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === 1) {
  //       response += 1 + " " + constants[i];
  //     } else if (arr[i] >= 2) {
  //       response += arr[i] + " " + constants[i + 1];
  //     }
  //   }
  //   if (response === "") {
  //     return "No change";
  //   }
  //   return response;
  // }
}
