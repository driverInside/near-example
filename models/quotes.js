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
  /**
   * get
   * @description Get all the quotes
   * @returns {array} Quotes collection
   */
  get: async () => {
    const quotes = await knex.select().table(tableName)
      .then(quotes => quotes)
      .catch(err => {
        console.error(err)
      })

    return quotes
  },

  /**
   * getById
   * @description Get a specific quote by id
   * @param {integer} id Quote's id
   * @return {object} A quote
   */
  getById: async id => {
    const quote = await knex.select().table(tableName).where('id', id)
    return quote
  },

  /**
   * random
   * @description Gets a random quote
   * @returns {string} A random quote
   */
  random: async () => {
    const quotes = await Quotes.get()

    return quotes[getRandomInteger(0, quotes.length)]
  },

  /**
   * create
   * @description Creates a new quote
   * @param {object} data Quote's data
   * @returns {void}
   */
  create: async data => {
    await knex(tableName)
      .insert(data)
      .catch(err => {
        console.error(err)
      })
  },

  /**
   * update
   * @description Updates a quote
   * @param {integer} id Quote's id
   * @param {object} data New data
   * @return {integer} 0 || 1
   */
  update: async (id, data) => {
    const result = knex(tableName).where('id', id).update(data)
      .then(result => result)
      .catch(err => {
        console.error(err)
      })

    return result
  },

  /**
   * delete
   * @description Deletes a quote with a specific id
   * @param {integer} id Quote's id
   * @returns {void}
   */
  delete: async id => {
    await knex(tableName).where('id', id).del()
      .catch(err => {
        console.error(err)
      })
  },

  /**
   * isFunny
   * @description Gets the ascii code of each char in a string
   * @param {integer} id - Quote's id
   * @return {string} If a quote is funny or not
   */
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

  /**
   * isTheBestJoke
   * @description Calculates vowels - consonants ratio in order to determinate
   *              if a quote is the best joke ever
   * @param {string} quote - A string saved as quote.
   * @return {boolean} True if the ratio is at least 0.65
   */
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
