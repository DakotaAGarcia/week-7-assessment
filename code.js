const addToZero =(arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          return true;
        }
      }
    }
    return false;
  }
  console.log(addToZero([]));
  // -> False
  
  console.log(addToZero([1]));
  // -> False
  
  console.log(addToZero([1, 2, 3]));
  // -> False
  
  console.log(addToZero([1, 2, 3, -2]));
  // -> True

//-------------------------------------------------------------O(n^2)







  const hasUniqueChars= (word) => {
    for (let i = 0; i < word.length; i++) {
      for (let j = i + 1; j < word.length; j++) {
        if (word[i] === word[j]) {
          return false;
        }
      }
    }
    return true;
  }

  console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False

//----------------------------------------------------O(n^2)





const isPangram = (str) =>{
    let AZ ="abcdefghijklmnopqrstuvwxyz";

    for(i = 0; i < AZ.length; i++){
        if( !str.toLowerCase().includes(AZ[i])){
            return false;
        } 
    }
    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

//---------------------------------------------------------------------O(1)







const findLongestWord = (word) =>{
    let longestWord = 0;
    for(i = 0; i < word.length; i++){
        const currentWord = word[i].length;
        if(longestWord < currentWord){
            longestWord = currentWord;
        }

    }
return longestWord;

}

console.log(findLongestWord(["hi", "hello","good day"]))

//--------------------------------------------------------------O(n)