const chalk = require('chalk');
const getNotes = require('./notes')

const command = process.argv[2]
console.log(process.argv)
if (command === 'add') {
    console.log("added notes")
} else if (command === 'remove') {
    console.log("Removing Note")
}