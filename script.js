console.log("OMG PROJECT")

var word;
var input;
var score = 0;
var lives = 6;
var youWin = false;
var enterPress = 0;
var timer=5;
var storyTracker = 0;
var giantArray = [];
//each array will have 30 words (except for insane)

var bonusWords = ["antidisestablishmentarianism", "floccinaucinihilipilification", "psychophysicotherapeutics", "radioimmunoelectrophoresis", "pneumoencephalographically", "otorhinolaryngological", "thyroparathyroidectomized", "psychoneuroendocrinological", "hepaticocholangiogastrostomy", "pseudopseudohypoparathyroidism" ]; //above 20 letters
//NOTE TO SELF: create different word arrays for story mode, concatenate arrays for speed mode!

window.addEventListener("load", homeScreen)

function homeScreen(){
//creates main containing div
    var body = document.querySelector("body")
    var home = document.createElement("div")
    home.setAttribute("id", "homepage")
    body.appendChild(home)
//creates image background
    var backgroundDiv = document.createElement("div")
    backgroundDiv.style.backgroundImage = `url("images/greywall.jpg")`

    backgroundDiv.setAttribute("class", "col-12 d-flex justify-content-center")
    backgroundDiv.style.height = "100vh"
    home.appendChild(backgroundDiv)
//creates welcome message
    var messageSpan = document.createElement("span")
    messageSpan.setAttribute("id", "homemessage")
    messageSpan.setAttribute("class", "col-12 d-flex justify-content-center")
    messageSpan.style.lineHeight = "200px";
    messageSpan.innerHTML = `<p>Welcome to <a href = "instructions.html"> TypeQuest</a>!</p>`
    backgroundDiv.appendChild(messageSpan)
    // typeWriter()

//creates button div
    var buttonDiv = document.createElement("div")
    buttonDiv.setAttribute("class", "col-8 d-flex justify-content-center")
    messageSpan.appendChild(buttonDiv)
//creates Story button
    var buttonOne = document.createElement("button");
    buttonOne.innerText = "Story Mode"
    buttonOne.setAttribute("class", "col-6 btn btn-outline-dark btn-lg")
    buttonOne.setAttribute("id", "button-one")
    buttonDiv.appendChild(buttonOne)
    document.getElementById("button-one").addEventListener("click", function(){
    document.getElementById("maincontainer").style.display = "initial"
    document.getElementById("homepage").style.display = "none"
    storyMode()
    })
//creates Speed button
    var buttonTwo = document.createElement("button");
    buttonTwo.innerText = "Speed Mode"
    buttonTwo.setAttribute("class", "col-6 btn btn-outline-dark btn-lg")
    buttonTwo.setAttribute("id", "button-two")
    buttonDiv.appendChild(buttonTwo)
    document.getElementById("button-two").addEventListener("click", function(){
    document.getElementById("maincontainer").style.display = "initial"
    document.getElementById("homepage").style.display = "none"
    speedMode()
    })
}

