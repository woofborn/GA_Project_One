console.log("OMG PROJECT")

var word;
var input;
//each array will have 30 words (except for insane)
var easyWords = []; //5-6 letters
var mediumWords = []; //9-10 letters
var hardWords = []; // 13-15 letters
var bonusWords = ["antidisestablishmentarianism", "floccinaucinihilipilification", "psychophysicotherapeutics", "radioimmunoelectrophoresis", "pneumoencephalographically", "otorhinolaryngological", "thyroparathyroidectomized", "psychoneuroendocrinological", "hepaticocholangiogastrostomy", "pseudopseudohypoparathyroidism" ]; //above 20 letters

//this function will randomly select word from relevant array
function randomWord(array){
    word = array[Math.floor(Math.random() * array.length)];
}
randomWord(bonusWords);

//this function displays the random word that user should type
function displayWord(){
    randomWord(bonusWords);
    var display = document.getElementById("display");
    display.innerText = word;
}


document.getElementById("input").addEventListener("keypress", function(){
                if (event.key === "Enter"){
                displayWord();
                document.getElementById("inputbox").value = ""
                }
            })






function checkMatch(){

//this function will check if user input matches generated word

}

function keepScore(){

//keeps track of player's score to know when to advance to next level

}

function countDown(){

//this should be a set interval that counts down the time

}