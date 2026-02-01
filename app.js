
let songs = ["music/dill_lagana_mana_tha.mp3","music/khat.mp3","music/aasma_aasma.mp3","music/hum_toh_tere.mp3","music/mitti_ke_bete.mp3","music/neelothi.mp3","music/samjhawan.mp3"];

let songIndex = 0;
let currSong = new Audio(songs[songIndex]);

let mname = document.querySelector(".mname");
let songname = songs[songIndex];
let name = songname.replaceAll("_"," ").replace("music/","").replace(".mp3","");
name = name.charAt(0).toUpperCase()+name.slice(1);
mname.innerHTML = `<h5>${name}</h5>`


let playbtn = document.querySelector(".play img");
playbtn.addEventListener("click",()=>{
    if(currSong.paused){
        currSong.play();
        playbtn.src = "pause.png";
    }else{
        currSong.pause();
        playbtn.src = "play.png";
    }
});

let mboxes = document.querySelectorAll(".mbox");
mboxes.forEach((mbox,index)=>{
    mbox.addEventListener("click",()=>{
        songIndex = index;
        currSong.src = songs[songIndex];
        currSong.play();
        playbtn.src="pause.png";

        songname = songs[index];
        name = songname.replaceAll("_"," ").replace("music/","").replace(".mp3","");
        name = name.charAt(0).toUpperCase()+name.slice(1);
        mname.innerHTML = `<h5>${name}</h5>`
    });
});

let nextbtn = document.querySelector(".next");
nextbtn.addEventListener("click",()=>{
    songIndex++;
    if(songIndex>=songs.length){
        songIndex = 0;
    }
    currSong.src = songs[songIndex];
    currSong.play();
    songname = songs[songIndex];
    name = songname.replaceAll("_"," ").replace("music/","").replace(".mp3","");
    name = name.charAt(0).toUpperCase()+name.slice(1);
    mname.innerHTML = `<h5>${name}</h5>`
});
let prevbtn = document.querySelector(".prev");
prevbtn.addEventListener("click",()=>{
    songIndex--;
    if(songIndex<0){
        songIndex = songs.length-1;
    }
    currSong.src = songs[songIndex];
    currSong.play();
    songname = songs[songIndex];
    name = songname.replaceAll("_"," ").replace("music/","").replace(".mp3","");
    name = name.charAt(0).toUpperCase()+name.slice(1);
    mname.innerHTML = `<h5>${name}</h5>`
});

currSong.addEventListener("timeupdate",()=>{
    function perfectTime(seconds){
        let m = Math.floor(seconds/60);
        let s = Math.floor(seconds%60);

        if(s<10){
            s="0"+s;
        }
        return `${m}:${s}`;
    }


    let mtime = document.querySelector(".mtime h5");
    mtime.innerText = `${perfectTime(currSong.currentTime)} / ${perfectTime(currSong.duration)}`
});

let inputRange = document.querySelector(".range input");
currSong.addEventListener("timeupdate",()=>{
    inputRange.value = (currSong.currentTime/currSong.duration)*100;
});
inputRange.addEventListener("input",()=>{
    currSong.currentTime = (inputRange.value*currSong.duration)/100;
});

let menu = document.querySelector(".menu img");
let sidemenu = document.querySelector(".sidemenu");
menu.addEventListener("click",()=>{
    sidemenu.classList.toggle("toggleClass");
});
