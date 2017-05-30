"use strict";

(function () {

    //make sure the page is loaded
    window.onload = function () {
        
        let word = "window"
        let hangman = [];
        let wrong = 0;
        let wordList = word.split("");
        let pageWord = document.querySelector("#word");
        //add letter placeholder divs on page equal to number of letters in word
        for (let i = 0; i < word.length; i++) {
            pageWord.innerHTML = pageWord.innerHTML + "<div class='letter'></div>";
        }

        let message = document.querySelector("#message");

        // load all of the body parts in to an array
        hangman.push(document.querySelector("#head"));
        hangman.push(document.querySelector("#body"));
        hangman.push(document.querySelector("#leftarm"));
        hangman.push(document.querySelector("#rightarm"));
        hangman.push(document.querySelector("#leftleg"));
        hangman.push(document.querySelector("#rightleg"));

        document.querySelector("#submit").addEventListener("click", function () {
            let letterEntered = document.querySelector("#letterEntered").value.toLowerCase();

            // check if the entered letter is in the word
            if (letterEntered == "") {
                message.innerHTML = "Please enter a letter";
                
            } else if (word.indexOf(letterEntered) < 0) {
                hangman[wrong].removeAttribute("class");
                wrong += 1;
                message.innerHTML = "The word does not contain that letter";
                if (wrong == 6) {
                    message.innerHTML = message.innerHTML + ",  you Lose!!";
                    // show the dead eyes
                    document.querySelector("#deadeye").removeAttribute("class");
                    
                    // hide the input box and submit button
                    document.querySelector("#inputLetter").className = "hide";
                    
                    // show the start over button
                    document.querySelector("#reset").removeAttribute("class");
                }
            } else {
                message.innerHTML = "Good guess!!";
                updateWord(letterEntered);
            }
        });
        
        document.querySelector("#reset").addEventListener("click", function(){
            window.location.reload();
        });


        function updateWord(letter) {
            for (let i = 0; i < wordList.length; i++) {
                if (wordList[i] == letter) {;
                    pageWord.childNodes[i + 1].innerHTML = letter;
                }
            }
        }
    }
    

})();
