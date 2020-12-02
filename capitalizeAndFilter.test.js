const { capitalizeAndFilter } = require('./capitalizeAndFilter')

describe('capitalizeAndFilter', () => {
    it('takes an array of strings and capitalizes all strings and filters out any strings that start with the letter f', () => {
        const newArray = capitalizeAndFilter(['spot', 'rover', 'bingo', 'fred']);

        expect(newArray)
          .toEqual(['SPOT', 'ROVER', 'BINGO'])
    });

})