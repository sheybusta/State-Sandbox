// this functions works
/*
 * computes the average of all numbers in an array
 * if the array has no entries, it returns 0
 * @param {number[]} arrOfNumbers - an array of numbers to average
 * @returns {number} the average of all numbers in the array
 */

const average = (arrOfNumbers) => {
  if (arrOfNumbers === 0) {
    return 0;
  }

  const numberOfNumbers = arrOfNumbers.length;
  const sum = arrOfNumbers.reduce((sum, next) => sum + next); // sum of numbers
  const avergare = sum / numberOfNumbers;
  return average;
};

export { average };
