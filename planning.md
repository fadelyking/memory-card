# Title
Memory Card Game

# Features
I will be adding a score system, shuffle system, cards with images that are retrieved through API.

# Components
-  Display
-  Score
-  Cards
-  Data

* Display will include the score, cards and data and attach itself to the DOM (it will act as a body to the rest of the components).

* Score will include two scores, normal score and best score. 
Each time the user clicks on a card that was not clicked before, score increases.
When the player loses (by clicking on a card which he clicked on previously)
Then the current score gets logged as best score, and reset to 0.

Cards will contain 6 cards, each card will retrieve data from the Data api component,
The data API component will fetch data from GIPHY API. Each card will have a unique key,
and when the user clicks on a card, the card key gets placed into an array. There will be
2 arrays one for the cards that were not clicked on, and one for the cards that were clicked on.
If the player clicks on a card that is placed in the clicked on array, the player loses the game.
If the user clicks on a card, the cards re shuffle in a random order.

Data will do the fetching process, it will communicate with the GIPHY API and retrieve 6 gifs
for the cards.

# ////// Ordered list...:

# Display Setup:

Create a display element that includes the score, cards, and data.
It will also include the game title and some text.
Attach the display to the Document Object Model (DOM).
Ensure that the display serves as the main body for other components.

# Score Functionality:

Implement a scoring system with two scores: normal score and best score.
Increase the normal score each time a user clicks on an unclicked card.
Log the current score as the best score when the user clicks on a previously clicked card.
Reset the current score to 0 after a user loses the game.

# Card Component:

Design 6 cards in the display.
Utilize the Data API component to fetch data from the Giphy API for each card.
Assign a unique key to each card.
Implement functionality to shuffle the cards in a random order when a user clicks on a card.

# Data API Component:

Create a Data API component responsible for fetching data from the Giphy API.
Ensure the component retrieves 6 gifs for the cards.
Establish communication between the Data API component and the Giphy API.

# Click Tracking:

Set up two arrays to track clicked and unclicked cards.
Add the card key to the unclicked array when a user clicks on an unclicked card.
Move the card key to the clicked array if the user clicks on a previously unclicked card.
If a user clicks on a card in the clicked array, consider it a loss in the game.
Card Shuffle:

Implement a function to shuffle the cards in a random order when a user clicks on a card.
Ensure the shuffle occurs after each click to provide a dynamic and challenging experience for the player.
