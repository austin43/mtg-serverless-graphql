import fetch from 'node-fetch'

const options = {
  method: 'GET',
}
const baseUrl = `https://api.deckbrew.com/mtg`

const fetchAndParse = async(url, options) => {
  const res = await fetch(url, options)
  const jsonRes = await res.json()
  return jsonRes.errors ? [] : jsonRes
}

const stringifyParams = (args) => {
  let paramString = ''
  for(const key in args) {
    const param = args[key]
    for(const p of param) {
      paramString += `${key}=${p}&`
    }
  }
  return paramString
}

const methods = {
  async getCards(args) {
    let url
    if(args.typeahead) {
      url = `${baseUrl}/cards/typeahead?q=${args.typeahead}`
    } else {
      const page = args.page || 1
      delete args.page
      const params = stringifyParams(args)
      url = `${baseUrl}/cards?${params}`
    }
    return await fetchAndParse(url, options)
  },
  async showCard(args) {
    const url = `${baseUrl}/cards/${args.id}`
    return await fetchAndParse(url, options)
  },
  async getSets() {
    const url = `${baseUrl}/sets`
    return await fetchAndParse(url, options)
  },
  async showSet(args) {
    const url = `${baseUrl}/sets/${args.id}`
    return await fetchAndParse(url, options)
  },
  async getColors() {
    const url = `${baseUrl}/colors`
    return await fetchAndParse(url, options)
  },
  async getTypes() {
    const url = `${baseUrl}/types`
    return await fetchAndParse(url, options)
  },
  async getSubtypes() {
    const url = `${baseUrl}/subtypes`
    return await fetchAndParse(url, options)
  },
  async getSupertypes() {
    const url = `${baseUrl}/supertypes`
    return await fetchAndParse(url, options)
  },
}

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    getCards: (root, args) => methods.getCards(args),
    showCard: (root, args) => methods.showCard(args),
    getColors: (root) => methods.getColors(),
    getTypes: (root) => methods.getTypes(),
    getSubtypes: (root) => methods.getSubtypes(),
    getSupertypes: (root) => methods.getSupertypes(),
    getSets: (root) => methods.getSets(),
    showSet: (root, args) => methods.showSet(args),
  },
}
