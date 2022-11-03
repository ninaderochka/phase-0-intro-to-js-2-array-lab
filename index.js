// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

cats;

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

cats;

function destructivelyRemoveLastCat() {
    cats.pop('Garfield');
}

cats;

function destructivelyRemoveFirstCat() {
    cats.shift('Milo');
}

cats;

function appendCat(name) {
   const newCats = cats.slice();
   newCats.push('Broom');
    return newCats;
}


function prependCat(name) {
    const preCats = cats.slice();
    preCats.unshift("Arnold");
    return preCats;
}

function removeLastCat() {
    const lastCat = cats.slice();
    lastCat.pop(2);
    return lastCat;
}

function removeFirstCat() {
    const firstCat = cats.slice();
    firstCat.shift(0);
    return firstCat
}