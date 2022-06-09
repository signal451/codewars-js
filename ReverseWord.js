/*   Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.  */

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"



function reverseWords(str) {
    // Go for it
    let words = str.split(' ');
    let arr = [];

    if(words.length === 1) return reverse(words[0]);

    for(let i = 0; i < words.length; i++) {
        let chars = reverse(words[i]) + " ";
        arr.push(chars);
    }

    return arr.join("").trim();
  }

  function reverse(word) {
      let temp = '';
      for(let i = word.length - 1; i >= 0; i--) {
          if(word[i] != undefined) {
              temp += word[i];
          }
      }
      return temp
  }


  reverseWords("This is an example!");

