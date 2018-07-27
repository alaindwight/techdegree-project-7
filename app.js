const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('qwerty');
const start = document.getElementsByClassName('btn__reset');
let missed = 0;
let choosePhrase = Math.floor(Math.random() * 5);
const phrases = [
    "Luck favors the bold",
    "Only the strong survive",
    "Pain is temporary",
    "Discipline is freedom",
    "Patience is a virtue"
];

$( start ).click(function() {
    document.getElementById('overlay').style.display = 'none';
});

//
// JS START BUTTONS THAT DON'T WORK... Why????
//

//start.addEventListener('click', () => {
    
  //  document.getElementById('overlay').style.display = 'none';
//});

//(function startGame() {
//    document.getElementById('overlay').style.display = 'none';
//})();


//start.addEventListener('click', startGame()
//);

function getRandomPhraseArray(arr){
    console.log(choosePhrase);
    console.log(arr[choosePhrase]);
}
getRandomPhraseArray(phrases);