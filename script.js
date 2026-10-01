const  lockScreen = document.querySelector(".lock-screen");
const  homeScreen = document.querySelector(".home-screen");
const changeBackground = document.querySelector("#change-background")
const homeBtn = document.querySelector("#homebtn");
const lockBtn = document.querySelector("#lockbtn");


// changeBackground.addEventListener("click", () => {
//     homeScreen.style.backgroundImage =  "url(./src/images/home-screen-bg/gojo.jpg)";
// })

const backgrounds = [
    
    "./src/images/home-screen-bg/bg2.jpg",
    "./src/images/home-screen-bg/bg3.jpg",
    "./src/images/home-screen-bg/bg4.jpg",
    "./src/images/home-screen-bg/bg5.jpg",
    "./src/images/home-screen-bg/bg6.jpg",
    "./src/images/home-screen-bg/bg7.jpg",
    "./src/images/home-screen-bg/bg8.jpg",
    "./src/images/home-screen-bg/bg9.jpg",
    "./src/images/home-screen-bg/bg9.jpg"
];

let bgIndex = 0;

changeBackground.addEventListener("click", () => {
    lockScreen.style.backgroundImage = `url("${backgrounds[bgIndex]}")`;

    bgIndex++;

    if (bgIndex >= backgrounds.length) {
        bgIndex = 0;
    }
});

homeBtn.addEventListener("click", () => { 
    lockScreen.style.display = "none";
    homeScreen.style.display = "flex";
})

lockBtn.addEventListener("click", () => { 
    lockScreen.style.display = "flex";
    homeScreen.style.display = "none";
})

const a1 = document.querySelector("#a1");
const noteApp = document.querySelector(".note-app")


a1.addEventListener("click", () => { 
    console.log("note-app")
    noteApp.style.display = "flex";
    homeScreen.style.display = "none";
    lockScreen.style.display = "none";
})


const backHome = document.querySelector("#back-to-home");

backHome.addEventListener("click", () => {
    noteApp.style.display = "none"
    homeScreen.style.display = "flex";

})

const noteAddBtn = document.querySelector("#note-addbtn");
const noteInput = document.querySelector("#note-input");
const dataDisplay = document.querySelector(".data-display");

noteAddBtn.addEventListener("click", () => {

    if (noteInput.value === "") {
        alert("Please enter first");
        return;
    }

    
    const noteEntry = document.createElement("div");
    noteEntry.classList.add("note-entry");

    
    const newNoteEntry = document.createElement("p");
    newNoteEntry.textContent = noteInput.value;

    
    const dataBtn = document.createElement("div");
    dataBtn.classList.add("data-btn");

    
    const deleteNoteEntry = document.createElement("button");
    deleteNoteEntry.textContent = "Delete";

    
    const editNoteEntry = document.createElement("button");
    editNoteEntry.textContent = "Edit";

    
    dataBtn.append(editNoteEntry, deleteNoteEntry);
    
    deleteNoteEntry.addEventListener("click", () => {
    noteEntry.remove();
    });

    editNoteEntry.addEventListener("click", () => {

    noteInput.value = newNoteEntry.textContent;

    });
    
    noteEntry.append(newNoteEntry, dataBtn);

    
    dataDisplay.append(noteEntry);

    
    noteInput.value = "";
});

noteInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        noteAddBtn.click();
    }

});


const timeDisplays = document.querySelectorAll(".time");

function updateTime() {
    const now = new Date();

    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");

    timeDisplays.forEach((time) => {
        time.textContent = `${hours}:${minutes}`;
    });
}

updateTime();

setInterval(updateTime, 1000);

const now = new Date();

console.log(now);
console.log(now.getHours());
console.log(now.getMinutes());
