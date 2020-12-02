const { fetchQuotes } = require('./fetchQuotes')

describe('fetchQuotes', () => {
    it('return a single quote in an object with the name, text, and image properties', async() => {
        const futuramaObject = await fetchQuotes();

        expect(futuramaObject)
          .toEqual({
            "character": "Bender",
            "quote": "I'm a fraud. A poor, lazy, sexy fraud.",
            "image": "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
        })
    });

})