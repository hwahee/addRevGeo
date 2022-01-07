const fs = require('fs')
const addJsonAddress = require('./reverseGeocoding')

fs.readFile('./data.json', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        return console.error(`myError: ${err}`)
    }

    data = JSON.parse(data)
    addJsonAddress(data, () => {
        console.log(data)
        fs.writeFile('./datanew.json', JSON.stringify(data), (err) => {
            if (err) {
                return console.error(err)
            }
        })
    }
    )
})