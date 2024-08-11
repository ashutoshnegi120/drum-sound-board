# Drum Sound Program

## Overview

This web application simulates a drum kit. It allows users to play drum sounds by clicking on drum elements or pressing specific keys on the keyboard. The sounds correspond to various drum beats, enhancing user interaction with audio feedback.

## Features

- **Click to Play**: Click on elements with the class `drum` to play drum sounds.
- **Keyboard Interaction**: Press specific keys to play corresponding drum sounds.
- **Sound Mapping**: Different keys and drum elements trigger different sounds.

## Setup Instructions

1. **HTML Structure**: Ensure you have HTML elements with the class `drum` for click interactions. Example:

    ```html
    <!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Drum Kit</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet">
</head>

<body>

  <h1 id="title">Drum 🥁 Kit</h1>
  <div class="set">
    <button class="w drum">w</button>
    <button class="a drum">a</button>
    <button class="s drum">s</button>
    <button class="d drum">d</button>
    <button class="j drum">j</button>
    <button class="k drum">k</button>
    <button class="l drum">l</button>
  </div>


  <footer>
    Made with ❤️ in India.
  </footer>
  <script src="index.js"></script>
</body>

</html>

    ```

2. **Sound Files**: Place your sound files in a `./sound/` directory. Ensure the following files are present:
    - `crash.mp3`
    - `kick-bass.mp3`
    - `snare.mp3`
    - `tom-1.mp3`
    - `tom-2.mp3`
    - `tom-3.mp3`
    - `tom-4.mp3`

3. **JavaScript File**: Save the provided JavaScript code in a file named `script.js` and include it in your HTML as shown above.

## Code Explanation

### JavaScript

```javascript
// Get all elements with class 'drum'
const drums = document.querySelectorAll(".drum");

// Attach click event listeners to each drum element
drums.forEach(drum => {
    drum.addEventListener("click", function () {
        const press = this.innerHTML;
        soundHandler(press);
    });
});

// Attach keypress event listener to the document
document.addEventListener("keypress", function (event) {
    soundHandler(event.key);
});

// Function to handle sound based on the key
function soundHandler(key) {
    let audio;
    switch (key) {
        case 'w': 
            audio = new Audio("./sound/crash.mp3");
            break;
        case 'a':
            audio = new Audio("./sound/kick-bass.mp3");
            break;
        case 's':
            audio = new Audio("./sound/snare.mp3");
            break;
        case 'd':
            audio = new Audio("./sound/tom-1.mp3");
            break;
        case 'j':
            audio = new Audio("./sound/tom-2.mp3");
            break;
        case 'k':
            audio = new Audio("./sound/tom-3.mp3");
            break;                
        case 'l':
            audio = new Audio("./sound/tom-4.mp3");
            break;
        default:
            console.log("Some other key press that is out of my scope");
            return; // Exit the function if no match
    }
    if (audio) {
        audio.play();
    }
}
