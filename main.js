import {renderNotes} from './app.js';
let title = document.querySelector(".title");
let note = document.querySelector(".note");
let addNoteButton = document.querySelector(".add-btn");
let notesDisplay = document.querySelector(".notes-display");
let showOtherNotes = document.querySelector(".notes-container");
let showPinnedNotes = document.querySelector(".pinned-notes-container");
let arrayofnotes = JSON.parse(localStorage.getItem("notes")) ||  [];
let othertitle = document.querySelector(".other-title");
let pintitle = document.querySelector(".pin-title");

if(arrayofnotes.length > 0){
    othertitle.classList.toggle("d-none");
    pintitle.classList.toggle("d-none");
}

addNoteButton.addEventListener("click",()=>{
    if(title.value.trim().length > 0 && note.value.trim().length > 0){
    arrayofnotes = [...arrayofnotes,{title:title.value.trim(),notes:note.value.trim(),id:Date.now(),isPinned:false,isArcheive:false}];
   }
   showOtherNotes.innerHTML = renderNotes(arrayofnotes);
   title.value = note.value = "";
   localStorage.setItem("notes", JSON.stringify(arrayofnotes));
})
showOtherNotes.innerHTML = renderNotes(arrayofnotes);



notesDisplay.addEventListener("click",(event)=>{
    let noteId = event.target.dataset.id;
    let type = event.target.dataset.type;
    switch(type){
        case "del":
            arrayofnotes = arrayofnotes.filter(({id})=>
                id.toString() !== noteId);
                showOtherNotes.innerHTML =  renderNotes(arrayofnotes);
                showOtherNotes.innerHTML = renderNotes(arrayofnotes.filter(({isPinned})=>!isPinned));
                showPinnedNotes.innerHTML = renderNotes(arrayofnotes.filter(({isPinned})=>isPinned)); 
                localStorage.setItem("notes", JSON.stringify(arrayofnotes));
                break;
            
        case "keep":
            arrayofnotes = arrayofnotes.map(note => (note.id.toString() === noteId) ? {...note,isPinned:!note.isPinned} : note);  
            showOtherNotes.innerHTML = renderNotes(arrayofnotes.filter(({isPinned})=>!isPinned));
            showPinnedNotes.innerHTML = renderNotes(arrayofnotes.filter(({isPinned})=>isPinned));   
            localStorage.setItem("notes", JSON.stringify(arrayofnotes));     
            console.log(arrayofnotes);
            break;
    }  
})




