var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program
var DatabaseSingleton = (function(){
    var instance;
    function createInstance(){
        var postgresDatabase = new Object("Database instance initialized!");
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