function gameEndScreen(){
document.getElementById("maincontainer").style.display = "none"

//creates main containing div
    var body = document.querySelector("body")
    var end = document.createElement("div")
    end.setAttribute("id", "endpage")
    body.appendChild(end)
//creates background color
    var backgroundDiv = document.createElement("div")
    backgroundDiv.setAttribute("class", "col-12 d-flex justify-content-center")
    backgroundDiv.style.height = "100vh"
    end.appendChild(backgroundDiv)
    if (youWin === false){
        backgroundDiv.style.backgroundColor = "black"
    } else {

         document.querySelector("body").style.backgroundImage = `url("images/fire.jpg")`
         document.querySelector("body").style.backgroundSize = "cover"
         var audioTheme = document.createElement("audio")
        audioTheme.setAttribute("id", "victory")

        document.getElementById("maincontainer").appendChild(audioTheme)
        var theme = document.createElement("source")
        theme.setAttribute("src", "victory.mp3")
        audioTheme.appendChild(theme)
        // audioTheme.play()

    }
//creates game ended message
    var messageSpan = document.createElement("span")
    messageSpan.setAttribute("id", "endmessage")
    messageSpan.setAttribute("class", "col-12 d-flex justify-content-center")
    messageSpan.style.lineHeight = "100px"
        if (youWin === false){
            messageSpan.innerText = `GAME OVER
                                    Your score was: ${score}.
                                    Would you like to play again?`
        } else {
            messageSpan.innerText = `You beat TypeQuest!
                                    Your score was: ${score}!
                                    Would you like to play again?`
        }
    backgroundDiv.appendChild(messageSpan)
//creates button div
    var buttonDiv = document.createElement("div")
    buttonDiv.setAttribute("class", "col-8 d-flex justify-content-center")
    messageSpan.appendChild(buttonDiv)
//creates Yes button
    var buttonOne = document.createElement("button");
    buttonOne.innerText = "HECK YES"
    buttonOne.setAttribute("class", "col-6 btn btn-outline-dark btn-lg")
    buttonOne.setAttribute("id", "button-yes")
    buttonDiv.appendChild(buttonOne)
    document.getElementById("button-yes").addEventListener("click", function(){
        window.location.reload()
    })
//creates No button
    var buttonTwo = document.createElement("button");
    buttonTwo.innerText = `absolutely
                            NOT`
    buttonTwo.setAttribute("class", "col-6 btn btn-outline-light btn-lg")
    buttonTwo.setAttribute("id", "button-no")
    buttonDiv.appendChild(buttonTwo)
    document.getElementById("button-no").addEventListener("click", function(){
    window.location = "http://www.nyan.cat/"
    })
}

var k = 0
function typeWriter(){

     var welcomeText = "Welcome to TypeQuest!"

     while (k < welcomeText.length){
        document.getElementById("homemessage").innerText += welcomeText.charAt(k);
        k++
        var interval = setTimeout(typeWriter, 50)

     }
}

//FOR STORY MODE

function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
}
//this function shuffles arrays - for story mode
function displayShuffledArray(array){
    var i = 0
    var display = document.getElementById("display");
    display.innerText = peasantQuest[storyTracker]["array"][i];
    word = peasantQuest[storyTracker]["array"][i];
    i++
    console.log(array)
}

//first story displayed
function displayMessage(){
    document.getElementById("message").innerText = peasantQuest[storyTracker]["message"]
}

enterPress = 1 //enterpress count for storymode
var i = 1

function storyMode(){
    document.querySelector("body").style.backgroundImage = `url("images/wood.jpg")`
    document.querySelector("body").style.backgroundSize = "cover"
    displayMessage()
    shuffle(peasantQuest[storyTracker]["array"])
    displayShuffledArray();

    document.getElementById("timer").style.visibility = "hidden"

    var audioTheme = document.createElement("audio")
    audioTheme.setAttribute("id", "storyTheme")
    document.getElementById("maincontainer").appendChild(audioTheme)
    var theme = document.createElement("source")
    theme.setAttribute("src", "terra-theme.mp3")
    audioTheme.appendChild(theme)

    // audioTheme.play();

    document.getElementById("input")
        .addEventListener("keypress", function(){
            input = event.target.value;

            if (event.key === "Enter"){
                checkMatchStory();

                var display = document.getElementById("display");
                display.innerText = peasantQuest[storyTracker]["array"][i];
                word = peasantQuest[storyTracker]["array"][i];
                i++

                console.log(i + "second")

                console.log(word + "second")

                displayMessage();

                enterPress = enterPress+1
                console.log("enter times:" + enterPress)
                document.getElementById("inputbox").value = ""

                if (enterPress%3 === 0 && storyTracker < 11){
                storyTracker++
                console.log("story tracker:" + storyTracker)
                i = 0
                shuffle(peasantQuest[storyTracker]["array"])
                }

                if (enterPress === 7){
                    document.getElementById("cat").style.visibility = "visible"
                }
                else if (enterPress === 13){
                document.querySelector("body").style.backgroundImage = `url("images/forest.jpg")`
                 document.querySelector("body").style.backgroundSize = "cover"
                 document.getElementById("swordstone").style.visibility = "visible"
                }


                else if (enterPress === 16){
                    document.getElementById("warrior").style.visibility = "visible"
                } else if (enterPress === 19){
                    document.getElementById("sword").style.visibility = "visible"
                }

                else if (enterPress === 25){
                     document.getElementById("goat").style.visibility = "visible"
                     document.querySelector("body").style.backgroundImage = `url("images/moat.jpeg")`
                 document.querySelector("body").style.backgroundSize = "cover"
                }

                if (enterPress === 37){
                    youWin = true // add in between whether game won or lost
                    var audioTheme = document.getElementById("storyTheme")
                    audioTheme.pause()
                    gameEndScreen();
                }
            }
        })
}

