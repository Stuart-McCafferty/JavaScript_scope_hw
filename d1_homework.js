// Question 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// The output will be "The murderer is Miss Scarlet."
// declareMurderer can access scenario and gets the attribute murderer from scenaorio


// Question 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// I think this will cause an error as we are trying to change the constant global variable murderer
// We would need to change it to var


// Question 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

//Will print "First verdict is Mrs. Peacock" "Second verdict is Professor Plum"
// First one changes the murderer in declareMurderer and the second one takes the first variable from the top


// Question 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// runs a logic error
// SuspectThree is only colonel Mustard in the scope of declareAllSuspects and when it calls it again it takes the one from the top


// Question 5
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//     };
    
// const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// The weapon is the revolver
// changeWeapon function changes scenario.weapon to revolver from candle stick
// so when declareWeapon calls scenarior.weapon it now returns the new string 


// Question 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

//     const plotTwist = function() {
//         murderer = 'Mrs. White';
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// The murder is Mrs. White
// when changeMurderer is called, it also calls plotTwist() which is a function inside it that changes the murderer

// Question 7




