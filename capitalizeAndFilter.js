function capitalizeAndFilter(array) {

    return array
    .filter(item => {
        if(item.charAt(0) !== 'f') {
            return item;
        }
    })
    .map(item => {
        return item.toUpperCase();

    })
}

module.exports = {
    capitalizeAndFilter
}