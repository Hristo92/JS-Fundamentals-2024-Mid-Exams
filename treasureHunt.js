function treasureHunt(array) {
  let initialLoot = array.shift().split("|");

  for (const row of array) {
    let tokens = row.split(" ");
    let command = tokens.shift();
    while (command !== "Yohoho!") {
      if (command === "Loot") {
        for (let index = 0; index < tokens.length; index++) {
          let element = tokens[index];
          if (!initialLoot.includes(element)) {
            initialLoot.unshift(element);
          }
        }
        break;
      } else if (command === "Drop") {
        if (Number(tokens[0]) >= 0 && Number(tokens[0]) < initialLoot.length) {
          let removed = initialLoot.splice(Number(tokens[0]), 1);
          initialLoot.push(removed);
        }
        break;
      } else if (command === "Steal") {
        if (initialLoot.length < Number(tokens[0])) {
          let stolenItems = initialLoot.splice(0);
          console.log(stolenItems.join(", "));
          break;
        }
        let stolenItems = initialLoot.splice(
          initialLoot.length - Number(tokens[0])
        );
        console.log(stolenItems.join(", "));
        break;
      }
    }
  }

  if (initialLoot.length <= 0) {
    console.log("Failed treasure hunt.");
  } else {
    let sum = 0;

    for (let index = 0; index < initialLoot.length; index++) {
      let element = initialLoot[index];
      sum += element.length;
    }
    let avgTreasureGain = sum / initialLoot.length;
    console.log(
      `Average treasure gain: ${avgTreasureGain.toFixed(2)} pirate credits.`
    );
  }
}
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
