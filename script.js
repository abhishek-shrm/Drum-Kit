//plays the beat
function playingBeat(e){
   const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return;
    else{
        audio.currentTime=0;//for repititive keystorkes
        audio.play();
        key.classList.add('playing');}
}

//adds playing class to each keystroked beat
window.addEventListener('keydown',playingBeat);

//removes playing class from each played beat
function removeTransition(e){
    if(e.propertyName!=='transform') return;
    this.classList.remove('playing'); 
}

const keys=document.querySelectorAll('.key');
//checks for the keys which are pressed
keys.forEach(key=>key.addEventListener('transitionend',removeTransition));