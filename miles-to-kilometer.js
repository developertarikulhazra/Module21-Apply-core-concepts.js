function milesToKilometer(miles) {
  const kilometer = miles * 1.609;
  return kilometer;
}

const myMiles = 144;
const myKilometer = milesToKilometer(myMiles);
console.log(myKilometer);
