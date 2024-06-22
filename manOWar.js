function manOWar(array) {
  let pirateShip = array.shift().split(">").map(Number);
  let warShip = array.shift().split(">").map(Number);
  let maxHealthCapacity = Number(array.shift());
  let pirateShipSum = 0;
  let warShipSum = 0;
  let sectionsForRepairCount = 0;

  for (const commands of array) {
    let tokens = commands.split(" ");
    let command = tokens.shift();

    while (command !== "Retire") {
      if (command === "Fire") {
        if (Number(tokens[0]) >= 0 && Number(tokens[0]) < warShip.length) {
          let damage = Number(warShip[tokens[0]]) - Number([tokens[1]]);
          if (damage <= 0) {
            console.log("You won! The enemy ship has sunken.");
            return;
          }
          warShip.splice(Number(tokens[0]), 1, damage);
        }
        break;
      } else if (command === "Defend") {
        if (Number(tokens[0]) >= 0 && Number(tokens[1]) < pirateShip.length) {
          for (
            let index = Number(tokens[0]);
            index <= Number(tokens[1]);
            index++
          ) {
            pirateShip[index] -= Number(tokens[2]);
            if (pirateShip[index] <= 0) {
              console.log("You lost! The pirate ship has sunken.");
              return;
            }
          }
        }
        break;
      } else if (command === "Repair") {
        if (Number(tokens[0]) >= 0 && Number(tokens[0]) < pirateShip.length) {
          let healedNum = Number(tokens[1]) + Number(pirateShip[tokens[0]]);
          if (healedNum > maxHealthCapacity) {
            healedNum = maxHealthCapacity;
          }
          pirateShip.splice(Number(tokens[0]), 1, healedNum);
        }
        break;
      } else if (command === "Status") {
        for (let index = 0; index < pirateShip.length; index++) {
          let element = pirateShip[index];
          let percentage = maxHealthCapacity * 0.2;
          if (element < percentage) {
            sectionsForRepairCount++;
          }
        }
        console.log(`${sectionsForRepairCount} sections need repair.`);
        break;
      }
    }
  }
  for (let index = 0; index < pirateShip.length; index++) {
    let element = pirateShip[index];
    pirateShipSum += element;
  }
  for (let index = 0; index < warShip.length; index++) {
    let element = warShip[index];
    warShipSum += element;
  }
  console.log(`Pirate ship status: ${pirateShipSum}`);
  console.log(`Warship status: ${warShipSum}`);
}
manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
