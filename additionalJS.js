"use strict";
(function(){


    function sum(a, b){
     return a+b;
    };

    function avg() {
        let total = 0;
        for (let i=0; i<arguments.length; i++) {
            total += arguments[i];
        }
        return total/arguments.length;
    }
    
    function greaterThan(a,b) {
        return b > a;
    };
    
    function secondLargest(params) {
        params.sort(function(a, b){return a-b});
        return params[1];
    };
    
    function containsVowel(a) {
        return (a.includes("a") ||
            a.includes("e") ||
            a.includes("i") ||
            a.includes("o") ||
            a.includes("u")); 
    };
    
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
    };
    
    function longestWord(phrase) {
        let words = phrase.split(" ");
        let longest = "";
        for (let i=0; i<words.length;i++){
            if (words[i].length > longest.length) {
                longest = words[i];
            }
        }
        
        return(longest);
    };

    function weave(word, nbr) {
        for (let i=1; i<word.length; i++) {
            if (i % nbr == 0){
                word = word.substr(0, i-1) + 'x' + word.substr(i);
            }
        }
        return word;
    };
    
    function totalBill(bill) {
        return Math.ceil(bill * 1.2);
    };
    
    function multiples(a, b){
        let counter = 1;
        while (counter <= 100) {
            if (counter % a == 0 && counter % b ==0){
                console.log(counter + " is divisible by " + a + " and " + b);
            }
            counter++;   
        }
    };
    
    function blackjack(cards) {
        let handTotal = 0;
        for (let i=0; i<cards.length; i++){
            if (cards[i] == "K" || cards[i] == "Q" || cards[i] == "J") {
                handTotal = handTotal + 10; 
            } else if (cards[i] == "A") {
                handTotal = handTotal + 11;
            } else {
                handTotal = handTotal + parseInt(cards[i]);
            }
        }
        // if hand is a bust, then try using each ace as 1 instead of 11
        if (handTotal > 21) {
            for (let i=0; i<cards.length; i++){
                if (cards[i] == "A") {
                    handTotal = handTotal - 10;
                }
                if (handTotal == 21) {
                    break;
                }
            }
        }
        if (handTotal <= 21) {
            return false;
        } else {
            return true;
        }
    };
    
    function divisors(num) {
        for (let i=0; i<=num; i++) {
            if (num % i == 0) {
                console.log (num + " is divisible by " + i);
            }
        }    
    };
    
    function hamming(a,b) {
        let same = 0;
        if (a.length != b.length) {
            return 0;
        }      
        for (let i=0; i<a.length; i++) {
            if (a.charAt(i) == b.charAt(i)) {
                same++;
            }
        }
        return same;
    };
    
    function pokemon(catches) {
        let total = 0;
        let runningTotal = [];
        for (let i=0; i < catches.length; i++) {
            total += catches[i];
            runningTotal.push(total);
        }
        return runningTotal;
    };
    
    function find(numberList, num) {
        for (let i=0; i<numberList.length; i++) {
            if (num == numberList[i]) {
                return i;
            }
        }
        return "Number not found";
    }
    
    function double(a) {
        return a*2;
    }
    
    function triple(a) {
        return a*3;
    }
    
    function even(a) {
        if (a % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }
    
    function odd(a) {
        if (a % 2 != 0) {
            return true;
        } else {
            return false;
        }
    }
    
    function map(numberlist, myFunction){
        let newList = [];
        for (let i=0; i<numberlist.length; i++) {
            newList.push(myFunction(numberlist[i]));
        }
        return newList;
    }
    
    function filter(numberlist, myFunction){
        let newList = [];
        for (let i=0; i<numberlist.length; i++) {
            if (myFunction(numberlist[i])) {
                newList.push(numberlist[i]);
            }
        }
        return newList;
    }
    
    function Sprinter(name, time) {
        this.name = name;
        this.time = time;
    }
    
    function sprint(sprinters) {
        let bestTime = 99999;
        let bestSprinter = "";
        for (let i=0; i<sprinters.length; i++) {
            if (sprinters[i].time < bestTime) {
                bestTime = sprinters[i].time;
                bestSprinter = sprinters[i].name;
            }
        }
        return bestSprinter;
    }
    
    function LetterValue() {
        let letters = ["a","b","c","d","e","f","g","h","i","j","k",
                   "l","m","n","o","p","q","r","s","t","u","v",
                   "w","x","y","z"];
        let values  = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3,
                   10, 1, 1, 1, 1, 4, 4, 8, 4, 10];
        
        this.getValue = function(a) {
            return values[letters.indexOf(a)];
        }
    }
    
    function scrabble(word, lettervalue) {
        let score = 0;
        let letters = word.split("");
        for (let i=0; i<letters.length; i++) {
            score += lettervalue.getValue(letters[i]);
        }
        return score;
    }

    console.log("Sum result 5 + 9: " + sum(5,9));
    console.log("Sum result 5 + 4: " + sum(4,5));

    console.log("Average of 1, 5, 9: " + avg(1,5,9));
    console.log("Average of 4, 4, 4: " + avg(4,4,4));
    console.log("Average of 6, 4, 6, 4: " + avg(6,4,6,4));
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
    
    console.log("Weave word - purpose with x in every 3rd position: " + weave("purpose", 3));
    
    console.log("The total for an 18.98 bill would be: " + totalBill(18.98) );
    
    console.log("Calling multiples function:")
    multiples(3,4);
    
    console.log("Calling blackjack with A,A: " + blackjack(["A", "A"]));
    console.log("Calling blackjack with A,K " + blackjack(["A", "K"]));
    console.log("Calling blackjack with A,A,10 " + blackjack(["A", "A", 10]));
    console.log("Calling blackjack with 5,5,7,8 " + blackjack([5, 5, 7, 8]));
    
    console.log("calling divisor with 10");
    divisors(10);
    console.log("calling divisor with 32");
    divisors(32);
    console.log("calling divisor with 11");
    divisors(11);
    
    console.log("calling hamming with 'hit', 'miss': " + hamming('hit','miss'));
    console.log("calling hamming with 'darth', 'vader': " + hamming('darth','vader'));
    console.log("calling hamming with 'woo hoo', 'hoo woo': " + hamming('hoo woo','woo hoo'));
    
    console.log("calling pokemon with [1, 2, 5, 1, 3] " + pokemon([1, 2, 5, 1, 3]));    
    
    console.log("find 5 in [1, 3, 5, 7, 9] at index: " + find([1,3,5,7,9], 5));
    
    console.log("calling map[1,2,3,4,5] with function to double: " + map([1,2,3,4,5], double));
    console.log("calling map[1,2,3,4,5] with function to triple: " + map([1,2,3,4,5], triple));
    
    console.log("calling filter[1,2,3,4,5,6,7] with function to select even " + filter([1,2,3,4,5,6,7], even));
    console.log("calling filter[1,2,3,4,5,6,7] with function to select odd " + filter([1,2,3,4,5,6,7], odd));
    
    
    console.log("the winner of the race is: ", sprint([new Sprinter("Angela", 9.8),
                    new Sprinter("Bruce", 7.7),
                    new Sprinter("Adam", 9.7),
                    new Sprinter("William", 8.8),
                    new Sprinter("Joseph"), 7.9]));
    
    
    console.log("Scrabble value of 'exposure': " + scrabble("exposure", new LetterValue()));
    console.log("Scrabble value of 'quota' is: " + scrabble("quota", new LetterValue()));
    
})();