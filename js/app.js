'use strict';

////////////// Declare global variables //////////////
var userName, correctAnswerCounter, userAnswer;


////////////// Function Section ///////////////

// questions 1 - 5 'helper' function; checks user response for accuracy
function userAnswerCheck() {
  var questionBank = ['Was Sang born and raised in Seattle?', 'Did Sang serve in the U.S. Navy for 8 years?', 'Is Sang building a sailboat as a hobby during COVID?', 'Is Sang\'s primary goal for signing up for Code Fellows to beome a python developer?', 'Was Sang living in Atlanta during the 1996 Olympic Games?'];
  var correctAnswerLong = ['no', 'no', 'no', 'no', 'yes'];
  var correctAnswerShort = ['n', 'n', 'n', 'n', 'y'];
  userAnswer = false;

  var userInput = prompt(questionBank[h]);

  if (userInput.toLowerCase() === correctAnswerLong[h] || userInput.toLowerCase() === correctAnswerShort[h]) {
    userAnswer = true;
    return userAnswer;
  } else {
    userAnswer = false;
    return userAnswer;
  }
}

// questions 1 - 5 main function 
function questionOneToFive() {
  var correctAnswerResponse = ['Your answer is correct - well done!', 'Your answer is correct - good job!', 'Your answer is correct - impressive!', 'Your answer is correct - you nailed it!', 'Your answer is correct - awesome work!'];
  var incorrectAnswerResponse = ['Sorry, your answer is incorrect.', 'Sorry, close but no cigars, espcially since it\'s not very health conscious', 'Nope, but Rome wasn\'t built in a day either', 'Too bad; however, it\'s your party and you can cry if you want to...cry if you want to...', 'Bummer. But they do say that it\'s better to have loved and lost than to never have loved at all'];

  // calls userAnswerCheck function to see if the user answer to the questions are true or false
  userAnswerCheck();

  // takes the output from uswerAnswerCheck to execute the appropriate feedback to the user
  if (userAnswer) {
    alert(correctAnswerResponse[h]);
    correctAnswerCounter++;
  } else if (!userAnswer) {
    alert(incorrectAnswerResponse[h]);
  } else {
    alert('Please answer "yes" or "no"; moving on to the next question');
    return;
  }
}

// question 6 function
function questionSix() {
  var correctAnswer = 55;  // the correct answer to question 6
  if (i === 4) {
    alert('Those were great guesses but you have exhausted your guesses. The correct answer is ' + correctAnswer);
    return;
  }

  var userInput = parseInt(prompt('What is my favorite number? (choose between 1 and 100):'));

  // conditional check between user input and the correct answer
  if (userInput === correctAnswer) {
    alert('Amazing! You must be a Jedi -- that\'s the correct answer!');
    correctAnswerCounter++;
    i = 5;
    return;
  } else if (userInput < correctAnswer) {
    alert('Sorry, that\'s too low. Go higher! (choose between 1 and 100):');
  } else if (userInput > correctAnswer) {
    alert('Sorry, that\'s too high. Go lower! (choose between 1 and 100):');
  } else {
    alert('Sorry, that\'s not a valid guess. This counts as one of your guesses. Please click "OK" to continue.');    
  }
}

// question 7 function
function questionSeven() {
  // Declare variables and array
  var halloweenFavs = ['snickers', 'twizzlers', 'nerds', 'starburst', 'skittles'];
  var allowedAttemptsForQuestion7 = 6;
  var answeredQ7Correctly = false;

  //for (var j = 0; j <= allowedAttemptsForQuestion7; j++) {
  if (j === allowedAttemptsForQuestion7) {    //checks to see if the user has exhausted all attempts and provides appropriate message if true
    alert('Those were some great guesses but you have exhausted your guesses. My favorite treats are Snickers, Twizzlers, Nerds, Starburst, and Skittles. Thanks for playing!');
    return;
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
    j = 7;
    return;
  } else {    // if the user did not submit a correct guess then this alert is provided before we iterate the parent for loop for their next attempt
    alert('Sorry, that\'s a great treat, but not one of my favorites. Let\'s try again.');
  }
}


///////////// Main Code //////////////
// Welcome and introduction to website
userName = prompt('Hi, what is your name?');
correctAnswerCounter = 0;

alert('Welcome ' + userName + '. Thanks for taking the time to play a quick game to learn a little about me. I\'m going to ask you 5 "yes/no" questions. When you are ready to play, click "OK"');

// Question 1-5 
for (var h = 0; h < 5; h++) {
  questionOneToFive();
}

// Question 6 
alert('Shall-we-play-a-game? Let\'s see if you can guess my favorite number; it\'s between 1 and 100. You\'ll have exactly 4 attempts to guess it correctly, but I will give you a hint after each incorrect guess. Click "OK" when you\'re ready to begin.');

for (var i = 0; i <= 4; i++) {
  questionSix();
}

// Question 7 
alert('Let\'s play a new game I like to call "Holloween Delights". Can you guess some of my favorite Holloween treats? You\'ll have exactly 6 guesses to see if you can guess one from my list. Click "OK" when you\'re ready to begin.');

for (var j = 0; j <= 6; j++) {
  questionSeven();
}

// Provide user score (answered correctly)
alert('Congrats on getting through all the questions. Out of 7 questions, you got ' + correctAnswerCounter + ' correct. Cheers!');

// customized closing message to user
alert('Thank you for stopping by ' + userName + '! I hope you enjoyed learning a little about me. Have a great day!');

/////////// End of Main Code /////////////


