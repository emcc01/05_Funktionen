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

// ausgabeNamenParam("Asad"); // Argument (Daten für Parameter)
// ausgabeNamenParam("Roxana");

// //Argumente sind Daten für Parameter

// function ausgabeNamenParam(firstName)  //Parameter, von aussen erreichbar
//  {
//     console.log("Hallo " + firstName + "!");
// }


/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

// ausgabeNamenParams("Dave", "Batista");
// ausgabeNamenParams("Jamshid", "Rahmanzani");
// ausgabeNamenParams(prompt("Vorname?"), prompt("Nachname?"));

// function ausgabeNamenParams(firstName, familyName) 
// {
//     console.log("Hallo " + firstName + " " + familyName + "!");
// }


/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenParams2("Dave", "Batista");

function ausgabeNamenParams2(firstName, familyName) 
{
   // console.log("Hallo " + firstName + " " + familyName + "!");
    // 1.Funktionalität: string composing,
    const GAP = " ";                    //Grossschrift: Stringkonstanten 
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";


    // 2. String output
    console.log(outputStr);


    // refactoring: code umbauen
}

/***** Funktionen 03b *****/
// Trennen der Funktionalitäten in Funktionen| return

output (getString("Maxine", "Mützerich"));
output(getString(prompt("Vorname?"), prompt("Nachname?")));

function getString(firstName, familyName) 
{
    const GAP = " ";                    
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";
    return outputStr;  // return sendet Daten an den Call zurück
    console.log(outputStr); // return bricht die Fkt ab
}
// Input -> Parameter, return -> Output

// 2. Funktinalität: string output
// output("Hi");
// output(true);
function output(outputData)
{
    console.log(outputData);
}