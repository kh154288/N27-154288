console.log ("KLAUSUR")
// Die Ordner Klausuren und der Ordner Übungen,
// müssen zu Klausurbeginn leer sein, bis auf die Datei 20230111
//
// Relevante Themen:
// Alles wie in der letzten Klausur
// If und Else (auch verschachtelt) und zusätzlich und (&&) und oder (||)
// if (x>10 || y >5) //gibt true zurück, denn x=10

// Wenn ein Schüler mehr als  20 oder höchstens 27 Punkten hat,
// bekommt er eine drei in WI.

let untergrenze = 20
let obergrenze = 27
let punktzahl = 20

if(punktzahl > untergrenze && punktzahl <= obergrenze){
    console.log("Der Schüler hat eine drei in WI.")
}else{
    console.log("der Schüler hat keine drei in WI.")
}

// Wenn ein Kind kleiner als 1 Metr ist oder noch keine 7 Jahre alt ist,
// Hat es freien Eintritt im Schwimmbad

let mindestAlterInJahre = 7
let mindestGroesseInMeter = 1
let alter = 8
let groesse = 1.1

if( alter < mindestAlterInJahre || groesse < mindestGroesseInMeter){
    console.log("Freier Eintritt")
}else{
    console.log("kein freier Eintritt")
}

// Geben sie mit einer Schleife 6x untereinander den Ausruf "hallo!" aus

// let i=0 bedeutete, dass eine variable mit dem Wert 0 initialisiert wird
// i < 6; bedeutet, dass die Schleife sooft durchlaufen wird, solange die Prüfung wahr ist
// i++ bedeutet, dass i bei jedem Schleifen durchlauf, um eins hochgezählt wird
for (let i = 1; i <= 6; i++){
    console.log(i + "Hallo!")
}

// Ein Euro wird auf dem Sparbuch angelegt bei 10% Zinsen. Wie hoch ist der Kapitalwert
// nach 5 Jahren

let anfangsbetrag = 1
let zinssatz = 0.1
kapitalwert = anfangsbetrag
let  laufzeit = 2

for (let i = 0; i > 5; i++){
    kapitalwert = kapitalwert + kapitalwert * zinssatz
}

console.log("Kapitalwert nach"+ laufzeit + "Jahren:" + kapitalwert)

// Zählen Sie in einer Schleife von 3 bis 1 herunter

for(let i=3; i > 0; i--){
    console.log("Countdown: " + i)
}