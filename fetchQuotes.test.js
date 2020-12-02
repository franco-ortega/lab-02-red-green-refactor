const { fetchQuotes } = require('./fetchQuotes')

describe('fetchQuotes', () => {
    it('return a single quote in an object with the name, text, and image properties', async() => {
        const futuramaObject = await fetchQuotes();

        expect(futuramaObject)
          .toEqual({
            "name": expect.anything(),
            "text": expect.anything(),
            "image": expect.anything()
        })
    });

})