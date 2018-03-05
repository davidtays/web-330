var header = require('../header.js');
/*
============================================
; Title:  Assignment 2.2
; Author: David Tays
; Date:   28 February 2018
; Modified By: <David Tays>
; Description: This program demonstrates objects, prototypes and inheritance
;===========================================
*/ 
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

// Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 2.2") + "\n");

var person = {
    getAge: function(){
        return this.age;
    }
}

var prof = Object.create(person, {
    "age":
    {
        "value": "46"
    },
    "fullname":
    {
        "value": "Prof Krasso"
    }
});

console.log(prof.getAge());

console.log("The person's full name is: '%s'", prof.fullname);
console.log(prof.fullname + "'s age is '%s'", prof.age);

// end program