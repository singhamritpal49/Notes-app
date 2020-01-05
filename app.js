const chalk = require('chalk');
const notes = require('./notes')
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
        notes.addNote(argv.title, argv.body)
    }

})
yargs.command({
    command: 'remove',
    describe: "remove a note",
    builder: {
        title: {
            title: "Title of the Note TB removed",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: "view all notes",
    handler: function (argv) {
        notes.listNote()
    }

})
yargs.command({
    command: 'read',
    describe: "Read note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.read(argv.title)
    }

})



yargs.parse()