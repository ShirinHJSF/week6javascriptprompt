var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = parseInt(prompt("what is your age in years?"));

var usersAge_m = age * 12;
var usersAge_d = age * 365;
var completeSentence = (firstName + " " + lastName + " " + "is " + usersAge_m + " " + "months old " + "and " + usersAge_d + " " + "days old.");


var printedSentence = document.getElementById('header');
printedSentence.innerHTML = completeSentence;
