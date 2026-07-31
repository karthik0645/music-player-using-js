const songs=[

{
title:"Dreams",
artist:"Artist One",
src:"music/song1.mp3",
cover:"images/cover1.jpg"
},

{
title:"Sky",
artist:"Artist Two",
src:"music/song2.mp3",
cover:"images/cover2.jpg"
},

{
title:"Relax",
artist:"Artist Three",
src:"music/song3.mp3",
cover:"images/cover3.jpg"
}

];

let currentSong=0;

const audio=document.getElementById("audio");

const title=document.getElementById("title");

const artist=document.getElementById("artist");

const cover=document.getElementById("cover");

const playBtn=document.getElementById("playBtn");

const progress=document.getElementById("progress");

const volume=document.getElementById("volume");

function loadSong(index){

audio.src=songs[index].src;

title.innerText=songs[index].title;

artist.innerText=songs[index].artist;

cover.src=songs[index].cover;

audio.load();

}

loadSong(currentSong);

function playPause(){

if(audio.paused){

audio.play();

playBtn.innerHTML="⏸";

}

else{

audio.pause();

playBtn.innerHTML="▶";

}

}

function nextSong(){

currentSong++;

if(currentSong>=songs.length)
currentSong=0;

loadSong(currentSong);

audio.play();

playBtn.innerHTML="⏸";

}

function prevSong(){

currentSong--;

if(currentSong<0)
currentSong=songs.length-1;

loadSong(currentSong);

audio.play();

playBtn.innerHTML="⏸";

}

audio.addEventListener("timeupdate",()=>{

progress.max=audio.duration;

progress.value=audio.currentTime;

document.getElementById("current").innerText=
format(audio.currentTime);

document.getElementById("duration").innerText=
format(audio.duration);

});

progress.addEventListener("input",()=>{

audio.currentTime=progress.value;

});

volume.addEventListener("input",()=>{

audio.volume=volume.value;

});

audio.addEventListener("ended",nextSong);

function format(time){

if(isNaN(time)) return "0:00";

let min=Math.floor(time/60);

let sec=Math.floor(time%60);

if(sec<10) sec="0"+sec;

return min+":"+sec;

}

const playlist=document.getElementById("playlist");

songs.forEach((song,index)=>{

let li=document.createElement("li");

li.innerText=song.title+" - "+song.artist;

li.onclick=()=>{

currentSong=index;

loadSong(index);

audio.play();

playBtn.innerHTML="⏸";

};

playlist.appendChild(li);

});
