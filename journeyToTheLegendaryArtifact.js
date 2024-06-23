function journeyToTheLegendaryArtifact(array) {
  let initialEnergy = Number(array.shift());
  let mountainCounter = 0;
  let piecesCount = 0;

  for (let index = 0; index < array.length; index++) {
    let element = array[index];

    while (element !== "Journey ends here!") {
      if (element === "mountain") {
        initialEnergy -= 10;
        mountainCounter++;
        if (mountainCounter % 3 === 0) {
          piecesCount++;
        }
        break;
      } else if (element === "desert") {
        initialEnergy -= 15;
        break;
      } else if (element === "forest") {
        initialEnergy += 7;
        break;
      }
    }

    if (piecesCount >= 3) {
      console.log(
        `The character reached the legendary artifact with ${initialEnergy.toFixed(
          2
        )} energy left.`
      );
      return;
    }
    if (initialEnergy <= 0) {
      console.log(
        `The character is too exhausted to carry on with the journey.`
      );
      return;
    }
  }

  if (piecesCount < 3) {
    let piecesNeeded = 3 - piecesCount;
    console.log(
      `The character could not find all the pieces and needs ${piecesNeeded} more to complete the legendary artifact.`
    );
  }
}
journeyToTheLegendaryArtifact([
  "130.0",
  "mountain",
  "desert",
  "mountain",
  "forest",
  "mountain",
  "desert",
  "desert",
  "mountain",
  "mountain",
  "desert",
  "mountain",
  "forest",
  "mountain",
  "mountain",
  "forest",
  "mountain",
  "Journey ends here!",
]);
