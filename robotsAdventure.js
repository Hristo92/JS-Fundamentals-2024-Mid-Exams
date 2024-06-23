function robotsAdventure(array) {
  let cityGridCell = array.shift().split("|").map(Number);
  let robosTotalItemsCollected = 0;

  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    let splittedElement = element.split(" ");

    while (element !== "Adventure over") {
      if (splittedElement.includes("Step")) {
        let splittedElTokens = splittedElement[1].split("$");
        if (splittedElTokens.includes("Backward")) {
          let tokens = element.split(" ");
          let numsSplit = tokens[1].split("$");
          let startIndex = Number(numsSplit[1]);
          let steps = Number(numsSplit[2]);
          if (startIndex < 0 || startIndex > cityGridCell) {
            break;
          }

          for (let index = 0; index <= steps; index++) {
            steps--;
            if (index >= cityGridCell.length) {
              index = cityGridCell.length - 1;
            }
            lastIndex = steps;
          }
          robosTotalItemsCollected += Number(
            cityGridCell.splice(lastIndex, 1, 0)
          );
        }
        break;
      } else if (splittedElement.includes("Step")) {
        let splittedElTokens = splittedElement[1].split("$");
        if (splittedElTokens.includes("Forward")) {
          let tokens = element.split(" ");
          let numsSplit = tokens[1].split("$");
          let startIndex = Number(numsSplit[1]);
          let steps = Number(numsSplit[2]);
          if (startIndex < 0 || startIndex > cityGridCell) {
            break;
          }

          for (let index = 0; index <= steps; index++) {
            steps--;
            if (index > cityGridCell.length) {
              index = cityGridCell.length - 1;
            }
            lastIndex = steps;
          }
          robosTotalItemsCollected += Number(
            cityGridCell.splice(lastIndex, 1, 0)
          );
          break;
        }
      } else if (element === "Double 1") {
        let tokens = element.split(" ");

        if (Number(tokens[1]) < 0 || Number(tokens[1]) > cityGridCell.length) {
          break;
        }
        cityGridCell[Number(tokens[1])] *= 2;
        break;
      } else if (element === "Switch") {
        cityGridCell.reverse();
        break;
      }
      break;
    }
  }
  console.log(cityGridCell.join(" - "));
  console.log(
    `Robo finished the adventure with ${robosTotalItemsCollected} items!`
  );
}
robotsAdventure([
  "20|30|40|50|60",
  "Step Backward$0$12",
  "Step Forward$4$15",
  "Step Backward$2$5",
  "Double 1",
  "Switch",
  "Adventure over",
]);
