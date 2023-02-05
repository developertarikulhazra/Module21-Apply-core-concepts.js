function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    // console.log("Your year is leap year", year);

    return true;
  } else {
    // console.log("Your year is not lear year", year);
    return false;
  }
}
const isMyLeapYear = isLeapYear(1933);
console.log("my year :", isMyLeapYear);
const isHerYearLeapYear = isLeapYear(1960);
console.log("Her year:", isHerYearLeapYear);
