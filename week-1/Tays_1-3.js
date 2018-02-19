var header = require('../header.js');
/*
============================================
; Title:  Assignment 1-3
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

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

function CellPhone(make, model, color, price){
    this.manufacturer = make;
    this.model = model;
    this.color = color;
    this.price = price;
    //getPrice() puts a dollar sign in front of the value
    this.getPrice = function() {
        return "$" + this.price;
    }
    //getModel grabs the model value of 'this'
    this.getModel = function() {
        return this.model;
    }
    //getDetails() grabs and formats the values of the properties of 'this'.
    this.getDetails = function() {
        return '\n-- DISPLAYING CELL PHONE DETAILS --\nManufacturer: ' + this.manufacturer + "\n" + 
        "Model: " + this.getModel() + "\n" + 
        "Color: " + this.color + "\n" + 
        "Price: " + this.getPrice();
    }
}

//two phones being created
var cellOne = new CellPhone("SPRINT", "2k", "black", "599.99");
var cellTwo = new CellPhone("APPLE", "i10", "white", "1299.99");

//Display Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 1.2"));

//Display details of phones
console.log(cellOne.getDetails());
console.log('\n\n'); 
console.log(cellTwo.getDetails());

// end program