import { getScores } from './api.js';
import sortScoresDescending from './sortscores.js';

// Function to display the leaderboard scores in the score list section
const displayScores = async () => {
  const scoreList = document.getElementById('score-list');

  // Clear existing content in the score list
  scoreList.innerHTML = '';

  try {
    const scores = await getScores();
    const sortedScores = sortScoresDescending(scores); // Sort scores

    sortedScores.forEach((entry, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${entry.user}: ${entry.score}`;

      // Add the 'alternate' CSS class to every second list item (even-indexed)
      if (index % 2 !== 0) {
        listItem.classList.add('alternate');
      }

      scoreList.appendChild(listItem);
    });
  } catch (error) {
    // No need to display errors here, handle them silently only for debugging
  }
};

export default displayScores;
