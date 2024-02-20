const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");

const showNotes = () => {
    notesContainer.innerHTML = localStorage.getItem("notes");
};

showNotes();

const saveData = () => {
    localStorage.setItem("notes", notesContainer.innerHTML);
};

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach((nt) => {
            nt.onkeyup = () => {
                saveData();
            };
        });
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
});
