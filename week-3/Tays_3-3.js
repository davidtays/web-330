var header = require('../header.js');
/*
============================================
; Title:  Assignment 3.3
; Author: David Tays
; Date:   7 March 2018
; Modified By: <David Tays>
;===========================================
*/ 
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program
//function 
var DatabaseSingleton = (function(){
    var instance;
    function createInstance(){
        var postgresDatabase = new Object("The Singleton works!! Database instance initialized!");
        return postgresDatabase;
    }

    return{
        getInstance:function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

function databaseSingletonTest(){
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s ", oracle === postgres);
}
/*function databaseInit(){
    var databaseInstance1 = DatabaseSingleton.getInstance();
    var databaseInstance2 = DatabaseSingleton.getInstance();

    console.log("One database instance? " + (databaseInstance1 === databaseInstance2));
} */

databaseSingletonTest();
// end program