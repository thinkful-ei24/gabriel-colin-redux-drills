// // Add your code for SET_LANGUAGE and setLanguage
// export const SET_LANGUAGE = 'SET_LANGUAGE';
// export const setLanguage = language => ({
//   type: SET_LANGUAGE,
//   language
// });

// Updating guesses
const UPDATE_GUESSES = 'UPDATE_GUESSES';
const updateGuesses = guess => ({
  type: UPDATE_GUESSES,
  guess
});

// Feedback
const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK';
const updateFeedback = feedback => ({
  type: UPDATE_FEEDBACK,
  feedback
});

// Aural status
const AURAL_STATUS = 'UPDATE_AURAL_STATUS';
const auralStatus = auralStatus => ({
  type: AURAL_STATUS,
  auralStatus
});

//Restart Game
const RESTART_GAME = 'RESTART_GAME';
const restartGame = () => ({
  type: RESTART_GAME,
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
});

// Set correct answer
const SET_CORRECT_ANSWER = 'SET_CORRECT_ANSWER';

export {
  UPDATE_GUESSES,
  updateGuesses,
  UPDATE_FEEDBACK,
  SET_CORRECT_ANSWER,
  updateFeedback,
  RESTART_GAME,
  restartGame,
  AURAL_STATUS,
  auralStatus
};
