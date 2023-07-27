// game ID received from the idgenerator
const gameId = 'DrjqKkAywwfPBGQCwpZl';

// Function to get all scores for the game from the API
const getScores = async () => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
    const data = await response.json();
    return data.result;
  } catch (error) {
    // No need to display errors here, just return an empty array (note for debugging)
    return [];
  }
};

// Function to add a new score for the game using the API
const addScore = async (name, score) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: name, score,
      }),
    });

    await response.json();
    // Display success message here (note for debugging)
  } catch (error) {
    // No need to display errors here (note for debugging)
  }
};

export { getScores, addScore };
