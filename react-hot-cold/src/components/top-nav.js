import React from 'react';
import store from '../store/store.js';
import { restartGame, RESTART_GAME, auralStatus, AURAL_STATUS } from '../actions/actions.js';
import './top-nav.css';

//redux
import { connect  } from 'react-redux';

export function TopNav(props) {
  const { guesses, feedback } = props;
  // If there's not exactly 1 guess, we want to
  // pluralize the nouns in this aural update.
  const pluralize = guesses.length !== 1;
  let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${
    guesses.length
  } ${pluralize ? 'guesses' : 'guess'}.`;
  if (guesses.length > 0) {
    auralStatus += ` ${
      pluralize ? 'In order of most- to least-recent, they are' : 'It was'
    }: ${guesses.reverse().join(', ')}`;
  }

    return (
      <nav>
        <ul className="clearfix">
          <li>
            <a
              href="#what"
              className="what"
              aria-label="How to play"
            >
              What?
            </a>
          </li>
          <li>
            <a
              href="#feedback"
              className="new"
              aria-label="Start a new game"
              onClick={() => store.dispatch(restartGame())}
            >
              + New Game
            </a>
          </li>
          <li>
            <a
              href="#get-status"
              /* the `visuallyhidden` class hides an element
              while leaving it available to screen reader users  */
              className="visuallyhidden focusable status-link"
              onClick={(auralStatus) => store.dispatch(auralStatus(auralStatus))}
            >
              Hear state of game
            </a>
          </li>
        </ul>
      </nav>
    );
  }


  const mapStateToProps = state => ({
    guesses: state.guesses,
    feedback: state.feedback,
    auralStatus: state.auralStatus
  });

  export default connect(mapStateToProps)(TopNav);
