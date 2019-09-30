# TypeQuest

TypeQuest is a typing game made to force users to type increasingly complex inputs (longer strings, use of symbols, etc.)

## Modes
There is a Story Mode and a Speed Mode. 

## Basic Rules and Objectives
The game prompts the user to type word(s). The user must accurately replicate the word(s).

In Story Mode, there is a narrative. The game prompts increasingly complex inputs from the user. The prompted word(s) are related to the storyline. The user has a fixed number of lives. If the user mistypes the input, the user will lose a life. The game ends either when the user loses all lives or when the user completes the whole story.

In Speed Mode, the user selects how many seconds will be allotted. The user must type in as many prompted word(s) as possible during the allotted time. 

## Technologies Used
HTML, CSS and Javascript.

## Approach Taken
I first started building the basic layout of the interface in HTML/CSS - timer, scoreboard, word prompt and user input to get a rough idea how most of the game would look.

Functionally, I started building the basic requirements for Speed Mode -  random selection of a prompt word from an array, matching user input with the prompted word, keeping score and running down a timer. From there, I built the narrative and related arrays for Story Mode. I then populated the Speed Mode array with the Story Mode arrays, and a few other bonus words for fun (e.g. antidisestablishmentarianism).

## Key Motivations
- Getting more comfortable with DOM manipulation and visualising layouts through JS (e.g. the home page and win/lose pages were made in JS).
- Practicing Bootstrap for layout.
- Working with set interval and dropdown menu selection.

## Unsolved Problems
Fixing the layout for different screen sizes.
Identifying a rhyming word in the array.
Having a typewriting animation for the welcome message through DOM.
I would have liked to add a third mode (e.g. Adventure Mode) that is more interactive.


