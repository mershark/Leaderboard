// Add the code to get the gameId here
const fetch = require('node-fetch');

// Function to create a new game using the API
const createGame = async (gameName) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: gameName,
      }),
    });
    const data = await response.json();
    return data.result.split(': ')[1]; // Extract the gameId from the response
  } catch (error) {
    // console.error('Error creating game:', error);
    return null;
  }
};

// Example usage to create a game and get the gameId
const myGameName = 'The Mersh Game';
createGame(myGameName)
  .then((gameId) => {
    if (gameId) {
      // console.log('Game created! Game ID:', gameId);
    } else {
      // console.log('Failed to create the game.');
    }
  });
