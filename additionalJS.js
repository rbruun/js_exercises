"use strict";
(function(){


    function sum(a, b){
     return a+b;
    }

    function avg(a, b, c) {
        return (a + b + c)/3;
    }
    
    function greaterThan(a,b) {
        return b > a;
    }
    
    function secondLargest(params) {
        params.sort(function(a, b){return a-b});
        return params[1];
    }
    
    function containsVowel(a) {
        return (a.includes("a") ||
            a.includes("e") ||
            a.includes("i") ||
            a.includes("o") ||
            a.includes("u")); 
    }
    
    function pigLatin(a){
        let vowels = "aeiouAEIOU";
        
        let words = a.split(" ");
        
        for (let i=0;i<words.length;i++) {
            let word = words[i];
            for (let j=0;j<word.length;j++) {
                if (vowels.includes(word.charAt(j))) {
                    words[i] = word.substr(j) + word.substr(0,j) + 'ay';
                    break;
                }
            }
        }
        return words.join(" ");
    }
    
    function longestWord(phrase) {
        let words = phrase.split(" ");
        let longest = "";
        for (let i=0; i<words.length;i++){
            if (words[i].length > longest.length) {
                longest = words[i];
            }
        }
        
        return(longest);
    }

    function weave(word, nbr) {
        
    }
    
    console.log("Sum result 5 + 9: " + sum(5,9));
    console.log("Sum result 5 + 4: " + sum(4,5));

    console.log("Average of 1, 5, 9: " + avg(1,5,9));
    console.log("Average of 4, 4, 4: " + avg(4,4,4));
    console.log("Average of 10, 4, 1: " + avg(10,4,1));
    
    console.log("Is 6 > 5: " + greaterThan(5,6));
    console.log("Is 1 > 4: " + greaterThan(4,1));
    
    console.log("second largest 1, 4, 5, 8: " + secondLargest([1, 4, 5, 8]));
    console.log("second largest 8, 3, 5, 1, 9, 10: " + secondLargest([8, 3, 5, 1, 9, 10]));
    
    console.log("Contains vowel 'alpha': " + containsVowel('alpha'));
    console.log("Contains vowel 'hmph': " + containsVowel('hmph'));
    
    console.log("Pig latin 'good day': " + pigLatin("good day"));
    
    console.log("Longest word: " + longestWord('have you ever seen a penguin go to tea?'));
    console.log("Longest word: " + longestWord('fool me once, shame on me. fool me twice, shame on heathcliff'));
})();