// Define the destructivelyAppendCat function
const destructivelyAppendCat = (Ralph) => {
    cats.push(Ralph); // Append a cat to the end of the cats array
};

// Define the destructivelyPrependCat function
const destructivelyPrependCat = (Bob) => {
    cats.unshift(Bob); // Prepend a cat to the beginning of the cats array
};

// Define the destructivelyRemoveLastCat function
const destructivelyRemoveLastCat = () => {
    cats.pop(); // Remove the last cat from the cats array
};

// Define the destructivelyRemoveFirstCat function
const destructivelyRemoveFirstCat = () => {
    cats.shift(); // Remove the first cat from the cats array
};

// Define the appendCat function
const appendCat = (Ralph) => {
    return [...cats, Ralph]; // Append a cat to the cats array and return a new array
};

// Define the prependCat function
const prependCat = (Bob) => {
    return [Bob, ...cats]; // Prepend a cat to the cats array and return a new array
};

// Define the removeLastCat function
const removeLastCat = () => {
    return cats.slice(0, -1); // Remove the last cat from the cats array and return a new array
};

// Define the removeFirstCat function
const removeFirstCat = () => {
    return cats.slice(1); // Remove the first cat from the cats array and return a new array
};

// Define the initial value of cats
let cats = ["Milo", "Otis", "Garfield"];

// Append a new cat using destructivelyAppendCat function
destructivelyAppendCat("Ralph");
console.log("Updated cats array after appending:", cats);

// Prepend a new cat using destructivelyPrependCat function
destructivelyPrependCat("Bob");
console.log("Updated cats array after prepending:", cats);

// Remove the last cat using destructivelyRemoveLastCat function
destructivelyRemoveLastCat();
console.log("Updated cats array after removing last cat:", cats);

// Remove the first cat using destructivelyRemoveFirstCat function
destructivelyRemoveFirstCat();
console.log("Updated cats array after removing first cat:", cats);

// Append a new cat using appendCat function
console.log("New array after appending a cat:", appendCat("Ralph"));

// Prepend a new cat using prependCat function
console.log("New array after prepending a cat:", prependCat("Bob"));

// Remove the last cat using removeLastCat function
console.log("New array after removing last cat:", removeLastCat());

// Remove the first cat using removeFirstCat function
console.log("New array after removing first cat:", removeFirstCat());


  