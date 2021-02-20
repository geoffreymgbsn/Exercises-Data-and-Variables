// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeedMph = '17500';
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerKm = 0.621;

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof (shuttleName));
console.log(typeof(shuttleSpeedMph));
console.log(typeof(distanceToMarsKm));
console.log(typeof(distanceToMoonKm));
console.log(typeof(milesPerKm));



// Code your solution to exercises 3 and 4 here:

let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars/shuttleSpeedMph;
let daysToMars = hoursToMars/24;

console.log(shuttleName + " will take " + daysToMars + " days to get to Mars");




// Code your solution to exercise 5 here:

let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon/shuttleSpeedMph;
let daysToMoon = hoursToMoon/24;

console.log(shuttleName + " will take " + daysToMoon + " days to get to the moon");

