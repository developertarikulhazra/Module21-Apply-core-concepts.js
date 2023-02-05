function getSumOfArray(numbers) {
  console.log(numbers);
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    console.log(index, element, sum);
  }
  return sum;
}

function getOddNumberOfArray(numbers) {
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    // console.log(i);
    const index = i;
    const element = numbers[index];
    if (element % 2 === 1) {
      console.log(index, element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

const myNumber = [12, 65, 45, 78, 45, 91];
const oddNumbers = getOddNumberOfArray(myNumber);
console.log(oddNumbers);
getSumOfArray(myNumber);
const oddNumberSum = getSumOfArray(oddNumbers);
console.log("odd number sum", oddNumberSum);
