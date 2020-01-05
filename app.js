const chalk = require('chalk');

const getNotes = require('./notes')

// const note = getNotes()

const greenMsg = chalk.red.bold.inverse('Error!')

console.log(greenMsg);