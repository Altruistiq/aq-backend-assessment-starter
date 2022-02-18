const { faker } = require('@faker-js/faker')
const fs = require('fs')
const { datatype, word, random } = faker

const TOTAL_EMISSIONS = 1000000
const TOTAL_COMPANIES = 10

console.log('Start data generation')

const companies = []
for (let i = 0; i < TOTAL_COMPANIES; i++) {
  companies.push({
    id: i + 1,
    companyName: word.verb(),
  })
}

const companyIds = companies.map(c => c.id)
const emissions = []

for (let i = 0; i < TOTAL_EMISSIONS; i++) {
  emissions.push({
    id: datatype.number({ min: 1, max: 4 }),
    companyId: random.arrayElement(companyIds),
    description: word.verb(),
    emission: datatype.number({ min: 10, max: 10000 })
  })
  
}

fs.writeFileSync('./lib/emissions.json', JSON.stringify(emissions))
fs.writeFileSync('./lib/companies.json', JSON.stringify(companies))

console.log('Done! Check the /lib folder.')