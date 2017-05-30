"use strict";
(function(){
    
let startingPopulation = 200;
let birthRate = 0.1;
let numberOfWeeks = 5;
let endingPopulation = startingPopulation * Math.pow(1+birthRate, numberOfWeeks);

console.log ("There will be " + endingPopulation + " hares after " 
             + numberOfWeeks + " weeks if the growth rate is " +
            (birthRate * 100) + "%");

console.log ("Since you can't split hares, there will really only be " + Math.floor(endingPopulation) + " hares after " + numberOfWeeks + " weeks");
    
})();