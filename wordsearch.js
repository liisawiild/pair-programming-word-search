//transpose() function from week 4
const transpose = function(matrix) {
  const transposedArray = [];
  for (let row = 0; row < matrix[0].length; row++) {
    const tempArray = [];
    for (let column = 0; column < matrix.length; column++) {
      tempArray.push(matrix[column][row]);
    }
    transposedArray.push(tempArray);
  }
  return transposedArray;
};
  

// input: array - [ [], [], [], 'FRANK']
// processsing: takes in the whole array, looks at each subarray = ls
//              ls joins together into one 'word' = horizontalJoin (array)
//              loops through horizontal array to look at each word
// output: true or false


const wordSearch = (letters, word) => {
  // return undefined if letters array is empty
  if (letters.length === 0) {
    return undefined;
  }
  //join letters array letters and pass into a new array
  const horizontalJoin = letters.map(ls => ls.join(''));
  //loop through new array's elements (words)
  for (let l of horizontalJoin) {
    // return true if word is found within l (words)
    if (l.includes(word)) {
      return true;
    }
  }
  //if word is not found, transpose the wordsearch to search vertically
  let verticalLetters = transpose(letters);
  //join letters array letters and pass into a new array
  const verticalJoin = verticalLetters.map(ls => ls.join(''));
  //loop through new array's elements (words)
  for (let l of verticalJoin) {
    // return true if word is found within l (words)
    if (l.includes(word)) {
      return true;
    }
  }
  //return false if the word is not found horizontally or vertically
  return false;
};

module.exports = wordSearch;

@lilyjwhitford was my pair-programming partner! 
