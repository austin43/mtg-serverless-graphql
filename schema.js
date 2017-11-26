const cardArgs = `
type: [String]
subtype: [String]
supertype : [String]
name : [String]
oracle : [String]
set : [String]
rarity : [String]
color : [String]
multicolor : Boolean
multiverseid : [String]
m : [String]
format : [String]
status : [String]
page: Int
typeahead: String
`

const schema = `
type Card {
  id: String
  name: String
  url: String
  store_url: String
  types: [String]
  colors: [String]
  cmc: Int
  cost: String
  text: String
  power: String
  toughness: String
  formats: Format
  editions: [Edition]
  errors: [String]
}

type Edition {
  set: String
  set_id: String
  rarity: String
  artist: String
  multiverse_id: Int
  flavor: String
  number: String
  layout: String
  price: Price
  url: String
  image_url: String
  set_url: String
  store_url: String
  html_url: String
}

type Price {
  low: String
  average: String
  high: String
}

type Format {
  commander: String
  legacy: String
  modern: String
  vintage: String
  standard: String
}

type Set {
  id: String
  name: String
  border: String
  type: String
  cards_url: String
  url: String
}

type Query {
  getCards(${cardArgs}) : [Card]
  showCard(id: String!) : Card
  getColors : [String]
  getTypes: [String]
  getSubtypes : [String]
  getSupertypes: [String]
  getSets : [Set]
  showSet(id: String!) : Set
}`

// eslint-disable-next-line import/prefer-default-export
export { schema }

// getTwitterFeed(handle: String!, consumer_key: String!, consumer_secret: String!) : Tweets
