import { COIN_TYPES } from "../../utils/constants.js";
import { calculateMoney } from "../../utils/calculateMoney.js";
import { insertQuantityOfCoins } from "../../views/purchaseManager/showReturnCoins.js";
import {
  getItemFromLocalStorage,
  setItemFromLocalStorage,
  removeItemFromLocalStorage,
} from "../../utils/itemFromLocalStorage.js";

// 자판기 안에 있는 모든 동전 반환
const returnAllCoinsInMachine = (coins, moneyInMachine, money) => {
  setItemFromLocalStorage("money", money - moneyInMachine);
  removeItemFromLocalStorage("coins");
  insertQuantityOfCoins(coins);
};

const countOfCoinType = (coinType, coinQuantity, money) => {
  const count = money / coinType;
  let quantity = 0;

  if (count <= coinQuantity) {
    money -= coinType * count;
    quantity = count;
  } else {
    money -= coinType * coinQuantity;
    quantity = coinQuantity;
  }

  return { quantity: quantity, money: money };
};

const returnMinCountOfCoins = (coinsInMachine, money) => {
  const returnCoins = [];

  for (let i = 0; i < COIN_TYPES.length; i++) {
    // eslint-disable-next-line prettier/prettier
    const resultOfThisStep = countOfCoinType(COIN_TYPES[i], coinsInMachine[i], money);
    money = resultOfThisStep.money;
    returnCoins.push(resultOfThisStep.quantity);
    coinsInMachine[i] -= resultOfThisStep.quantity;
  }

  setItemFromLocalStorage("money", money);
  setItemFromLocalStorage("coins", coinsInMachine.join(","));
  insertQuantityOfCoins(returnCoins);
};

const returnCoins = money => {
  const strOfCoinsInMachine = getItemFromLocalStorage("coins");

  if (strOfCoinsInMachine) {
    const coinsInMachine = strOfCoinsInMachine.split(",");
    const moneyInMachine = calculateMoney();

    if (moneyInMachine <= money) {
      returnAllCoinsInMachine(coinsInMachine, moneyInMachine, money);
    } else {
      returnMinCountOfCoins(coinsInMachine, money);
    }
  }
};

export { returnCoins };
