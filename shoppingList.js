function shoppingList(array) {
  let shoppingList = array.shift().split("!");

  let command = array.shift();

  while (command !== "Go Shopping!") {
    let tokens = command.split(" ");

    if (tokens[0] === "Urgent") {
      if (!shoppingList.includes(tokens[1])) {
        shoppingList.unshift(tokens[1]);
      }
    } else if (tokens[0] === "Unnecessary") {
      if (shoppingList.includes(tokens[1])) {
        let idx = shoppingList.indexOf(tokens[1]);
        shoppingList.splice(idx, 1);
      }
    } else if (tokens[0] === "Correct") {
      if (shoppingList.includes(tokens[1])) {
        let idx = shoppingList.indexOf(tokens[1]);
        shoppingList.splice(idx, 1, tokens[2]);
      }
    } else if (tokens[0] === "Rearrange") {
      if (shoppingList.includes(tokens[1])) {
        let idx = shoppingList.indexOf(tokens[1]);
        let item = shoppingList.splice(idx, 1);
        shoppingList.push(item);
      }
    }

    command = array.shift();
  }
  console.log(shoppingList.join(", "));
}
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
