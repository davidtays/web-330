var header = require('../header.js');
/*
============================================
; Title:  Assignment 3.2
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

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program

//database classes
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

// my new database classes
function Oracle(props) {
    this.username = props.username || "da-admin";
    this.password = props.password || "da-secr3t";
    this.server = props.server || "localhost:1234";
    this.version = props.version || 5.9;
}

function Informix(props) {
    this.username = props.username || "not-admin";
    this.password = props.password || "not-secret";
    this.server = props.server || "localhost:3330";
}

//instantiate a function  (factory template)
function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = Informix;
DatabaseFactory.prototype.createDatabase = function(properties) {
    //make the database class value be the database type value but with a capital letter to start
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } else if(properties.databaseType === "MySql") {
        this.databaseClass = MySql;
    } else if(properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    } else {
        this.databaseClass = Informix;
    }

    //Display the constructor name and properties formatted
    var db = new this.databaseClass(properties);
    var display = db.constructor.name + "{\n";
    var flag = 0;//tracks iterations
    for (var propkey in properties){
        flag++;
        //don't display databaseType property key or value
        if(propkey != 'databaseType'){
            display += "    " + propkey + ": " + db[propkey];
            //if its not the last property, a ',' will be added and a '/n', otherwise there is no comma
            if(flag <= Object.keys(db).length) {
                display += ",\n";
            }else{
                display += "\n";
            }
        }
    }
    display += "}\n";
    return display;
};
//objects Krasso created
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySql',
    username: "default",
    password: "password"
});
//objects I created
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: 'Oracle',
    username: 'spud',
    password: 'mckenzie',
    server: "6yu78",
    version: '2.0'
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: 'Informix',
    username: 'knight',
    password: 'shiningarmor',
    server: 'u88i9i'
});
// Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 3.2") + "\n");

//output objects created
console.log(oracle);
console.log(informix);

// end program


