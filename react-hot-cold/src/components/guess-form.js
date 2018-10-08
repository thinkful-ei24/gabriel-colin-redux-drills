import React from 'react';

import './guess-form.css';

// Redux imports
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

    if (isNaN(value)) {
      // NaN
      this.props.dispatch(updateFeedback('Guess is not a number'));
    } else if (this.props.guesses.find(guess => guess == parseInt(value))) {
      // guess was found in history
      this.props.dispatch(updateFeedback('You already guessed that!'));
    } else if (Math.abs(value - this.props.correctAnswer) > 15) {
      // is cold
      this.props.dispatch(updateGuesses(parseInt(value)));
      this.props.dispatch(updateFeedback('That\'s a cold guess!'));
    } else if (Math.abs(value - this.props.correctAnswer) < 15) {
      // is hot
      this.props.dispatch(updateGuesses(parseInt(value)));
      this.props.dispatch(updateFeedback('That\'s a hot guess!'));
    } else if (value === this.props.correctAnswer) {
      // is correct
      this.props.dispatch(updateGuesses(parseInt(value)));
      this.props.dispatch(updateFeedback('Correct!!!'));
    } else {
      // who knows what this is
      this.props.dispatch(updateFeedback('I am confused'));
    }

    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={event => this.onSubmit(event)}>
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

function mapStateToProps(state) {
  return {
    guesses: state.guesses,
    correctAnswer: state.correctAnswer
  };
}

export default connect(mapStateToProps)(GuessForm);
