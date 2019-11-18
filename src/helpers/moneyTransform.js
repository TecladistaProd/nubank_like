export default (money, options = {}) => {
  money = money.toFixed(2).split(".");
  money[0] = money[0].split("");
  let nNumb = "";
  let c = 0;
  for (let i = 0; i < money[0].length; i++) {
    c++;
    nNumb += money[0][i];
    if (c % 3 === 0 && !!money[0][c]) {
      nNumb += options.type || ".";
    }
  }
  money[0] = nNumb;
  switch (options.type) {
    case ".":
      money.join(",");
      break;
    case ",":
      money.join(".");
      break;
    default:
      money.join(",");
      break;
  }
  return options.currency + " " + money;
};
