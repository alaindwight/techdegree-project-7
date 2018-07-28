const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('qwerty');
const start = document.getElementsByClassName('btn__reset');
let missed = 0;
let choosePhrase = Math.floor(Math.random() * 5);
const phrases = [
    "Luck favors the bold",
    "Strive through life",
    "Pain is temporary",
    "Discipline is freedom",
    "Patience is a virtue"
];

//
// START
//


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

//
// PHRASE ARRAY
//


function getRandomPhraseArray(arr){
    console.log(choosePhrase);
    console.log(arr[choosePhrase]);
    let phraseLength = arr[choosePhrase].length;
    console.log(phraseLength);
    const phraseLetters = [];

    for (i = 0; i < phraseLength; i++) {
        
        phraseLetters.push(arr[choosePhrase].substr(i, 1));
        console.log(phraseLetters[i]);
    }

    return phraseLetters;
}

const phraseLetters = getRandomPhraseArray(phrases);

console.log(getRandomPhraseArray(phrases));


function addPhraseToDisplay(arr){

    for (i = 0; i < phraseLetters.length; i++) {
        if (!arr[i].trim()) {
            var listItem = document.createElement("LI");
            var text = document.createTextNode(phraseLetters[i]);
            listItem.appendChild(text);
            document.getElementById("phrase-list").appendChild(listItem);            
        }
        else {
            var listItem = document.createElement("LI");
            var text = document.createTextNode(phraseLetters[i]);
            listItem.appendChild(text);
            document.getElementById("phrase-list").appendChild(listItem).className = "letter";
        }
    }
}

addPhraseToDisplay(phraseLetters);

function checkLetter (arr){
    for (i = 0; i < phraseLetters.length; i++) {
        if (arr == phraseLetters[i]) {
            //apply show class to element
        }
        else{
            return null;
        }
    }
}