import React from 'react';

import './feedback.css';

// Redux
// import store from '../store/store';
import { connect } from 'react-redux';

export function Feedback(props) {
  /**
   * Below, we'll use the guessCount to generate a key so that React treats the feedback message
   * as a DOM change, even when a guess does not change the feedback text.
   * This is necessary for consistent aural feedback via aria-live.
   */
  // const key = props.guessCount;

  // const state = store.getState();
  const key = props.guessCount;
  const feedback = props.feedback;

  let guessAgain;
  if (key !== 0) {
    guessAgain = <span className="visuallyhidden">Guess again!</span>;
  }
  return (
    <h2
      key={key}
      id="feedback"
      role="status"
      aria-live="assertive"
      aria-atomic="true"
    >
      {feedback} {guessAgain}
    </h2>
  );
}

const mapStateToProps = state => ({
  guessCount: state.guesses.length,
  feedback: state.feedback
});

export default connect(mapStateToProps)(Feedback);
