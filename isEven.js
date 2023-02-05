// console.log(4 % 2);
// console.log(49 % 2);
// console.log(40 % 2);
// console.log(41 % 2);
// console.log(94 % 2);
// console.log(49 % 2);

function isEven(number) {
  const remainder = number % 2;
  console.log(remainder);
  if (remainder === 0) {
    // console.log("Number is even");
    return true;
  } else {
    // console.log("number is odd");
    return false;
  }
}

isEven(502503);
isEven(1280);
const myEveneNumber = isEven(520);
console.log(myEveneNumber);
