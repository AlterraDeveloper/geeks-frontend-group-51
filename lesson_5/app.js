// Modern JavaScript
// ECMAScript

// ECMAScript 5 ES5
// ES6 ES7 ES8 ....

// Babel
// var myName; // undefined

// sayHello();

// console.log("My name is", myName);

// let myName = "Evgeniy"; // hoisting

// func declaration
// function sayHello() {
//   console.log("Hello");
// }

// func expression
// let sayHello = () => {};

// number string boolean undefined
// null object

// const aboutMe = {
//   name: "Evgeniy",
//   surname: "Kiselev",
// };

// const copyAboutMe = { ...aboutMe };

// copyAboutMe.name = "Ruslan";

// console.log(aboutMe);

// let myAge = 45;

// let copyMyAge = myAge;

// copyMyAge = 55;

// console.log(myAge);

// const arrowFunc = (value) => value + 10;

// [1, 2, 3].map(function (x) {
//   return x;
// });

// function boostEnergy(value = 0) {
//   console.log(`${value} energy points`);
// }

// boostEnergy();

// const array = [5, 7, 8, 1, 2, 4];

// console.log("Math.max = ", Math.max(...array));

// function detectCar({...props}) {
//   console.log(`Your car is ${props.brand} ${props.name} with color ${props.color}`);
// }

const myCar = {
  brand: "Toyota",
  name: "Camry",
  color: "black",
  engine: "3.0 L",
};

// detectCar(myCar);

class Client {
  constructor(name, mobile, email) {
    this.name = name;
    this.mobile = mobile;
    this.email = email;
  }

  isTheSame(client) {
    return this.mobile === client.mobile && this.email === client.email;
  }
}

const firstClient = new Client("Fred", "996999121212", "fred@gmail.com");
const secondClient = new Client("John", "996555121212", "john@gmail.com");
const thirdClient = new Client("Tomas", "996999121212", "fred@gmail.com");

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.options = ["🪨", "✂️", "📄"];
    this.optionPlayer1 = null;
    this.optionPlayer2 = null;
    this.scorePlayer1 = 0;
    this.scorePlayer2 = 0;
  }

  move() {
    this.optionPlayer1 = this.selectOption();
    this.optionPlayer2 = this.selectOption();
  }

  detectWin() {
    if (!this.optionPlayer1 || !this.optionPlayer2) {
      return;
    }

    if (this.optionPlayer1 === this.optionPlayer2) {
      return "draw";
    }

    if (this.optionPlayer1 === "✂️" && this.optionPlayer2 === "📄") {
      this.scorePlayer1++;
      return this.player1;
    }

    if (this.optionPlayer1 === "📄" && this.optionPlayer2 === "🪨") {
      this.scorePlayer1++;
      return this.player1;
    }

    if (this.optionPlayer1 === "🪨" && this.optionPlayer2 === "✂️") {
      this.scorePlayer1++;
      return this.player1;
    }

    this.scorePlayer2++;
    return this.player2;
  }

  selectOption() {
    return this.options[Math.floor(Math.random() * this.options.length)];
  }

  render(winner) {
    const isWinner1 = this.player1 === winner;
    const isWinner2 = this.player2 === winner;
    return `
        <div class="players">
            <div class="player ${isWinner1 && "winner"}">${this.player1}</div>
            <div class="player ${isWinner2 && "winner"}">${this.player2}</div>
        </div>
        <div class="options">
            <div class="option ${isWinner1 && "winner"}"">${
      this.optionPlayer1
    }</div>
            <div class="option ${isWinner2 && "winner"}"">${
      this.optionPlayer2
    }</div>
        </div>
        <div class="options scores">
            <div class="option score">${this.scorePlayer1}</div>
            <div class="option score">${this.scorePlayer2}</div>
        </div>
    `;
  }
}

const newGame = new Game("Batman", "Joker");

const gameContainer = document.querySelector("#game");
const newGameBtn = document.querySelector("#newGameBtn");

newGameBtn.onclick = () => {
  newGame.move();
  const winner = newGame.detectWin();
  console.log("winner", winner);

  gameContainer.innerHTML = newGame.render(winner);
};


https://alterradeveloper.github.io/geeks-projects/
https://alterradeveloper.github.io/geeks-projects/otp-generator/