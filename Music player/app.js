const song = document.getElementById("song")
const progress = document.getElementById("progress")
const playbtn =document.getElementById("playbtn")
const next=document.getElementById("next")

song.onloadeddata= function(){
    progress.max=song.duration
    progress.value=song.currentTime
}

const playpuse = ()=> {
    if(playbtn.classList.contains("fa-play"))
        {
            song.play()
            playbtn.classList.add("fa-pause")
           playbtn.classList.remove("fa-play")
          
        }else{
        song.pause()
        playbtn.classList.remove("fa-pause")
        playbtn.classList.add("fa-play")
    }
}

setInterval( () =>{
    progress.value=song.currentTime
} ,500)

progress.onchange=function () {
    song.play()
    song.currentTime=progress.value
    playbtn.classList.add("fa-pause")
    playbtn.classList.remove("fa-play")
}
