showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
            <div class="note">
                <div class="notein">
                    <h2>Note ${index + 1}</h2>
                    <p>${element}</p>
                    <button id="${index}"onclick="noteDelete(this.id)">Delete</button>
                </div>
            </div><br>`;
  });

  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = ``;
  }
}

function noteDelete(index){
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function() {

    let inputVal = search.value.toLowerCase();
    
    let noteCards = document.getElementsByClassName('note');
    Array.from(noteCards).forEach(function(element){
        let cartTxt = element.getElementsByTagName("p")[0].innerText;
        if(cartTxt.includes(inputVal)){
            element.style.display = "block";
        } 
        else{
            element.style.display = "none";
        }
    })
})