const drums = document.querySelectorAll(".drum");

drums.forEach(drum => {
    drum.addEventListener("click", function () {
        const press = this.innerHTML;
        soundHandler(press);
    });
});

document.addEventListener("keypress", function (event) {
    soundHandler(event.key);
});

function soundHandler(key) {
    let audio;
    switch (key) {
        case 'w': 
            audio = new Audio("./sounds/crash.mp3");
            break;
        case 'a':
            audio = new Audio("./sounds/kick-bass.mp3");
            break;
        case 's':
            audio = new Audio("./sounds/snare.mp3");
            break;
        case 'd':
            audio = new Audio("./sounds/tom-1.mp3");
            break;
        case 'j':
            audio = new Audio("./sounds/tom-2.mp3");
            break;
        case 'k':
            audio = new Audio("./sounds/tom-3.mp3");
            break;                
        case 'l':
            audio = new Audio("./sounds/tom-4.mp3");
            break;
        default:
            console.log("Some other key press that is out of my scope");
            return; // Exit the function if no match
    }
    if (audio) {
        audio.play();
    }
}
