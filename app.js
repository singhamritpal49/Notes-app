const chalk = require('chalk');
const getNotes = require('./notes')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: "add a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            description: "Note Description",
            demandOption: true,
            type: 'string'
        }
    },
    
    handler: function (argv) {
        console.log("Title: "+ argv.title)
        console.log("Body: "+ argv.body)
    }

})
yargs.command({
    command: 'remove',
    describe: "remove a note",
    handler: function () {
        console.log("removing a note")
    }
})
yargs.command({
    command: 'list',
    describe: "view all notes",
    handler: function () {
        console.log("Listing new notes")
    }

})
yargs.command({
    command: 'read',
    describe: "Read note",
    handler: function () {
        console.log("Reading Note")
    }

})



yargs.parse()