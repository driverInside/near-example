/**
 * loadQuotes.js
 */
const fs = require('fs')
const quotes = JSON.parse(fs.readFileSync('quotes-1.json', 'utf8'))

const Quotes = require('./models/quotes')

Promise.all(quotes.map(quote => Quotes.create(quote)))
  .then(result => {
    console.log('Quotes created successufully')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
