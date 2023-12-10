/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    

        numbers.sort((a, b) => a - b);
        // To sort elements in an array in JavaScript, 
        // you can use the sort() method. 
        // However, by default, sort() converts the elements to strings and sorts them lexicographically.
        return numbers[numbers.length-1];

}

module.exports = findLargestElement;