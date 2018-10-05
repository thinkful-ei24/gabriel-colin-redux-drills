import React from 'react';

import './guess-form.css';

// Redux imports
import store from '../store/store';
import { connect } from 'react-redux';
import { updateGuesses, updateFeedback } from '../actions/actions';

export class GuessForm extends React.Component {
  /*
  Modifying the onSubmit function to get the value that was guessed

  Then we need to pass that to the redux action so that the state is updated
  */

  onSubmit(event) {
    event.preventDefault();

    const value = this.input.value;
    const state = store.getState();

    if (isNaN(value)) {
      // call update feedback action
      store.dispatch(updateFeedback('Guess is not a number'));
    } else if (state.guesses.find(guess => guess === parseInt(value))) {
      store.dispatch(updateFeedback('You already guessed that!'));
    } else {
      // update the value using updateGuesses
      store.dispatch(updateGuesses(parseInt(value)));
      // TODO: finish the feedback updating
      // update the feedback using updateFeedback
      store.dispatch(updateFeedback('A guess was made!'));
    }
    this.input.value = '';
    this.input.focus();

    console.log(store.getState());
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button type="submit" name="submit" id="guessButton" className="button">
          Guess
        </button>
      </form>
    );
  }
}

export default connect()(GuessForm);
