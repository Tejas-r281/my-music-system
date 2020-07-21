let lengths = document.querySelectorAll('.song').length;
console.log(lengths);
for (let i = 0; i < lengths; i++) {
    let music = document.querySelectorAll('.song')[i].addEventListener('click', playsong);
    let musics = document.querySelectorAll('.song')[i].addEventListener('dblclick', pausesong);
}

var song1 = new Audio();
song1.src = "a.m4a";
var song2 = new Audio();
song2.src = "b.m4a";
var song3 = new Audio();
song3.src = "c.m4a";
var song4 = new Audio();
song4.src = "d.m4a";
var song5 = new Audio();
song5.src = "e.m4a";
var song6 = new Audio();
song6.src = "f.m4a";
var song7 = new Audio();
song7.src = "g.m4a";
var song8 = new Audio();
song8.src = "a.m4a";
var song9 = new Audio();
song9.src = "b.m4a";


function playsong() {
    let gana = this.innerHTML;


    switch (gana) {
        case "a":
            song1.play();
            break;
        case "b":
            song2.play();
            break;
        case "c":
            song3.play();
            break;
        case "d":
            song4.play();
            break;
        case "e":
            song5.play();
            break;
        case "f":
            song6.play();
            break;
        case "g":
            song7.play();
            break;
        case "h":
            song8.play();
            break;
        case "i":
            song9.play();
            break;

        default:
            console.log('wrong input');
            break
    }

}

function pausesong() {
    let gana = this.innerHTML;


    switch (gana) {
        case "a":
            song1.pause();
            break;
        case "b":
            song2.pause();
            break;
        case "c":
            song3.pause();
            break;
        case "d":
            song4.pause();
            break;
        case "e":
            song5.pause();
            break;
        case "f":
            song6.pause();
            break;
        case "g":
            song7.pause();
            break;
        case "h":
            song8.pause();
            break;
        case "i":
            song9.pause();
            break;

        default:
            console.log('wrong input');
            break
    }
}