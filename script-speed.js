console.log("OMG PROJECT")

var word;
var input;
var score = 0;
var lives = 3;
//each array will have 30 words (except for insane)
var easyWords = ["cat", "dog", "rat", "pen", "whale"]; //5-6 letters
var mediumWords = []; //9-10 letters
var hardWords = []; // 13-15 letters
var bonusWords = ["antidisestablishmentarianism", "floccinaucinihilipilification", "psychophysicotherapeutics", "radioimmunoelectrophoresis", "pneumoencephalographically", "otorhinolaryngological", "thyroparathyroidectomized", "psychoneuroendocrinological", "hepaticocholangiogastrostomy", "pseudopseudohypoparathyroidism" ]; //above 20 letters

var wordInputs = [];




//this function randomly selects word and displays the random word
function displayWord(array){

    word = array[Math.floor(Math.random() * array.length)];
    var display = document.getElementById("display");
    display.innerText = word;

}


document.getElementById("input").addEventListener("keypress", function(){
                input = event.target.value;
                if (event.key === "Enter"){
                countDown();
                checkMatch();
                displayWord(easyWords);//easy words for testing

                document.getElementById("inputbox").value = ""

                }
            })

//this function will check if user input matches generated word
function checkMatch(){
    if (input === word){
        score++
           document.getElementById("number").innerText = score

    } else {
       lives--
    }
}

function keepScore(){

//keeps track of player's score to know when to advance to next level

}

//this is the countdown timer
function countDown(){
    let i=30
    var interval =
    setInterval(function(){
                    document.getElementById("seconds").innerText = i;
                    if (i<=5){
                    document.getElementById("seconds").style.color = "red"
                    }
                        if (i === 0){
                        clearInterval(interval)
                        }
                     i--;
                    },1000);


}