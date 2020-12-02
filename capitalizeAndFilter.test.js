const { capitalizeAndFilter } = require('./capitalizeAndFilter')

describe('capitalizeAndFilter', () => {
    it('', () => {
        const newArray = capitalizeAndFilter(['spot', 'rover', 'bingo', 'fred']);

        expect(newArray)
          .toEqual(['SPOT', 'ROVER', 'BINGO'])
    });

})