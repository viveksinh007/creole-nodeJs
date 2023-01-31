console.log("Introduction to Variable Keywords like let , var , const ");


// ⚡ Initialization
var a; //✅
let b; //✅
const c; //❌ const must have an initial value

// ⚡ Re-Assignment
var d = 1; 
d = 10; //✅

let e = 2; 
e = 20; //✅

const f = 3;
f = 30 //❌ const value is always constant and cannot be reassigned

// ⚡ Re-Declaration
var g = 1; 
var g = 10; //✅


let h = 2; 
let h = 20; //❌ must use variable name only to reassign, cannot be reassigned 

const i = 3; 
const i = 30 //❌ cannot be reassigned



// ⚡ Scope [Global, Function or local and block scope]
// Global Scope ==> Any variable that is declared outside any of the function
// Function Scope(var) ==> Can be accessed inside the function it was declared and its child
// Block Scope(let and const) ==> Con be accessed inside curly brackets where it was declared and its child

function myFunction(){
    var myName1 = 'naruto';
    let myName2 = 'ichigo';
    const myName3 = 'luffy';
    console.log(myName1);
    console.log(myName2);
    console.log(myName3);

    if(true){
        console.log(myName1);
        console.log(myName2);
        console.log(myName3);

        var myAge1 = 27;
        let myAge2 = 26;
        const myAge3 = 23;
        console.log(myAge1);
        console.log(myAge2);
        console.log(myAge3);
    }

    console.log(myName1);
    console.log(myName2);
    console.log(myName3);

    console.log(myAge1); //✅ var scope is global so it will print 27
    console.log(myAge2); //❌ var scope is bound to block so it will not print 26
    console.log(myAge3); //❌ var scope is bound to block so it will not print 23
};

myFunction();