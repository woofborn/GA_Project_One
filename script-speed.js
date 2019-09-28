console.log("OMG PROJECT")

var word;
var input;
var score = 0;
var lives = 3;
var youWin = false;
var enterPress = 0;
let i=10
//each array will have 30 words (except for insane)
var easyWords = ["cat", "dog", "rat", "pen", "whale"]; //5-6 letters
var mediumWords = []; //9-10 letters
var hardWords = []; // 13-15 letters
var bonusWords = ["antidisestablishmentarianism", "floccinaucinihilipilification", "psychophysicotherapeutics", "radioimmunoelectrophoresis", "pneumoencephalographically", "otorhinolaryngological", "thyroparathyroidectomized", "psychoneuroendocrinological", "hepaticocholangiogastrostomy", "pseudopseudohypoparathyroidism" ]; //above 20 letters
//NOTE TO SELF: create different word arrays for story mode, concatenate arrays for speed mote!

function homeScreen(){
    document.getElementById("maincontainer").style.display = "none"

//creates main containing div
    var body = document.querySelector("body")
    var home = document.createElement("div")
    home.setAttribute("id", "homepage")
    body.appendChild(home)
//creates image background

    var backgroundDiv = document.createElement("div")

    backgroundDiv.style.backgroundImage = `url("images/backgroundblur.jpg")`
    backgroundDiv.style.height = "100vh"

    home.appendChild(backgroundDiv)

//creates welcome message

    var messageSpan = document.createElement("span")
    messageSpan.setAttribute("id", "message")

    messageSpan.setAttribute("class", "col-6")
    messageSpan.innerText = "Welcome to TypeQuest!"

    backgroundDiv.appendChild(messageSpan)
}
homeScreen()





//this function randomly selects word and displays the random word
function displayWord(array){

    word = array[Math.floor(Math.random() * array.length)];
    var display = document.getElementById("display");
    display.innerText = word;
}

function initiateCount(){
     if (enterPress === 1){
        countDown();
     }
}

document.getElementById("input").addEventListener("keypress", function(){
                input = event.target.value;
                if (event.key === "Enter"){
                enterPress ++
                initiateCount();
                checkMatch();
                displayWord(easyWords);//easy words for testing

                document.getElementById("inputbox").value = ""
                setTimeout(gameOver,1000)
                }
            })


//this function will check if user input matches generated word
function checkMatch(){
    if (input === word && enterPress !== 1){
        score++
           document.getElementById("number").innerText = score
           document.getElementById("checkmark").setAttribute("src", "images/checkmark.png")
           moveCat();
           moveBar();

    } else if (input !== word && enterPress !== 1) {
       lives-- // consider hiding lives for speed mode
       document.getElementById("checkmark").setAttribute("src", "images/crossout.png")
    }
}

function keepScore(){

//keeps track of player's score to know when to advance to next level

}

//this is the countdown timer
function countDown(){
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

function gameOver(){
        if (i === 0){
        alert("GAME OVER")
    }
}

function moveCat(){
    var movement = score * 10
    document.getElementById("cat").style.left = `${movement}%`
}

function moveBar() {
    var progressBar = document.getElementById("myBar");
    var width;

    if (score >= 1){
    width = score * 10;
    progressBar.style.width = `${width}%`;
    progressBar.innerHTML = `${width}%`;
    } else if (score > 10){
        width = 0
    }

}