import './style.css';
import { getScores, addScore } from './modules/api.js';
import displayScores from './modules/scorelist.js';

// Event listener for the "Refresh" button
const refreshBtn = document.querySelector('.refresh-btn');
refreshBtn.addEventListener('click', displayScores);

// Event listener for the "Add Score" form submission
const scoreForm = document.getElementById('score-form');
scoreForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const playerName = document.getElementById('player-name').value;
  const scoreValue = parseInt(document.getElementById('score').value, 10);

  if (playerName && !isNaN(scoreValue)) {
    addScore(playerName, scoreValue);
    displayScores(); // Refresh the scores after adding a new score
    scoreForm.reset(); // Clear the form fields after submission
  } else {
    // alert('Please enter a valid name and score.');
  }
});

window.addEventListener('load', displayScores);
