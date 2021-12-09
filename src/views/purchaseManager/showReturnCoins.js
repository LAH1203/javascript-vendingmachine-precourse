import { COIN_TYPES } from "../../utils/constants.js";
import { insertCoinTypeToTable } from "../chargeManager/showCoinsInMachine.js";

const insertCoinTypesToTable = $table => {
  COIN_TYPES.forEach(coinType => {
    insertCoinTypeToTable($table, coinType, `coin-${coinType}-quantity`);
  });
};

const makeEmptyTable = () => {
  const $returnCoinTable = document.getElementById("return-coin-table");

  $returnCoinTable.innerHTML = `
    <th>동전</th>
    <th>개수</th>
  `;

  insertCoinTypesToTable($returnCoinTable);
};

const showReturnCoins = money => {
  makeEmptyTable();

  if (money > 0) {
    // 가진 동전 개수와 잔돈 비교하여 반환
  }
};

export { showReturnCoins };