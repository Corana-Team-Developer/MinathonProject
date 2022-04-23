import fs from "fs"

const rawData = fs.readFileSync('test.json')
let food = JSON.parse(rawData)['SR Legacy and FNDDS']

let title = food.shift()

for (let key in title) {
    if (![
        'ID', 'name', 'Food Group', 'Calories', 'Fat (g)',
        'Protein (g)', 'Carbohydrate (g)'
        ].includes(title[key])) {
            delete title[key]
        }
} 

food = food.map(e => {
    for (let key in e) {
        if (!title[key])
            delete e[key]
        else {
            e[title[key]] = e[key]
            delete e[key]
        }
    }
    return e
})
console.log(title)
