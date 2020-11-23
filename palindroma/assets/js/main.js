/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

var parola = "ciao"

var parolaRight = "";
for (var i = 0; i < parola.lenght; i++){
  console.log(parola[i]);
  parolaRight = parolaRight + parola[i];
}
//console.log(parolaDritta);

function palindromo (parola){

  var parolaInversa = "";

  for (var i = parola.lenght -1; i >= 0; i--){
   console.log(parola[i]);
   parolaInversa = parolaInversa + parola[i];


  }

  return parolaInversa;
}











// var word = prompt("Inserire parola");

// program to check if the string is palindrome or not

/*function checkPalindrome(str) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);*/
