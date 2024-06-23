function guineaPig(array) {
  let food = Number(array.shift()) * 1000;
  let hay = Number(array.shift()) * 1000;
  let cover = Number(array.shift()) * 1000;
  let pigsWeigth = Number(array.shift()) * 1000;

  for (let index = 1; index <= 30; index++) {
    food -= 300;
    if (index % 2 === 0) {
      hay -= food * 0.05;
    }
    if (index % 3 === 0) {
      cover -= pigsWeigth / 3;
    }
    if (food <= 0 || hay <= 0 || cover <= 0) {
      console.log("Merry must go to the pet store!");
      return;
    }
  }

  console.log(
    `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(
      2
    )}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
  );
}
guineaPig(["9", "5", "5.2", "1"]);
