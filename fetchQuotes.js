const request = require('superagent');

const fetchQuotes = async() => {
    const response = await request.get('http://futuramaapi.herokuapp.com/api/quotes');

    const object = response.body[Math.floor(Math.random() * response.body.length)]

    const { character: name, quote: text, image } = object;

    return { name, text, image }
}

module.exports = {
    fetchQuotes
}