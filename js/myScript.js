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

