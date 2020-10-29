'use strict';

////////////// Function Section ///////////////

function questionOne() {
  var firstQuestion = prompt('Was Sang born and raised in Seattle?');
  if (firstQuestion.toLowerCase() === 'yes' || firstQuestion.toLowerCase() === 'y') {
    //console.log('Sorry, your answer is incorrect.');
    alert('The answer is incorrect.');
  } else if (firstQuestion.toLowerCase() === 'no' || firstQuestion.toLowerCase() === 'n') {
    //console.log('Your answer is correct - well done!');
    alert('Your answer is correct - well done!');
    //correctAnswerCounter++;
  } else {
    //console.log('Please answer "yes / no" or "y / n"; moving on to the next question');
    alert('Please answer "yes / no" or "y / n"; moving on to the next question');
  }

}
function questionSix() {
  
    if (i === 4 ) {
      alert('Those were great guesses but you have exhausted your guesses. The correct answer is ' + 55);
      
    }

    var sixthQuestion = parseInt(prompt('What is my favorite number? (choose between 1 and 100):'));
    //console.log('What is my favorite number? (choose between 1 and 100):');
    if (sixthQuestion === 55) {  // conditional check between user input and the correct answer
      alert('Amazing! You must be a Jedi -- that\'s the correct answer!');
      //correctAnswerCounter++;
    } else if (sixthQuestion < 55) {
      alert('Sorry, that\'s too low. Go higher! (choose between 1 and 100):');
    } else if (sixthQuestion > 55) {
      alert('Sorry, that\'s too high. Go lower! (choose between 1 and 100):');
    } else {
      alert('Sorry, that\'s not a valid guess. This counts as one of your guesses. Please click "OK" to continue.')
    }
  }




questionOne();
 for (var i = 0; i <=4; i++){
  questionSix();
 }


// This function is for Q&A #1 - 5
function funFactQuestions(questionNumber) {

  return //something//
}

// This function collects the attempts allowed for the game
function allowedAttempts(userAttemptsAllowed) {

  return //something//
}

// This function checks the user's guess against the values in an array
function checkAnswerInArray(userGuess) {

  return //something//
}

// This function implements the number guessing game
function numberGame(userGuess) {

  return //something//
}

// This function implements the Array (Holloween treats) guessing game
function arrayGame(userGuess) {

  return //something//
}


////////// End of Function Section ////////////


