function numberToLetter(num: number) {
  if (num < 0) {
    console.log("Input value must be 0 or greater");
  }

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return alphabet[num % 26];
}

export default numberToLetter;
