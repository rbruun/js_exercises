"use strict";
(function(){
    
// define an array of numbers;
let mountains = [9555, 15123, 3212, 8888, 6872, 12344, 11938, 9382];

// sort the array, need to pass in a function so numbers will sort correctly
mountains.sort(function(a, b){return a-b});

// log the last number in the array, now the highest number
console.log("The tallest mountain is: " + mountains.pop());
    
})();