 const button = document.querySelector("button")
 const notescontainer = document.querySelector(".notes-container")
 let notes = document.querySelectorAll(".input-box")

 button.addEventListener("click" , (e) => {
    e.preventDefault()
    let p = document.createElement("p")
    let img = document.createElement("img")
    p.classList.add("input-box")
    p.setAttribute("contenteditable","true")
    img.src="delete.png"
    notescontainer.appendChild(p).appendChild(img)
    saveData()
 })

 notescontainer.addEventListener("click" , (e)=>{
    if(e.target.tagName === "IMG"){
      e.target.parentElement.remove()
    }
 })

 function saveData(){
    console.log("hello");
    localStorage.setItem("data",notes.innerHTML)
}

function showData(){
    notes.innerHTML = localStorage.getItem("data")
}

showData()