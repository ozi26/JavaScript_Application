// index.js - Random Quote Generator

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Get busy living or get busy dying. - Stephen King",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb"
];

/**
 * Generate a random quote from the list.
 * @returns {string} A random quote.
 */
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// CLI entry point
if (require.main === module) {
  console.log("Your random quote:");
  console.log(getRandomQuote());
}

module.exports = { getRandomQuote };
