/*
  Write a function `reve` which takes a string as input and returns the reversed version of the string.

  What is reversing a string?
  - Reversing a string means rearranging its characters in the opposite order.

  Example:
  - Input: "Sumana"
  - Output: "anamuS"

  - Input: "hello"
  - Output: "olleh"

  - Input: ""
  - Output: ""

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseString`
*/

function reverseString(str) {
  // Your code here
  let arr = str.split("");
  let start = 0;
  let end = str.length-1;
  while(start<=end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--; 
  }
  return arr.join("");
}

module.exports = reverseString;
