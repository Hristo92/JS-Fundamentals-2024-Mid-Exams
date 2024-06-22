function theLift(array) {
  let peopleWaiting = Number(array.shift());
  let liftCurrentAvailability = array.shift().split(" ").map(Number);
  let maxCapacity = 4;
  let liftSpaceCount = 0;

  for (let index = 0; index <= peopleWaiting; index++) {
    let currentLIft = liftCurrentAvailability[index];
    if (currentLIft < maxCapacity) {
      let availability = maxCapacity - currentLIft;
      if (peopleWaiting <= availability) {
        availability = peopleWaiting;
      }
      peopleWaiting -= availability;
      liftCurrentAvailability[index] = availability + currentLIft;
    }
  }

  if (peopleWaiting > 0) {
    console.log(
      `There isn't enough space! ${peopleWaiting} people in a queue!`
    );
    console.log(liftCurrentAvailability.join(" "));
  } else {
    for (let lift of liftCurrentAvailability) {
      if (lift === 4) {
        liftSpaceCount++;
      }
    }
    if (liftSpaceCount !== liftCurrentAvailability.length) {
      console.log("The lift has empty spots!");
      console.log(`${liftCurrentAvailability.join(" ")}`);
    } else {
      console.log(`${liftCurrentAvailability.join(" ")}`);
    }
  }
}
theLift(["15", "0 0 0 0"]);
