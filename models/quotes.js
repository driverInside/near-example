/**
 * models/quotes.js
 *
 * @description :: Describes the quotes operations
 * @docs        :: TODO
 */
const knex = require('../db')

const tableName = 'quotes'

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const Quotes = {
  get: async () => {
    const quotes = await knex.select().table(tableName)
      .then(quotes => quotes)
      .catch(err => {
        console.error(err)
      })
    return quotes
  },

  getById: async id => {
    const quote = await knex.select().table(tableName).where('id', id)
    return quote
  },

  random: async () => {
    const quotes = await Quotes.get()
    return quotes[getRandomInteger(0, quotes.length)]
  },

  create: async data => {
    await knex(tableName)
      .insert(data)
      .catch(err => {
        console.error(err)
      })
  },

  update: async (id, data) => {
    const result = knex(tableName).where('id', id).update(data)
      .then(result => result)
      .catch(err => {
        console.error(err)
      })

    return result
  },

  delete: async id => {
    await knex(tableName).where('id', id).del()
      .catch(err => {
        console.error(err)
      })
  },

  isFunny: async id => {
    const quoteObj = await Quotes.getById(id)
    const quote = quoteObj[0].quote || ''
    let total = 0

    for (let i = 0; i < quote.length; i++) {
      total += quote.charCodeAt(i)
    }

    const result = (total % 2 === 0) ? 'not funny' : 'funny'

    return (Quotes.isTheBestJoke(quote)) ? result + ' and is the best joke ever!!' : result
  },

  isTheBestJoke: async quote => {
    quote = quote.toLowerCase()

    let vowels = 0
    let consonants = 0

    const vowelsAscii = [97, 101, 105, 111, 117]

    for (let i = 0; i < quote.length; i++) {
      const charCode = quote.charCodeAt(i)

      if (charCode >= 97 && charCode <= 122) {
        if (vowelsAscii.indexOf(charCode) !== -1) {
          vowels++
        } else {
          consonants++
        }
      }
    }

    return ((vowels > 0) && (((consonants + vowels) / vowels) >= 0.65))
  }
}

module.exports = Quotes
