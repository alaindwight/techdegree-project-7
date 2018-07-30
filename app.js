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
        if (arr == letters.item(i).innerHTML.toUpperCase()) {
            console.log('match');
            letters.item(i).className = "show";
            noMatch = false;
        }
    }
    if (noMatch == true) {
        console.log('nomatch');
        return null;
    }
}

// verify spaces aren't being passed with a letter class
// verify show class doesn't ovwrite letter class
// why is show class not applying to all Es for disciplien is freedom????
// last R in pain is temporary
// luck favors the bold, strive through life work, patience is a virtue work
function checkWin(){
    if (getElementsByClassName("letter").length === getElementsByClassName("show").length) {
        console.log("WIN");
    }

    else if (misses = 5){
        console.log("LOSE");
    }
}

//
// START
//

$( start ).click(function() {
    document.getElementById('overlay').style.display = 'none';
});

const phraseLetters = getRandomPhraseArray(phrases);
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



//reset

//transitions