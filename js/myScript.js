
/* JS for the video with Play/Pause, big, small ,normal buttons */

  var myVideo = document.getElementById("video1"); 
  
  function playPause() { 
    if (myVideo.paused) 
      myVideo.play(); 
    else 
      myVideo.pause(); 
  } 
  
  function makeBig() { 
      myVideo.width = 560; 
  } 
  
  function makeSmall() { 
      myVideo.width = 320; 
  } 
  
  function makeNormal() { 
      myVideo.width = 420; 
  } 

  /* JS for Display a search field that takes the user to google */

  const f = document.getElementById('form');
  const q = document.getElementById('query');
  const google = 'https://www.google.com/search?q=';

  function submitted(event) {
    event.preventDefault();
    const url = google + '+' + q.value;
    const win = window.open(url, '_blank');
    win.focus();
  }

  f.addEventListener('submit', submitted);

/*JS for "Try it" button to toggle between hiding and showing the DIV element*/

/*function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}*/

function myFunction() {
  var x = document.getElementById("myDIV");
  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


/* JS for changing the text from "Hello World!" to "Have a nice day!"*/

function displayResult() {
  document.getElementById("myHeader").innerHTML = "Have a nice day!";
}


/* JS for changing the text without colour to red and highlighted in yellow*/

function myFunction() {
  document.getElementById("demo 1").style.fontSize = "25px"; 
  document.getElementById("demo 1").style.color = "red";
  document.getElementById("demo 1").style.backgroundColor = "yellow";        
}


/*JS for switching the light ON or OFF*/

function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "Images/pic_bulboff.gif"
  } else {
    pic = "Images/pic_bulbon.gif"
  }
  document.getElementById('myImage').src = pic;
}


/* JS for Drag the image back and forth between the two div elements. */

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }


/* JS for HTML Web Storage */

  function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }


 /* JS for HTML Web workers*/

var w;

function startWorker() {
  if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
      w = new Worker("demo_workers.js");
    }
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
  }
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}


