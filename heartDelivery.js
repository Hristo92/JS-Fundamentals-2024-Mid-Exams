function heartDelivery(array) {
  let nums = array.shift().split("@").map(Number);

  let commands = array.shift();
  let lastPosition = 0;
  let counterHadDay = 0;
  let counterDidNotHaveDay = 0;

  while (commands !== "Love!") {
    let tokens = commands.split(" ");

    for (let index = 0; index < nums.length; index++) {
      if (nums[index] === 0) {
        console.log(`Place ${index} already had Valentine's day.`);
        counterHadDay++;
      }
      let sum = Number(nums[tokens[1]]) - 2;
      nums.splice(Number(tokens[1]), 1, sum);
      if (nums[index] === 0) {
        console.log(`Place ${index} has Valentine's day.`);
        counterHadDay++;
      }

      counterDidNotHaveDay++;
      lastPosition = index;
      if (Number[tokens[1]] > nums.length) {
        index = 0;
      }
      break;
    }
    commands = array.shift();
  }
  console.log(`Cupid's last position was ${lastPosition}.`);

  if (counterHadDay === nums.length) {
    console.log("Mission was successful.");
  } else {
    console.log(`Cupid has failed ${counterDidNotHaveDay} places.`);
  }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
// heartDelivery([
//   "2@4@2",
//   "Jump 2",
//   "Jump 2",
//   "Jump 8",
//   "Jump 3",
//   "Jump 1",
//   "Love!",
// ]);
