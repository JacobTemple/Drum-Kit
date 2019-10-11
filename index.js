var buttonArray = document.querySelectorAll(".drum");

for (var i = 0; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", function(event) {
  var audio;
  switch (event.key) {
    case 'w':
      audio = new Audio('sounds/tom-1.mp3');
      break;
    case 'a':
      audio = new Audio('sounds/tom-2.mp3');
      break;
    case 's':
      audio = new Audio('sounds/tom-3.mp3');
      break;
    case 'd':
      audio = new Audio('sounds/tom-4.mp3');
      break;
    case 'j':
      audio = new Audio('sounds/snare.mp3');
      break;
    case 'k':
      audio = new Audio('sounds/crash.mp3');
      break;
    default:
      audio = new Audio('sounds/kick-bass.mp3');
      break;
  }
  audio.play();
  buttonAnimation(event.key);
});

function handleClick() {
  var audio;
  for (var i = 0; i < buttonArray.length; i++) {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case 'w':
        audio = new Audio('sounds/tom-1.mp3');
        break;
      case 'a':
        audio = new Audio('sounds/tom-2.mp3');
        break;
      case 's':
        audio = new Audio('sounds/tom-3.mp3');
        break;
      case 'd':
        audio = new Audio('sounds/tom-4.mp3');
        break;
      case 'j':
        audio = new Audio('sounds/snare.mp3');
        break;
      case 'k':
        audio = new Audio('sounds/crash.mp3');
        break;
      default:
        audio = new Audio('sounds/kick-bass.mp3');
        break;
    }
    audio.play();
    buttonAnimation(buttonInnerHTML);
  }
}


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
