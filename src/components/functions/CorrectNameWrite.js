export function correctNameWrite(name) {
  let tempName = [...name];
  let tempName2 = [];
  tempName.forEach((letter, index) => {
    if (index === 0) {
      tempName2.push(letter.toUpperCase());
    } else {
      tempName2.push(letter.toLowerCase());
    }
  });
  return tempName2.join("");
}
