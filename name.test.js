const { getName } = require('./name')
const { spot } = require('./data')

describe('getName', () => {
    it('return the name property of an object', () => {
        const name = getName(spot);

        expect(name)
          .toEqual('spot')
    });
})