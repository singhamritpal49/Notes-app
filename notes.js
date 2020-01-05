const fs = require('fs')
const chalk = require('chalk');

const getNotes = function () {
    return "Your Notes"
}


const addNote = function (title, body) {
    const notes = loadNodes()
    const duplicateNotes = notes.filter(note => {
        return note.title === title
    })


    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note Added'));
    } else {
        console.log(chalk.red.inverse('Title Taken'));
    }

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNodes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }

}

const removeNote = function (title) {
    const notes = loadNodes()

    const notesToKeep = notes.filter(note => {
        return note.title !== title
    })
    if (notes.length === notesToKeep.length) {
        return console.log(chalk.red.inverse('Note Not Found'));
    }
    saveNotes(notesToKeep)
    console.log(chalk.green.inverse('Note Removed'));
}


const listNote = () => {
    const notes = loadNodes()
    if (!notes.length){ console.log("NO notes Found")}
    const view = notes.forEach(note => {
         console.log(note.title)
    });
    
    
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote
}
