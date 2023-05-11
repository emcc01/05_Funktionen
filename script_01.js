"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsdeklaration, rumpf, body, callee
function test()
{
    console.log("Hallo Karsten!");
}

// test();



/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen()

function ausgabeNamen() 
{
    let firstName = "Karsten";    //interne Kapselung
    console.log("Hallo " + firstName + "!");
}

// console.log(firstName); // Fehler:Scope!Variable ist in der Funktion gekapselt
// Variable sollte besser von aussen erreichbar sein ->


/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamenParam("Asad"); // Argument (Daten für Parameter)
ausgabeNamenParam("Roxana");

//Argumente sind Daten für Parameter

function ausgabeNamenParam(firstName)  //Parameter, von aussen erreichbar
 {
    console.log("Hallo " + firstName + "!");
}