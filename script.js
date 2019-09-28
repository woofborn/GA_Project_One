console.log("OMG PROJECT")

var word;
var input;
var score = 0;
var lives = 3;
var youWin = false;
var enterPress = 0;
var timer=10;
var storyTracker = 0;
//each array will have 30 words (except for insane)
var easyWords = ["cat", "dog", "rat", "pen", "whale"]; //5-6 letters
var mediumWords = []; //9-10 letters
var hardWords = []; // 13-15 letters
var bonusWords = ["antidisestablishmentarianism", "floccinaucinihilipilification", "psychophysicotherapeutics", "radioimmunoelectrophoresis", "pneumoencephalographically", "otorhinolaryngological", "thyroparathyroidectomized", "psychoneuroendocrinological", "hepaticocholangiogastrostomy", "pseudopseudohypoparathyroidism" ]; //above 20 letters
//NOTE TO SELF: create different word arrays for story mode, concatenate arrays for speed mode!

function homeScreen(){

//creates main containing div
    var body = document.querySelector("body")
    var home = document.createElement("div")
    home.setAttribute("id", "homepage")
    body.appendChild(home)
//creates image background

    var backgroundDiv = document.createElement("div")

    backgroundDiv.style.backgroundImage = `url("images/backgroundblur.jpg")`
    backgroundDiv.setAttribute("class", "col-12 d-flex justify-content-center")
    backgroundDiv.style.height = "100vh"

    home.appendChild(backgroundDiv)

//creates welcome message

    var messageSpan = document.createElement("span")
    messageSpan.setAttribute("id", "homemessage")
    messageSpan.setAttribute("class", "col-12 d-flex justify-content-center")
    messageSpan.innerText = "Welcome to TypeQuest!"
    backgroundDiv.appendChild(messageSpan)
    // typeWriter()

//creates button div
    var buttonDiv = document.createElement("div")
    buttonDiv.setAttribute("class", "col-8 d-flex justify-content-center")
    messageSpan.appendChild(buttonDiv)

//creates Story button
    var buttonOne = document.createElement("button");
    buttonOne.innerText = "Story Mode"
    buttonOne.setAttribute("class", "col-6 btn btn-outline-light btn-lg")
    buttonDiv.appendChild(buttonOne)

//creates Speed button
    var buttonTwo = document.createElement("button");
    buttonTwo.innerText = "Speed Mode"
    buttonTwo.setAttribute("class", "col-6 btn btn-outline-light btn-lg")
    buttonTwo.setAttribute("id", "button-two")
    buttonDiv.appendChild(buttonTwo)
    document.getElementById("button-two").addEventListener("click", function(){
    document.getElementById("maincontainer").style.display = "initial"
    document.getElementById("homepage").style.display = "none"
    })
}
// homeScreen()

// function typeWriter(){
//          var i = 0
//          var welcomeText = "Welcome to TypeQuest!"

//              if (i < welcomeText.length){
//                 document.getElementById("homemessage").innerText += welcomeText.charAt(i);
//                 i++
//                 setTimeout(typeWriter, 30)
//             }
//         }


//this function randomly selects word and displays the random word - for speed mode
function displayWord(array){

    word = array[Math.floor(Math.random() * array.length)];
    var display = document.getElementById("display");
    display.innerText = word;
}

//this function shuffles arrays - for story mode
function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
}

function displayShuffledArray(array){
    shuffle(peasantQuest[storyTracker]["array"]);
        var i = 0
    while (i < 3){
        var display = document.getElementById("display");
        display.innerText = peasantQuest[storyTracker]["array"][i];
        word = peasantQuest[storyTracker]["array"][i];
        i++
        console.log(word)
    }
}


function initiateCount(){
     if (enterPress === 1){
        countDown();
     }
}

function speedMode(){
    document.getElementById("input")
        .addEventListener("keypress", function(){
        input = event.target.value;
            if (event.key === "Enter"){
            enterPress ++
            initiateCount();
            checkMatchSpeed();
            displayWord(easyWords);//easy words for testing

            document.getElementById("inputbox").value = ""
            setTimeout(gameOver,1000)
            }
        })
}

function displayMessage(){
    document.getElementById("message").innerText = peasantQuest[storyTracker]["message"]
}
displayMessage()
displayShuffledArray();

function gameMode(){
    displayMessage()
    document.getElementById("input")
        .addEventListener("keypress", function(){
            input = event.target.value;

            if (event.key === "Enter"){
                var shuffledArray = shuffle(peasantQuest[storyTracker]["array"]);
                checkMatchStory();
                displayShuffledArray(shuffledArray);
                document.getElementById("inputbox").value = ""
            }
        })


}
gameMode();

//this function will check if user input matches generated word
function checkMatchSpeed(){
    if (input === word && enterPress !== 1){
        score++
           document.getElementById("number").innerText = score
           document.getElementById("checkmark").setAttribute("src", "images/checkmark.png")
           moveCat();
           // moveBar();

    } else if (input !== word && enterPress !== 1) {
       lives-- // consider hiding lives for speed mode
       document.getElementById("checkmark").setAttribute("src", "images/crossout.png")
    }
}

function checkMatchStory(){
    if (input === word){
        score++
           document.getElementById("number").innerText = score
           document.getElementById("checkmark").setAttribute("src", "images/checkmark.png")
           moveCat();
           // moveBar();

    } else if (input !== word) {
       lives-- // consider hiding lives for speed mode
       document.getElementById("checkmark").setAttribute("src", "images/crossout.png")
    }

     if (score === 3){
            storyTracker++
            score === 0
        }
}

function keepScore(){

//keeps track of player's score to know when to advance to next level

}

//this is the countdown timer
function countDown(){
    var interval =
    setInterval(function(){
                    document.getElementById("seconds").innerText = timer;
                    if (timer<=5){
                    document.getElementById("seconds").style.color = "red"
                    }
                        if (timer === 0){
                        clearInterval(interval)
                        }
                     timer--;
                    },1000);
}

function gameOver(){
        if (timer === 0){
        alert("GAME OVER")
    }
}

function moveCat(){
    var movement = score * 10
    document.getElementById("cat").style.left = `${movement}%`
}

// function moveBar() {
//     var progressBar = document.getElementById("myBar");
//     var width;

//     if (score >= 1){
//     width = score * 10;
//     progressBar.style.width = `${width}%`;
//     progressBar.innerHTML = `${width}%`;
//     } else if (score > 10){
//         width = 0
//     }
// }