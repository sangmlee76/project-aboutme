'use strict';

//Story 2, Task 1 - ask user name through a prompt
var userName = prompt('Hi, what is your name?');
alert('Welcome ' + userName + '. Thanks for taking the time to play a quick game to learn a little about me. I\'m going to ask you 5 "yes/no" questions. When you are ready to play, click "OK"')

//Story 2, Task 2 - display the user name through a custom greeting on the webpage
var customGreeting = '<h3> Welcome ' + userName + '! </h3>'

//Story 1, Task 2 - user prompt for 5 yes/no questions and provide alert with feedback about the answer
var firstQuestion = prompt('Was Sang born and raised in Seattle?');
if(firstQuestion.toLowerCase() === 'yes' || firstQuestion.toLowerCase() === 'y'){
  console.log('Sorry, your answer is incorrect.');
  //alert('The answer is incorrect.');
} else if(firstQuestion.toLowerCase() === 'no' || firstQuestion.toLowerCase() === 'n'){
  console.log('Your answer is correct - well done!');
  //alert('Your answer is correct - well done!');
} else{
  console.log('Please answer "yes / no" or "y / n"; moving on to the next question');
  //alert('Please answer "yes / no" or "y / n"; moving on to the next question');
}

var secondQuestion = prompt('Did Sang serve in the U.S. Navy for 8 years?');
if(secondQuestion.toLowerCase() === 'yes' || secondQuestion.toLowerCase() === 'y'){
  console.log('Sorry, your answer is incorrect.');
  //alert('The answer is incorrect.');
} else if(secondQuestion.toLowerCase() === 'no' || secondQuestion.toLowerCase() === 'n'){
  console.log('Your answer is correct - good job!');
  //alert('Your answer is correct - good job!');
} else{
  console.log('Please answer "yes / no" or "y / n"; moving on to the next question');
  //alert('Please answer "yes / no" or "y / n"; moving on to the next question');
}

var thirdQuestion = prompt('Is Sang building a sailboat as a hobby during COVID?');
if(thirdQuestion.toLowerCase() === 'yes' || thirdQuestion.toLowerCase() === 'y'){
  console.log('Sorry, your answer is incorrect.');
  //alert('The answer is incorrect.');
} else if(thirdQuestion.toLowerCase() === 'no' || thirdQuestion.toLowerCase() === 'n'){
  console.log('Your answer is correct - impressive!');
  //alert('Your answer is correct - impressive!');
} else{
  console.log('Please answer "yes / no" or "y / n"; moving on to the next question');
  //alert('Please answer "yes / no" or "y / n"; moving on to the next question');
}

var fourthQuestion = prompt('Is Sang\'s primary goal for signing up for Code Fellows to beome a python developer?');
if(fourthQuestion.toLowerCase() === 'yes' || fourthQuestion.toLowerCase() === 'y'){
  console.log('Sorry, your answer is incorrect.');
  //alert('The answer is incorrect.');
} else if(fourthQuestion.toLowerCase() === 'no' || fourthQuestion.toLowerCase() === 'n'){
  console.log('Your answer is correct - you nailed it!');
  //alert('Your answer is correct - you nailed it!');
} else{
  console.log('Please answer "yes / no" or "y / n"; moving on to the next question');
  //alert('Please answer "yes / no" or "y / n"; moving on to the next question');
}

var fifthQuestion = prompt('Was Sang living in Atlanta during the 1996 Olympic Games?');
if(fifthQuestion.toLowerCase() === 'yes' || fifthQuestion.toLowerCase() === 'y'){
  console.log('Sorry, your answer is incorrect.');
  //alert('The answer is incorrect.');
} else if(fifthQuestion.toLowerCase() === 'no' || fifthQuestion.toLowerCase() === 'n'){
  console.log('Your answer is correct - awesome work!');
  //alert('Your answer is correct - awesome work!');
} else{
  console.log('This was a "yes / no" or "y / n" question; this was the last question');
  //alert('This was a "yes / no" or "y / n" question; this was the last question');
}


//Story 2, Task 3 - display user's name in the final message to the user
var closingMessage = '<h3> Thank you for stopping by ' + userName + '! I hope you enjoyed learning a little about me. </h3>'
//alert('Thank you for stopping by ' + userName + '! I hope you enjoyed learning a little about me.')
