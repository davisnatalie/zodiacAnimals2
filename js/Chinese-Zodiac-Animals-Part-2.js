// L@@K CHALLENGE !!: SORTING ARRAY of OBJECTS by NUM and STR KEYS
// Provide the missing code in the 3 spots that say "L@@K CHALLENGE !!"

// the zoo/section holds all the animals
const zoo = document.querySelector('section');

// get the select menu to call sortAnimals function
const sortMenu = document.querySelector('select');
sortMenu.addEventListener('change', sortAnimals);

// L@@K CHALLENGE !!
//  write function that runs when checkbox is checked or unchecked
// - this code is very short, so rather than declare a function for this
// - write an anonymous inline callback function right inside the addEventListener
// - function calls reverse() method on the array to reverse the order of objects
// - function ends by calling the renderAnimals() function

//check-uncheck check box reverses array
const descendCB = document.getElementById('cb');
descendCB.addEventListener('change', function () {
    animals.reverse();
    renderAnimals();
});

document.addEventListener('DOMContentLoaded', renderAnimals); //runs once on pg load

function renderAnimals() { // output the 12 animals to the zoo
    zoo.innerHTML = ""; // clear zoo to make way for fresh output
    const sound = new Audio(); // make ONE sound obj to avoid playing multiple sounds at once


    for(let i = 0; i < animals.length; i++) { // loop the array of animal objects
        const animal = animals[i];

        const divvy = document.createElement('div'); // make a div
        divvy.className = 'divvy'; // assign class to div
        zoo.appendChild(divvy); // output div to zoo

        const animalImg = new Image(); // make an image
        animalImg.src = `images/animals/${animal.eng}.jpg`; // concat path to jpg
        animalImg.className = 'animal-pic'; // assign class to animal img
        divvy.appendChild(animalImg); // output the image inside the div:


        const charImg = new Image(); // make image to hold Chinese character
        charImg.src = `images/chars/char-${animal.chr}.jpg`; // concat path to char jpg:
        charImg.className = 'chinese-char'; // assign class to character img
        divvy.appendChild(charImg);


        const soundIcon = new Image(); //make sound icon image
        soundIcon.src = "images/sound-icon.png";
        soundIcon.className = "sound-icon";
        divvy.appendChild(soundIcon);
        soundIcon.addEventListener('click', function () {
            sound.src = `audio/${animal.chr}.mp3`;
            sound.play();
        });

       
        const engSpan = document.createElement('span');  // make a span tag to hold English name of animal
        engSpan.className = 'english';
        engSpan.textContent = animal.eng;
        divvy.appendChild(engSpan); // output Eng name to divvy

        // make a span tag to hold Pinyin name of animal
        const pinSpan = document.createElement('span');
        pinSpan.className = 'pinyin';
        pinSpan.innerHTML = animal.pin; // can't use textContent, due to HTML entities
        divvy.appendChild(pinSpan); // output Pin name to divvy

        // make a p tag to hold a string of animal years in 12 year intervals
        const yearsP = document.createElement('p');
        yearsP.className = 'zodiac-year'; // assign class to p-tag
        divvy.appendChild(yearsP); // append p tag to divvy
        // run a loop that starts w current year, and concats
        // years backwards in time, in increments of 12 years 
        let yearsStr = animal.yr + " ";
       
        // L@@K CHALLENGE !! -- write the for loop that concats the yearsStr
        // there should be a total of 12 years: 2020 2008 1996 1984 1972 1960
        // for(?; ?; ?) {
        // }

        for(let y = animal.yr - 12; y >= animal.yr - 132; y-=12) {
            yearsStr += y + " ";
        }
        yearsP.innerHTML = yearsStr; // put animal yr string in p-tag
    } // end loop
} // end renderAnimals() function

renderAnimals(); // render animals on page load; default order is by Eng, asc

// sortAnimals() runs on change to select menu:
function sortAnimals() {
    // sort animal by chosen key
    // save chosen key to a var:
    let key = this.value; // 'eng', 'chi, 'yr'
    animals.sort(function (a, b) {
        return a[key] > b[key] ? 1 : -1;
    });
}

// L@@K CHALLENGE !! Make the wheel spin !
// setInterval takes two args: a callback and a time delay in ms
// setInterval(callback, milisec)
const wheel = document.querySelector('.wheel');
let angle = 0;
let wheelSpeed = 0.5;
// get the slider (id="slider") and have it call 
// a func on 'change'
const slider = document.getElementById('slider');
slider.addEventListener('change', function() {
    wheelSpeed = this.value / 100;
})

window.setInterval(function() {
    angle += wheelSpeed;
    wheel.style.transform = `rotate(${angle}deg)`;
}, 25); // 25 ms = 40x per sec

