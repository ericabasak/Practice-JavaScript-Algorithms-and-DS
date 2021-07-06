function message(firstName) {
  alert('Hello!' + " " + "Have a nice day " + firstName + "!");
}

function userInput(callback) {
  let firstName = prompt("Enter your name below.");
  callback(firstName);
}

userInput(message);

Right: userInput(message);
Wrong: userInput(message());