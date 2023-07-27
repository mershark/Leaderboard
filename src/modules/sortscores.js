// Function to sort scores from highest to lowest
const sortScoresDescending = (scores) => {
  return scores.sort((a, b) => b.score - a.score);
};

export { sortScoresDescending };
