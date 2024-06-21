function blackFlag(array) {
  let days = Number(array[0]);
  let plunderForADay = Number(array[1]);
  let expectedPlunder = Number(array[2]);
  let totalPlunder = 0;

  for (let index = 1; index <= days; index++) {
    totalPlunder += plunderForADay;

    if (index % 3 === 0) {
      totalPlunder += plunderForADay * 0.5;
    }
    if (index % 5 === 0) {
      totalPlunder -= totalPlunder * 0.3;
    }
  }

  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentageCollected = (totalPlunder / expectedPlunder) * 100;
    console.log(
      `Collected only ${percentageCollected.toFixed(2)}% of the plunder.`
    );
  }
}
blackFlag(["10", "20", "380"]);
