"use strict";
(function(){

lookForLetter("superduperwillywonkawankerboy", "e");
lookForLetter("aaabbbccc", "a");


function lookForLetter(word, letter) {
    // this will split the word based on letter selected
    // the array will contain one more entry than the number of occurences found
    let count = (word.split(letter).length - 1);

    if (count > 0) {
        console.log("Yeah, the letter '" + letter + "' exists " + count + " times in my word.");

    } else {
        console.log("Nope, that letter doesn't exist in my word.");
    }
}
})();
