function musicPlaylist(array) {
  let listOfSongs = array.shift().split(" ");
  let numberOfCommands = Number(array.shift());

  for (let index = 0; index < numberOfCommands; index++) {
    let element = array[index];
    let tokens = element.split(" * ");
    let command = tokens.shift();
    if (command === "Add Song") {
      if (listOfSongs.includes(tokens[0])) {
        continue;
      }
      listOfSongs.push(tokens[0]);
      console.log(`${tokens[0]} successfully added`);
    } else if (command === "Delete Song") {
      if (listOfSongs.length < Number(tokens[0])) {
        continue;
      }
      let deletedSongs = listOfSongs.splice(0, Number(tokens[0]));
      console.log(`${deletedSongs.join(", ")} deleted`);
    } else if (command === "Shuffle Songs") {
      if (Number(tokens[0]) < 0 && Number(tokens[1]) > listOfSongs.length) {
        continue;
      } else if (
        Number(tokens[0]) < 0 ||
        Number(tokens[1]) > listOfSongs.length
      ) {
        continue;
      } else if (
        Number(tokens[0]) >= 0 &&
        Number(tokens[1]) < listOfSongs.length
      ) {
        let firstSong = listOfSongs[Number(tokens[0])];
        let secondSong = listOfSongs[Number(tokens[1])];

        firstSong = secondSong;
        secondSong = listOfSongs[Number(tokens[0])];

        console.log(`${firstSong} is swapped with ${secondSong}`);
      }
    } else if (command === "Insert") {
      if (Number(tokens[1]) >= 0 && Number([tokens[1]] < listOfSongs.length)) {
        if (listOfSongs.includes(tokens[0])) {
          console.log("Song is already in the playlist");
          continue;
        }
        listOfSongs.splice(Number(tokens[1]), 0, tokens[0]);
        console.log(`${tokens[0]} successfully inserted`);
      } else if (
        Number(tokens[1]) < 0 ||
        Number(tokens[1]) > listOfSongs.length
      ) {
        console.log(`Index out of range`);
      }
    } else if (command === "Sort") {
      listOfSongs.sort((a, b) => b.localeCompare(a));
    } else if (command === "Play") {
      console.log(`Songs to Play:`);
      for (const songs of listOfSongs) {
        console.log(songs);
      }
    }
  }
}
musicPlaylist([
  "Imagine BadGuy BohemianRhapsody BlindingLights",
  "6",
  "Add Song * ShapeOfYou",
  "Delete Song * 2",
  "Shuffle Songs * 0 * 3",
  "Insert * RollingInTheDeep * 1",
  "Sort",
  "Play",
]);
