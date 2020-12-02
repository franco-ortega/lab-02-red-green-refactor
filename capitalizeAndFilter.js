function capitalizeAndFilter(array) {

    let newArray = [];

    for(i = 0; i < array.length; i++) {
        const item = array[i]

        const upperItem = item.toUpperCase()

        newArray.push(upperItem);
    }

    const newerArray = newArray.filter(item => {
        if(item.charAt(0) !== 'F') {
            return item;
        }
    });
    return newerArray;
}

module.exports = {
    capitalizeAndFilter
}