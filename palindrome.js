"use strict";
(function(){
    
let word1 = "racecar";
let word2 = "annaconda";


isPalindrome(word1);
isPalindrome(word2);

function isPalindrome(word) {
    console.log(word == word.split("").reverse().join(""));
}

})();