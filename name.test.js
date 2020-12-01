const { getName } = require('./name')
const { spot } = require('./data')
const { character } = require('./data')

describe('getName', () => {
    it('return the name property of an object', () => {
        const name = getName(spot);

        expect(name)
          .toEqual('spot')
    });

    it('return the name property of an object', () => {
        const name = getName(character);

        expect(name)
          .toEqual('Aang')
    });
})