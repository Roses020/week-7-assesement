// 1) Sum Zero
// Write a function that takes in an array of numbers. 
// The function should return True if any two numberss in list sum to 0, and false otherwise

function addToZero(Arr){
    for(let i =0; i < Arr.length; i++){
        for(let j =0; j < Arr.length; j++){
         if(Arr[i] + Arr[j] === 0 && j !== i){
         return true
        }

        }
    }
        return false
    }
         console.log(addToZero([1, 2, 3, -2]))
           console.log(addToZero([]))

 //  the time complexity for this code is. 
// O(n^2)

// 2) Unique Characters
// Write a function that takes in a single word, as a string. 
// It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(str){
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < str.length; j++){
            if(str[i] === str[j] && j !== i){
                
            return false
           }
   
        } 
    }
           return true
       }
       console.log(hasUniqueChars("monday"))
       console.log(hasUniqueChars("moonday"))
   
        // the time complexity for this code is.
        //       O(n^2)

// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(strArr){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < alphabet.length; i++) {
        if (strArr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    return true
}
 console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
 console.log(isPangram("I like cats, but not mice"))
//  the time complexity for this code is.
// O(n)



// Write a function, find_longest_word, 
// that takes a list of words and returns the length of the longest one.

function findLongestWord(listOfwords){
    let varrlength = 0
    for(let i =0; i < listOfwords.length; i++){
        if(listOfwords[i].length > varrlength){ 
            varrlength = listOfwords[i].length
        }
    
   }
   return varrlength
}
   console.log (findLongestWord(["hi", "hello"]))

   //  the time complexity for this code is.

// O(n)