//[Story 2, Task 1] ask user name through a prompt
/*var userName = prompt('Hi, what is your name?');
var correctAnswerCounter = 0;

//[Story 2, Task 2] display the user name through a custom greeting on the webpage
alert('Welcome ' + userName + '. Thanks for taking the time to play a quick game to learn a little about me. I\'m going to ask you 5 "yes/no" questions. When you are ready to play, click "OK"');

//[Story 1, Tasks: 2, 3, 4] user prompt for 5 yes/no questions and provide alert with feedback about the answer
var firstQuestion = prompt('Was Sang born and raised in Seattle?');
if (firstQuestion.toLowerCase() === 'yes' || firstQuestion.toLowerCase() === 'y') {
  //console.log('Sorry, your answer is incorrect.');
  alert('The answer is incorrect.');
} else if (firstQuestion.toLowerCase() === 'no' || firstQuestion.toLowerCase() === 'n') {
  //console.log('Your answer is correct - well done!');
  alert('Your answer is correct - well done!');
  correctAnswerCounter++;
} else {
  //console.log('Please answer "yes / no" or "y / n"; moving on to the next question');
  alert('Please answer "yes / no" or "y / n"; moving on to the next question');
}

var secondQuestion = prompt('Did Sang serve in the U.S. Navy for 8 years?');
if (secondQuestion.toLowerCase() === 'yes' || secondQuestion.toLowerCase() === 'y') {
  //console.log('Sorry, your answer is incorrect.');
  alert('The answer is incorrect.');
} else if (secondQuestion.toLowerCase() === 'no' || secondQuestion.toLowerCase() === 'n') {
  //console.log('Your answer is correct - good job!');
  alert('Your answer is correct - good job!');
  correctAnswerCounter++;
} else {
  //console.log('Please answer "yes / no" or "y / n"; moving on to the next question');
  alert('Please answer "yes / no" or "y / n"; moving on to the next question');
}

var thirdQuestion = prompt('Is Sang building a sailboat as a hobby during COVID?');
if (thirdQuestion.toLowerCase() === 'yes' || thirdQuestion.toLowerCase() === 'y') {
  //console.log('Sorry, your answer is incorrect.');
  alert('The answer is incorrect.');
} else if (thirdQuestion.toLowerCase() === 'no' || thirdQuestion.toLowerCase() === 'n') {
  //console.log('Your answer is correct - impressive!');
  alert('Your answer is correct - impressive!');
  correctAnswerCounter++;
} else {
  //console.log('Please answer "yes / no" or "y / n"; moving on to the next question');
  alert('Please answer "yes / no" or "y / n"; moving on to the next question');
}

var fourthQuestion = prompt('Is Sang\'s primary goal for signing up for Code Fellows to beome a python developer?');
if (fourthQuestion.toLowerCase() === 'yes' || fourthQuestion.toLowerCase() === 'y') {
  //console.log('Sorry, your answer is incorrect.');
  alert('The answer is incorrect.');
} else if (fourthQuestion.toLowerCase() === 'no' || fourthQuestion.toLowerCase() === 'n') {
  //console.log('Your answer is correct - you nailed it!');
  alert('Your answer is correct - you nailed it!');
  correctAnswerCounter++;
} else {
  //console.log('Please answer "yes / no" or "y / n"; moving on to the next question');
  alert('Please answer "yes / no" or "y / n"; moving on to the next question');
}

var fifthQuestion = prompt('Was Sang living in Atlanta during the 1996 Olympic Games?');
if (fifthQuestion.toLowerCase() === 'yes' || fifthQuestion.toLowerCase() === 'y') {
  //console.log('Your answer is correct - awesome work!');
  alert('Your answer is correct - awesome work!');
  correctAnswerCounter++;
} else if (fifthQuestion.toLowerCase() === 'no' || fifthQuestion.toLowerCase() === 'n') {
  //console.log('Sorry, your answer is incorrect.');
  alert('The answer is incorrect.');
} else {
  //console.log('This was a "yes / no" or "y / n" question; this was the last question');
  alert('This was a "yes / no" or "y / n" question; this was the last question');
}

//[Story 4, Tasks: 1, 2, 3, 4] adds question 6 that uses a number guessing game with a series of user inputs and feedbacks to the user - user gets 4 attempts
alert('Shall-we-play-a-game? Let\'s see if you can guess my favorite number; it\'s between 1 and 100. You\'ll have exactly 4 attempts to guess it correctly, but I will give you a hint after each incorrect guess. Click "OK" when you\'re ready to begin.');

var correctNumber = 55;  // the correct answer to the question
var allowedAttemptsForQuestion6 = 4; // permitted attempts for the user guesses

for (var i = 0; i <= allowedAttemptsForQuestion6; i++) {
  if (i === allowedAttemptsForQuestion6) {
    alert('Those were great guesses but you have exhausted your guesses. The correct answer is ' + correctNumber);
    break;
  }

  var sixthQuestion = parseInt(prompt('What is my favorite number? (choose between 1 and 100):'));
  //console.log('What is my favorite number? (choose between 1 and 100):');
  if (sixthQuestion === correctNumber) {  // conditional check between user input and the correct answer
    alert('Amazing! You must be a Jedi -- that\'s the correct answer!');
    correctAnswerCounter++;
    break;
  } else if (sixthQuestion < correctNumber) {
    alert('Sorry, that\'s too low. Go higher! (choose between 1 and 100):');
  } else if (sixthQuestion > correctNumber) {
    alert('Sorry, that\'s too high. Go lower! (choose between 1 and 100):');
  } else {
    alert('Sorry, that\'s not a valid guess. This counts as one of your guesses. Please click "OK" to continue.')
  }
}

//[Story 5, Tasks: 1, 2, 3, 4; Story 6, Tasks: 1, 2] adds question 7 that uses a gussing game with a series of user inputs and feedback; game terminates in the middle if user answers correctly - user gets 6 attempts

alert('Let\'s play a new game I like to call "Holloween Delights". Can you guess some of my favorite Holloween treats? You\'ll have exactly 6 guesses to see if you can guess one from my list. Click "OK" when you\'re ready to begin.');

// Declare variables and array
var halloweenFavs = ['snickers', 'twizzlers', 'nerds', 'starburst', 'skittles'];
var allowedAttemptsForQuestion7 = 6;
var answeredQ7Correctly = false;

for (var j = 0; j <= allowedAttemptsForQuestion7; j++) {
  if (j === allowedAttemptsForQuestion7) {    //checks to see if the user has exhausted all attempts and provides appropriate message if true
    alert('Those were some great guesses but you have exhausted your guesses. My favorite treats are Snickers, Twizzlers, Nerds, Starburst, and Skittles. Thanks for playing!');
    break;
  }

  var seventhQuestion = (prompt('Guess one of my favorite Holloween treats?'));
  for (var k = 0; k < halloweenFavs.length; k++) {      //this for loop checks the user input against the array values to determine if a correct answer was submitted
    if (halloweenFavs[k] === seventhQuestion.toLowerCase()) {
      alert('Correct, ' + halloweenFavs[k] + ' is one of my favorites. Happy Halloween!');
      answeredQ7Correctly = true;
      break;
    }
  }
  if (answeredQ7Correctly) {    // could have simplified by incorporating this in the above for loop but decided to create a separate alert message to close out if the user submitted a correct answer
    alert('Looks like you knew me better than you think. My favorite treats are: Snickers, Twizzlers, Nerds, Starburst, and Skittles. Thanks for playing!');
    correctAnswerCounter++;
    break;
  } else {    // if the user did not submit a correct guess then this alert is provided before we iterate the parent for loop for their next attempt
    alert('Sorry, that\'s a great treat, but not one of my favorites. Let\'s try again.');
  }
}

// [Story 6, Tasks: 1, 2] Add correct answer counter for the entire thing and provide an alert to tell user how many they got right
alert('Congrats on getting through all the questions. Out of 7 questions, you got ' + correctAnswerCounter + ' correct. Cheers!');

//[Story 2, Task 3] display user's name in the final message to the user
alert('Thank you for stopping by ' + userName + '! I hope you enjoyed learning a little about me. Have a great day!');*/

