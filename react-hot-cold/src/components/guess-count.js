import React from 'react';

import './guess-count.css';

// Redux
import { connect } from 'react-redux';

export function GuessCount(props) {
  // const state = store.getState();
  // const guessCount = state.guesses.length;

  // Pluralization
  const isPlural = props.guessCount !== 1;
  const guessNoun = isPlural ? 'guesses' : 'guess';

  return (
    <h2 id="guessCount">
      You've made <span id="count">{props.guessCount}</span> {guessNoun}!
    </h2>
  );
}

const mapStateToProps = state => ({
  guessCount: state.guesses.length
});

export default connect(mapStateToProps)(GuessCount);
