import React from 'react';
import store from '../store/store.js';
import { restartGame, RESTART_GAME, auralStatus, AURAL_STATUS } from '../actions/actions.js';
import './top-nav.css';

//redux
import { connect  } from 'react-redux';


export default function TopNav(props) {
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
            onClick={() => store.dispatch(auralStatus())}
          >
            Hear state of game
          </a>
        </li>
      </ul>
    </nav>
  );
}