function checkMatchStory(){
    if (input === word){
        score++
           document.getElementById("number").innerText = score
           document.getElementById("checkmark").setAttribute("src", "images/checkmark.png")
           // moveCat();
           // moveBar();

    } else if (input !== word) {
       document.getElementById("checkmark").setAttribute("src", "images/crossout.png")
       // if (lives > 0){
       //     var lifeBar = document.querySelector("#lifebar")
       //     var life = document.querySelector(`#life${lives}`)
       //     lifeBar.removeChild(life)
       //     lives--
       //  } else if (lives === 0) {
       //      gameEndScreen()
       //  }
    }
}


////////////////////////SPEED MODE////////////////////
var enterPressSpeed = 0
//initiate timer for speed mode
function initiateCount(){
     if (enterPressSpeed === 1){
        countDown();
     }
}

//this function randomly selects word and displays the random word - for speed mode
function displayWord(array){
    word = array[Math.floor(Math.random() * array.length)];
    var display = document.getElementById("display");
    display.innerText = word;
}

// function timerLength(){
//     document.getElementById("timer-input").addEventListener("keypress", function(){
//         if (event.key === "Enter"){
//             timer = event.target.value
//         }
//     })
// }

function speedMode(){
    var audioTheme = document.createElement("audio")
    audioTheme.setAttribute("id", "speedTheme")
    document.getElementById("maincontainer").appendChild(audioTheme)
    var theme = document.createElement("source")
    theme.setAttribute("src", "ThemeA.mp3")
    audioTheme.appendChild(theme)
    // audioTheme.play()

    document.getElementById("lives").style.visibility = "hidden"

    concatArray();

    var timerInput = document.getElementById("timer-input");
    timerInput.onchange = function(){
        timer = timerInput.value;
    }


    document.querySelector("body").style.backgroundImage = `url("images/clocks.jpg")`
    document.querySelector("body").style.backgroundSize = "cover"
    document.getElementById("input")
        .addEventListener("keypress", function(){
        input = event.target.value;

            if (event.key === "Enter"){

            enterPressSpeed ++
            initiateCount();
            checkMatchSpeed();

            displayWord(giantArray);

            document.getElementById("inputbox").value = ""


            }
        })
}

//this function will check if user input matches generated word
function checkMatchSpeed(){
    if (input === word && enterPressSpeed !== 1){
        score++
           document.getElementById("number").innerText = score
           document.getElementById("checkmark").setAttribute("src", "images/checkmark.png")
           moveCat();
           // moveBar();

    } else if (input !== word && enterPressSpeed !== 1) {
       lives-- // consider hiding lives for speed mode
       document.getElementById("checkmark").setAttribute("src", "images/crossout.png")
    }

}


//this is the countdown timer function
function countDown(){

    var interval =
    setInterval(function(){
                    document.getElementById("seconds").innerText = timer;
                    timer--
                    if (timer<=5){
                    document.getElementById("seconds").style.color = "red"
                    }

                    if (timer === 0){
                        clearInterval(interval)
                        setTimeout(gameOverSpeed,1000)
                        }
                     ;
                    },1000);
}

function gameOverSpeed(){
        if (timer === 0){
        gameEndScreen()
        var audioTheme = document.getElementById("speedTheme")
        audioTheme.pause()

    }
}

function concatArray(){

    giantArray = peasantQuest[0]["array"].concat(peasantQuest[1]["array"])

    for (let z=2; z<peasantQuest.length; z++){
        giantArray = giantArray.concat(peasantQuest[z]["array"])
    }
    giantArray = giantArray.concat(bonusWords)
}


function moveCat(){
    var movement = score * 5
    document.getElementById("cat").style.left = `${movement}%`
}

// function txtToSpeech(text) {
//  const msg = new SpeechSynthesisUtterance(text);
//  window.speechSynthesis.speak(msg);
// }

// document.getElementById("cat").addEventListener("click", txtToSpeech("meow"))

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