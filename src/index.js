import './style.css';
import sampleData from './modules/scorelist.js';

// Function to display the leaderboard scores in the score list section
const displayScores = () => {
  const scoreList = document.getElementById('score-list');

  // Clear any existing content in the score list
  scoreList.innerHTML = '';

  // Loop through the sampleData array and create list items for each entry
  sampleData.forEach((entry, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${entry.name}: ${entry.score}`;

    // Add the 'alternate' CSS class to every second list item (even-indexed)
    if (index % 2 !== 0) {
      listItem.classList.add('alternate');
    }

    scoreList.appendChild(listItem);
  });
};

window.addEventListener('load', displayScores);
