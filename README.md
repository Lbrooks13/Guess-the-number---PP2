# Guess the Number

Guess the number is a fun guessing game where you try to out-smart the computer. The computer will randomly pick a number between 1 and 100 and it's your job to guess what it's thinking. Don't worry! It'll help you along the way with hints, and if you're successful you can log your score!

This is a fun, interactive game for all that provides engaging gameplay for all ages and skill levels! Try and get the correct number in 2 guesses or less!


![Am i responsive](https://i.ibb.co/Cz46D0t/pp2-responsive-scrnsht.png)


## Features -
- Number Input - Here the user can input their guess. The app will then display this below in the previous guesses section and then move onto the next feature.
- Hints - The game will display which numbers you have entered to prevent you from using up a try on an already used number.

![hint](https://i.ibb.co/SmJHYvP/pp2-Features-New2.png)
- Remaining Guesses - The game counts down how many remaining tries you have.
- Duplicate Numbers - The game keeps track of which numbers you have used (as mentioned above) but will also not allow you to enter a duplicate number. If this happens, a pop-up will warn you and the game will not deduct a try from you.
- Your Score - When you correctly guess the number, the game will log the score for you on the leader-board. The game will sort from your best score to your worst score.

![score](https://i.ibb.co/w7cFRB8/pp2-Features-New1.png)

![success](https://i.ibb.co/DVVQ5Yh/pp2-sucess.png)

## Testing -

- Feature - Input field - All inputs must be numerical, higher than 1 and lower than 100. The user has the ability to manually type the number or use the "up/down" arrows. The arrows will not allow the user to go higher than 100 or lower than 0 - PASS

- Feature - Check Button - Button must only move onto next step if a number is found in the input field. If the field is empty then it will alert the player. If anything other than a number is in the input field then it will alert the player - PASS

- Feature - Try Again Button - Button must only show once the game has finished, either through the player winning or losing. Once "Try Again" is clicked, the game refreshes and returns to its initial state - PASS

- Display - High Scores - All scores from the game will display in an ascending order. Only the top 5 results will display. It will have the ability to "pop off" the older tries in favour for the newer "higher" score - PASS

- Display - Main Game - There will be no graphical bugs when displaying the game on desktop, laptop, tablet or mobile deivces - PASS

- Display - Responsive App - PASS

### Bugs -
The "guess" input field would allow numbers less than 0 or higher than 100, validation (HTML and JavaScript) has now been added to prevent this from happening and alert the player of this not being allowed.

![bug1](https://i.ibb.co/G3NQDpK/pp2Bug.png)
![bug2](https://i.ibb.co/MhmYjFp/pp2Bug2.png)

### Validator Testing -
- HTML : No errors were returned when passing through [W3c Validator](https://validator.w3.org/) 

![w3c](https://i.ibb.co/cJWTKk5/pp2-w3c.png)
- CSS : No errors were returned when passing through [Jigsaw](https://jigsaw.w3.org/css-validator/)

![Jigsaw](https://i.ibb.co/b2RGPhQ/pp2jigsaw.png)
- JsHint : No errors were returned when passing through [JsHint](https://jshint.com/) 
![JsHint](https://i.ibb.co/CMTQjjN/pp2-Js-Hint.png)

## Deployment - 
I deployed the site on GitHub using the following procedure:
- Once on the project repository, click on the settings tab.
- Select the Pages tab.
- Then, under the Source section, select the main branch from the drop-down menu and click save.
- After a few minutes the page was deployed.

The link to the live page is [here](https://lbrooks13.github.io/Guess-the-number---PP2/)

## Credits
### Code -
- Original game idea, inital variable structure and game layout from @ouidevcss 
### Media -
- This README was constructed using [stackEdit](stackededit.io)

Also, a huge thank you to my mentor, Luke Buchanan.
