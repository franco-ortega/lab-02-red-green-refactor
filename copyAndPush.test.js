const { numbers } = require('./data')
const { copyAndPush } = require('./copyAndPush')

describe('getName', () => {
    it('take in an array and a new item, and return a new array with the new item pushed to the end of the new array', () => {
        const newArray = copyAndPush(numbers, 4);

        expect(newArray)
          .toEqual([1, 2, 3, 4])
    });

    it('take in an array and a new item, and return a new array with the new item pushed to the end of the new array, but the original array is unchanged', () => {
        const newArray = copyAndPush(numbers, 4);

        expect(numbers)
          .toEqual([1, 2, 3])
    });

})