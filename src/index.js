import './style.css';
import { getScores, addScore } from './modules/api.js';
import displayScores from './modules/scorelist.js';

// Event listener for the "Refresh" button
const refreshBtn = document.querySelector('.refresh-btn');
refreshBtn.addEventListener('click', async () => {
  try {
    const scores = await getScores(); // Fetch scores from the API
    displayScores(scores); // Display the fetched scores
  } catch (error) {
    // Handle errors here if needed for debugging
  }
});

// Event listener for the "Add Score" form submission
const scoreForm = document.getElementById('score-form');
scoreForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const playerName = document.getElementById('player-name').value;
  const scoreValue = parseInt(document.getElementById('score').value, 10);

  if (playerName && !Number.isNaN(scoreValue)) {
    try {
      await addScore(playerName, scoreValue); // Add the score to the API
      scoreForm.reset();
    } catch (error) {
      // Handle errors here if needed
    }
  } else {
    // alert('Please enter a valid name and score.');
  }
});

// Function to initially fetch and display scores on page load
const initializeScores = async () => {
  try {
    const scores = await getScores();
    displayScores(scores);
  } catch (error) {
    // Handle errors here if needed
  }
};

window.addEventListener('load', initializeScores);
