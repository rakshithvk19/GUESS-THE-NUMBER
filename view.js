//Adds an event listener to check button on view
export const addHandlerCheckNumber = function (helper) {
  document.querySelector('.check').addEventListener('click', helper);
};

//Fetches the guess number field in the view and return it
export const fetchGuessValue = function () {
  const userInput = Number(document.querySelector('.guess').value);
  return userInput;
};

//Make changes on the view based on the validation result from model.
export const renderView = function (validationResult) {
  const { message, score, highScore, number, isSameNumber } = validationResult;
  document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.number').textContent = number;

  //Render background changes.
  renderBackground(isSameNumber);
};

//Make changes to view when again button is clicked.
export const addHandlerAgain = function (helper) {
  document.querySelector('.again').addEventListener('click', helper);
};

//render reset view
export const renderViewReset = function (result) {
  document.querySelector('.guess').value = '';
  renderView(result);
};

//Render background changes.
const renderBackground = function (isSameNumber) {
  if (isSameNumber) {
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.backgroundColor = ' #E29C0F';
    document.querySelector('.number').style.width = '30rem';
  } else {
    document.querySelector('body').style.backgroundColor = ' #222';
    document.querySelector('.number').style.backgroundColor = ' #eee';
    document.querySelector('.number').style.width = '15rem';
  }
};
