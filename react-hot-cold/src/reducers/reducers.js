import { UPDATE_GUESSES, UPDATE_FEEDBACK, AURAL_STATUS, RESTART_GAME, restartGame } from '../actions/actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const gameReducer = (state = initialState, action) => {
  // Action type is update guesses
  if (action.type === UPDATE_GUESSES) {
    console.log('we are reducing in update guesses');

    // Check to see if guess already exists
    if (state.guesses.find(item => item === action.guess)) {
      console.log('ready to handle an ereror');
      // set feedback to error
      return Object.assign({}, state, {
        feedback: 'You already guessed that!'
      });
    } else {
      // Return new state object with guess added to guess array
      return Object.assign({}, state, {
        guesses: [...state.guesses, action.guess]
      });
    }
    // Action type is update feedback
  } else if (action.type === UPDATE_FEEDBACK) {
    return Object.assign({}, state, {
      feedback: action.feedback
    });
    // Action type is aural status
  } else if (action.type === AURAL_STATUS) {
    return Object.assign({}, state, {
      auralStatus: action.auralStatus
    });
    // Ationtype restart game
  } else if (action.type === RESTART_GAME) {
    return restartGame();
  } else {
    return state;
  }
};
