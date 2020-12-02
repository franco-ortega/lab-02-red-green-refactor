const request = require('superagent');

const fetchQuotes = async() => {
    const res = await request.get('http://futuramaapi.herokuapp.com/api/quotes');

    const object = res.body[0]

    const { character: name, quote: text, image } = object;

    return { name, text, image }
}

module.exports = {
    fetchQuotes
}