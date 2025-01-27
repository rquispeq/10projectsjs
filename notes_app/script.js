const btn_add_note = document.getElementById('btn_add_note')
const container_notes = document.getElementById('container-notes')
btn_add_note.addEventListener('click', e => {
    noteElement = createNoteElement()
    container_notes.appendChild(noteElement)
})

let database =  localStorage.getItem('notes')
if(database){
    database = JSON.parse(database)
} else {
    database = {}
    localStorage.setItem('notes', JSON.stringify(database))
}


function restoreNotes() {
    for (const noteId in database) {
        const note = database[noteId];
        const noteElement = createNoteElement(note);
        container_notes.appendChild(noteElement);
    }
}

if (Object.keys(database).length > 0){

    restoreNotes()
}


function createNoteElement(note = {}){
    const noteContainer = document.createElement('div')
    noteContainer.className = 'note'
    noteContainer.id = note.noteId ?? Object.keys(database).length + 1
    noteContainer.innerHTML = `
                <div class="header-note">
                    <button class="btn_edit"><i class="fas fa-edit"></i></button>
                    <button class="btn_delete"><i class="fas fa-trash"></i></button>
                </div>
                <div class="body-note">
                    <textarea class="note-content-text" rows="14" ${note.noteId ? 'disabled' : ''} >${note.value ?? ''}</textarea>
                </div>
            `
    setClickEvents(noteContainer)
    setAutoSave(noteContainer)
    return noteContainer
}

function setClickEvents(noteContainer) {
    const edit = noteContainer.querySelector('.btn_edit')
    const btn_delete = noteContainer.querySelector('.btn_delete')
    setEditEvent(edit, noteContainer)
    setDeleteEvent(btn_delete, noteContainer)
}

function setEditEvent (edit, noteContainer) {
    const note_container_text = noteContainer.querySelector('.note-content-text')
    edit.addEventListener('click', e => {
        note_container_text.disabled = !note_container_text.disabled
        
        // localStorage.setItem('notes',JSON.stringify(database))
    })
}

function setDeleteEvent (btnDelete, note){
    btnDelete.addEventListener('click', e =>{
        note.remove()
        delete database[note.id]
        localStorage.setItem('notes',JSON.stringify(database))

    })
}

function setAutoSave (noteContainer) {
    const note_container_text = noteContainer.querySelector('.note-content-text')
    note_container_text.addEventListener('input',  e => {
        database[noteContainer.id] = {
            noteId: noteContainer.id,
            value: note_container_text.value
        }
        localStorage.setItem('notes',JSON.stringify(database))
    })
}