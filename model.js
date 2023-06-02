let secretNumber = Math.trunc(Math.random() * 20 + 1);
const result = {
  message: '',
  score: 20,
  highScore: 0,
  number: '?',
  isSameNumber: false,
};
// console.log(`secretNumber: ${secretNumber}`);

//Runs the validation for guess number
export const validateGuessNumber = function (userInput) {
  if (secretNumber === userInput) {
    result.number = secretNumber;
    result.isSameNumber = true;
    result.message = 'You have selected the correct number, Hooray!!';
    if (result.highScore < result.score) {
      result.highScore = result.score;
    }
  } else if (secretNumber !== userInput) {
    if (result.score > 1) {
      result.message =
        userInput > secretNumber
          ? 'Too High Man!! Reduce the number'
          : 'Too Low Man!! Increase the number';
      result.score--;
    }

    if (result.score <= 1) {
      result.message = 'Try Again';
      result.score = 0;
    }
  }

  return result;
};

//Reset the values
export const resetValues = function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  result.message = 'Start guessing...';
  result.score = 20;
  result.highScore = 0;
  result.number = '?';
  result.isSameNumber = false;
  //   console.log(`secretNumber: ${secretNumber}`);

  return result;
};
