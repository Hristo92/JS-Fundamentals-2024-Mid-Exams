function computerStore(array) {
  let index = 0;
  let price = array[index];
  index++;
  let totalPrice = 0;

  while (price !== "special" && price !== "regular") {
    if (Number(price) <= 0) {
      console.log("Invalid price!");
      price = array[index];
      index++;
      continue;
    }
    totalPrice += Number(price);
    price = array[index];
    index++;
  }
  if (totalPrice <= 0) {
    console.log("Invalid order!");
    return;
  }

  let taxedMoney = totalPrice * 0.2;
  let finalPrice = totalPrice + taxedMoney;
  if (price === "special") {
    finalPrice -= finalPrice * 0.1;
  }

  console.log(`Congratulations you've just bought a new computer!
  Price without taxes: ${totalPrice.toFixed(2)}$
  Taxes: ${taxedMoney.toFixed(2)}$
  -----------
  Total price: ${finalPrice.toFixed(2)}$`);
}
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);
