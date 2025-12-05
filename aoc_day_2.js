// --- Day 2: Secret Entrance ---

const listOfInputs = [
  "11 - 22",
  "95 - 115",
  "998 - 1012",
  "1188511880 - 1188511890",
  "222220 - 222224",
  "1698522 - 1698528",
  "446443 - 446449",
  "38593856 - 38593862",
  "565653 - 565659",
  "824824821 - 824824827",
  "2121212118 - 2121212124",
];

let invalidIDTotal = 0;

listOfInputs.forEach((item) => {
  let numberArray = item.match(/\d+/g);

  for (n = numberArray[0]; n <= numberArray[1]; n++) {
    console.log(`n = ${n}`);
    // ignore strings of odd length
    if (n.toString().length % 2 == 0) {
      let i = n;
      let partOne = i.toString().slice(0, i.length / 2);
      let partTwo = i.toString().slice(i.length / 2, i.length);

      console.log(`partOne: ${partOne}`);
      console.log(`partTwo: ${partTwo}`);

      console.log(n.length);
    }
  }
});

console.log(`The password is ${invalidIDTotal} `);
