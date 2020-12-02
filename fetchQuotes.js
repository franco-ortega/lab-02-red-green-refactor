const request = require('superagent');

const fetchQuotes = async() => {
    const res = await request.get('http://futuramaapi.herokuapp.com/api/quotes');

    return res.body[0];

}

module.exports = {
    fetchQuotes
}