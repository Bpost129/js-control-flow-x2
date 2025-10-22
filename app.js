// for (let number = 1; number <= 20; number++) {
// 	if (number % 2 === 0) {
//     console.log(`${number} is even`)
//   } else {
//     console.log(`${number} is odd`)
//   }
// }

let score = 95

// let message = score > 100 ? 'You win!' : 'Try again!'
// console.log(message)

let gameWinner = function(score) {
  console.log('You win!')
}

let gameLoop = function(score) {
  console.log('Try again!')
}

score > 100 ? gameWinner(score) : gameLoop(score)