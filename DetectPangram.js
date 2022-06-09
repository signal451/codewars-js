// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is 
// a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(str){
    let cache = {};
    for(let i=0; i < str.length; i++) {
        cache[str[i]] = (cache[str[i]] || 0) + 1;
        if(str.length - 1 === i) {
            delete cache[' '];
            break; 
        } 
    }
    let count =  Object.keys(cache).length;
    return count >= 26 ? true : false; 
  }


let str = "The quick brown fox jumps over the lazy dog" 


console.log(isPangram(str));