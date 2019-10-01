console.log("OMG PROJECT")

var word;
var input;
var score = 0;
var lives = 6;
var youWin = false;
var enterPress = 0;
var timer = 10;
var storyTracker = 0;
var giantArray = ['Abate','Abstract','Abysmal','Accordingly','Acquisition','Adapt','Adept','Adequate','Advent','Adversarial','Advocate','Aesthetic','Afford','Agitate','Allow','Allude','Altercation','Ambiguous','Ambitious','Ambivalence','Analogous','Annihilate','Anomaly','Anticipate','Antipathy','Apex','Apprehension','Articulate','Artificial','Assertion','Austere','Authenticity','Avenue','Avid','Basic','Bear','Benevolent','Bias','Bittersweet','Bolster','Boost','Brawl','Brevity','Candid','Candor','Capitalize','Capture','Civic','Clinical','Clout','Coarse','Coincide','Commission','Comparable','Competent','Complacent','Complement','Concede','Conceive','Condone','Conducive','Conduct','Confide','Confine','Consensus','Constitute','Contemplate','Contend','Contradict','Controversial','Conventional','Convey','Conviction','Corroborate','Counteract','Counterargument','Counterproductive','Culmination','Cultivate','Decree','Deference','Deficient','Demonstrate','Demur','Deplete','Desolate','Devise','Dilemma','Diligence','Diminish','Dire','Discord','Disdain','Dismay','Disparage','Dispatch','Diversification','Doctrine','Dominion','Dreary','Dubious','Eccentric','Egregious','Eloquent','Eminent','Emit','Emphatic','Empirical','Endow','Endure','Entail','Entrenched','Enumerate','Envy','Erratic','Establish','Evoke','Exacerbate','Excel','Exert','Exhilarating','Expend','Exploit','Facilitate','Feasibility','Ferocity','Fiscal','Flourish','Fluctuate','Foment','Foreseeable','Frankly','Freewheeling','Fundamental','Galvanizing','Geriatric','Hostile','Hypothetical','Ignominious','Impart','Impartiality','Imposing','Imposition','Imprudent','Incite','Indifference','Indiscriminately','Indulge','Infer','Innovative','Insatiable','Inversion','Invoke','Irreconcilable','Lament','Locomotion','Lucrative','Malicious','Malleable','Materialistic','Melodramatic','Modest','Modify','Momentous','Novel','Nuance','Null','Objectivity','Obsolete','Omnipotent','Onset','Opine','Ornate','Oust','Paramount','Peculiar','Perish','Persecute','Petulant','Pinnacle','Pitiable','Plausible','Postulate','Potent','Pragmatic','Precedent','Predecessor','Prescribe','Principle','Prohibit','Prompt','Promulgate','Prosecute','Provocative','Qualitative','Quantitative','Quirk','Ramify','Rash','Raw','Readily','Reconsideration','Reform','Refute','Reinforce','Reluctantly','Renounce','Reproach','Repudiate','Retention','Satiated','Savvy','Scandalous','Scorn','Scrupulous','Scrutinize','Secrete','Sentiment','Sheer','Simple','Sinister','Solidarity','Sparingly','Spawn','Spur','Squalid','Stark','Static','Subordinate','Subsequently','Substantial','Substantiate','Subtle','Sufficient','Surly','Surmount','Susceptible','Tactful','Taut','Teeming','Temperament','Tentative','Transparent','Treacherous','Tremendous','Ubiquitous','Unadorned','Undermine','Underscore','Undulate','Unilateral','Unjust','Unmitigated','Unprecedented','Unveil','Urge','Validate','Viability','Vital','Vow','Warrant','Yield']


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
        var audioTheme = document.createElement("audio")
        audioTheme.setAttribute("id", "lose")
        document.getElementById("maincontainer").appendChild(audioTheme)
        var sadTheme = document.createElement("source")
        sadTheme.setAttribute("src", "sadtrombone.mp3")
        audioTheme.appendChild(sadTheme)
        var storyTheme = document.getElementById("storyTheme")
        storyTheme.pause()
        audioTheme.play()
    } else {

         document.querySelector("body").style.backgroundImage = `url("images/fire.jpg")`
         document.querySelector("body").style.backgroundSize = "cover"
         var audioTheme = document.createElement("audio")
        audioTheme.setAttribute("id", "victory")

        document.getElementById("maincontainer").appendChild(audioTheme)
        var theme = document.createElement("source")
        theme.setAttribute("src", "victory.mp3")
        audioTheme.appendChild(theme)
        audioTheme.play()

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

    audioTheme.play();

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
                 document.querySelector("body").style.backgroundRepeat = "no-repeat"
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
                 document.querySelector("body").style.backgroundRepeat = "no-repeat"
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
    }
    else if (input !== word) {
       document.getElementById("checkmark").setAttribute("src", "images/crossout.png")
        var audioTheme = document.createElement("audio")
        audioTheme.setAttribute("id", "angrycat")
        document.getElementById("maincontainer").appendChild(audioTheme)
        var angrycat = document.createElement("source")
        angrycat.setAttribute("src", "angrycat.m4a")
        audioTheme.appendChild(angrycat)
        audioTheme.play()
       if (lives > 0){
           var lifeBar = document.querySelector("#lifebar")
           var life = document.querySelector(`#life${lives}`)
           lifeBar.removeChild(life)
           lives--
        } else if (lives === 0) {
            gameEndScreen()
        }
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
    audioTheme.play()

    document.getElementById("cat").style.visibility = "visible"

    document.getElementById("lives").style.visibility = "hidden"

    // concatArray();

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

            var arrayWords = giantArray.map(v => v.toLowerCase());
            displayWord(arrayWords);

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
       lives--
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

function moveCat(){
    var movement = score * 2
    document.getElementById("cat").style.left = `${movement}%`
}