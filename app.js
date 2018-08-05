const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('qwerty');
const start = document.getElementsByClassName('btn__reset');
let missed = 0;
let choosePhrase = Math.floor(Math.random() * 5);
let gameOver = false;
const phrases = [
    "Luck favors the bold",
    "Strive through life",
    "Pain is temporary",
    "Discipline is freedom",
    "Patience is a virtue"
];


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

function checkLetter (arr){
    var letters = document.getElementsByClassName("letter");
    var noMatch = true;
    for (i = 0; i < letters.length; i++) {
        if (arr == letters[i].innerHTML.toUpperCase()) {
            console.log('match');
            letters[i].classList.add('show');
            noMatch = false;
        }
    }
    if (noMatch == true) {
        console.log('nomatch');
        return null;
    }
}

// Check if game is won or lost
function checkWin(){

    if (document.getElementsByClassName("letter").length == document.getElementsByClassName("show").length) {
        console.log("WIN");
        document.getElementsByClassName("win")[0].style.display = 'block';
        reset();
    }

    else if (missed == 5){
        console.log("LOSE");
        document.getElementsByClassName("lose")[0].style.display = 'block';
        reset();
    }

}

//RESET
function reset(){
    //Reset and play again buttons
    $( start ).click(function() {
        document.getElementsByClassName("overlay")[0].style.display = 'none';
    });
    $( start ).click(function() {
        document.getElementsByClassName("overlay")[1].style.display = 'none';
    });

    //if key hiden then show - recreate the buttons in the keyboard
    for (i = 0; i < document.getElementsByTagName("BUTTON").length; i++){
        document.getElementsByTagName("BUTTON")[i].classList.remove("chosen");
        document.getElementsByTagName("BUTTON")[i].disabled = false;
    }


    //set number of misses to zero.
    missed = 0;
    for (i = 0; i < 5; i++)
    document.getElementsByClassName("tries")[i].style.display = 'inline-block';

    // erase previous phase
    while(document.getElementsByClassName("letter")[0]){
    document.getElementsByClassName("letter")[0].parentNode.removeChild(document.getElementsByClassName("letter")[0]);
    }

    // generate a new random phrase
    choosePhrase = Math.floor(Math.random() * 5);
    phraseLetters = getRandomPhraseArray(phrases);
    console.log(phraseLetters);

    addPhraseToDisplay(phraseLetters);

}

//
// START
//

$( start ).click(function() {
    document.getElementById('overlay').style.display = 'none';
});

let phraseLetters = getRandomPhraseArray(phrases);
console.log(getRandomPhraseArray(phrases));

addPhraseToDisplay(phraseLetters);



//Keyboard event listener
qwerty.addEventListener("click", function(e) {
    // e.target = key clicked
	if( e.target.nodeName == "BUTTON") {
        console.log(e.target.innerHTML.toUpperCase());
        e.target.className = "chosen";
        e.target.disabled = true;
        let letterFound = checkLetter (e.target.innerHTML.toUpperCase());

        //Count misses
        if (letterFound === null){            
            missed = missed + 1;
            console.log("misses: " + missed);
            document.getElementsByClassName("tries")[missed-1].style.display = 'none';
        }
    }
    
    
    checkWin();
});