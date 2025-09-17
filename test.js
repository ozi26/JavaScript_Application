// test.js - Tests for Random Quote Generator using Mocha and Chai

const { expect } = require('chai');
const { getRandomQuote } = require('./index');

describe('getRandomQuote', () => {
  it('should return a string', () => {
    const quote = getRandomQuote();
    expect(quote).to.be.a('string');
    expect(quote.length).to.be.greaterThan(0);
  });

  it('should return one of the predefined quotes', () => {
    const quote = getRandomQuote();
    const quotes = [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Life is what happens when you're busy making other plans. - John Lennon",
      "Get busy living or get busy dying. - Stephen King",
      "You miss 100% of the shots you don't take. - Wayne Gretzky",
      "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb"
    ];
    expect(quotes).to.include(quote);
  });
});
