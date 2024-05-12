export const renderNotes = (notes) => {
   let newNote =  notes.map(({ title, notes, id, isPinned , isArcheive}) => {
       return(
        `<div class="single-note shadow">
               <div class="title-container">
                   <span class="single-note-title align-center">${title}</span>
                   <button class="button del-btn" data-type="del" data-id=${id}>
                       <span class="material-symbols-outlined" data-type="del" data-id=${id}>delete</span>
                   </button>
               </div>
               <p>${notes}</p>
               <div class="options d-flex gap-md">
                   <button class="button btn pinned-btn" data-type="keep" data-id=${id}>
                       <span data-type="keep" data-id=${id} class="material-symbols-outlined">keep</span>
                   </button>
               </div>
           </div>`
       )
   });
   newNote = newNote.join("");
   return newNote;
};

 

