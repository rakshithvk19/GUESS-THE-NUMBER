import * as view from './view.js';
import * as model from './model.js';

//Controls the check number recieved.
const controlCheckNumber = function () {
  const guessNumber = view.fetchGuessValue();
  const guessNumberValidation = model.validateGuessNumber(guessNumber);
  view.renderView(guessNumberValidation);
  console.log('hi');
};

//Controls again button.
const controlAgainBtn = function () {
  const result = model.resetValues();
  view.renderViewReset(result);
};

const init = function () {
  view.addHandlerCheckNumber(controlCheckNumber);
  view.addHandlerAgain(controlAgainBtn);
};
init();
