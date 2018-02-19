var header = require('../header.js');
/*
============================================
; Title:  Assignment 1-4
; Author: David Tays
; Date:   19 February 2018
; Modified By: <David Tays>
;
;===========================================
*/
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program
function Car(model){
    this.model = model;
}
Car.prototype.start = function(){
    console.log("Car added to the racetrack!" );
}

function Truck(model, year){
    this.model = model;
    this.year = year;
}
Truck.prototype.start = function(){
    console.log("Truck added to the racetrack!");
}

function Jeep(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
}
Jeep.prototype.start = function(){
    console.log("Jeep added to the racetrack!");
}

var racetrack = [];

function driveIt(vehicle){
    vehicle.start();
    racetrack.push(vehicle);
}

var car = new Car("Prelude");
var truck = new Truck("Dakota", 1994);
var jeep = new Jeep("Grand Cherokee", 2018, "Black");

//Display Header
console.log(header.display("David", "Tays", "Excercise 1.4"));
console.log('\n'); 

//notify user that of added type and add to the racetrack array
driveIt(car);
driveIt(truck);
driveIt(jeep);


console.log("\n")
//output racetrack entry models
console.log("\n-- The following vehicles have been added to the racetrack --"); 
for (var i = 0; i < racetrack.length; i++) { 

 
    console.log(racetrack[i].constructor.name + ": " + racetrack[i].model); 
}
// end program


