import { CoinCounter } from "./../src/index.js";

describe("CoinCounter", () => {
  let coinCounter = new CoinCounter();

  test("Should return message on 'Not a number'", () => {
    const number = "number";
    expect(coinCounter.countCoins(number)).toEqual("Not a number");
  });

  // test("Should return zeros for all coin amounts", () => {
  //   const number = 0;
  //   expect(countCoins(number)).toEqual(
  //     "# Quarters 0. # Dimes 0. # Nickles 0. # Pennies 0"
  //   );
  // });

  // test("Should return 1 quarter", () => {
  //   const number = 0.25;
  //   expect(countCoins(number)).toEqual(
  //     "# Quarters 1. # Dimes 0. # Nickles 0. # Pennies 0"
  //   );
  // });
});
