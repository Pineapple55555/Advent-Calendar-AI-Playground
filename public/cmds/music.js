
function playmusic() {
    var audio = new Audio('Music.mp3');
    audio.setAttribute('autoplay', 'autoplay');
    audio.play();

}
function musicstop(){
    audio.pause();
}

