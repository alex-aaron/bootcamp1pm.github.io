//const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
];

let topDogs = [{
    redAge: 26,
    redClass: "red",
    redName: "Higgs",
    redSpecies: "dog",
    redVotes: 200,
    redWeight: 0.00001
}, {
    yellowAge: 12,
    yellowClass: "yellow",
    yellowName: "Lepton",
    yellowSpecies: "dog",
    yellowVotes: 175,
    yellowWeight: 15,
}, {
    greenAge: 59,
    greenClass: "green",
    greenName: "Howlling Winds Sr.",
    greenSpecies: "dog",
    greenVotes: 201,
    greenWeight: 101,
}]


// 1.
var greeting = function(greeting, location, time){
    console.log(`${greeting} ${location} ${time}`);
};



// 2.
var contestants = function(array) {
    // return length of input array
    return array.length;
};



// 3.
var filterSpecies = dogs.filter(function(animal){
    // return true if current item in dogs array has a species property of dog
    return animal.species === 'dog';
});




// 4. 
var dogContestants = [...filterSpecies];



// 5. 
var dogsWithClasses = dogContestants.map(function(dog){
    if (dog.weight <= 10) {
        dog.class = 'red';
    } else if (dog.weight <= 20) {
        dog.class = 'yellow';
    } else {
        dog.class = 'green';
    }
    return dog;
});



// 6.
var firstInClass = function(array, obj={}){
    // base 

    // if array is empty
    if (array.length === 0) {
        // return obj
        return obj;
    }
    // recursion

    // copy key/value pairs from array[0] into output obj
    Object.assign(obj, array[0]);
    // return recursive call on sliced array and obj
    return firstInClass(array.slice(1), obj);
};


// 7.
var votes = dogs.reduce(function(voteTotal, animalObj){
    // add current votes to voteTotal
    voteTotal += animalObj.votes; 
    // return voteTotal
    return voteTotal;
}, 0);

console.log(votes);