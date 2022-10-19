// Klausur 
// Wenn eine Aufgabe nicht funktioniert, dann bitte auskommentieren: /*  */


console.log("Aufgabe 1")

// Bei der Landtagswahl ergeben sich vereinfacht folgende Prozentpunkte für die Parteien:

let prozentpunkteSPD = 47
let prozentpunkteCDU = 53

// Vergleichen Sie die Ergebnisse mit if/else.
// Geben Sie im Terminal in einem Antwortsatz an, welche Partei die Wahl gewonnen hat.
// Wenn die Werte sich ändern, muss ihr Antwortsatz sich automatisch anpassen.
// Hier Ihre Lösung:

if(prozentpunkteSPD < prozentpunkteCDU){
    console.log("Die CDU hat die Wahl gewonnen")
}else{
    console.log("Die SPD hat die Wahl gewonnen")
}
   
console.log("Aufgabe 2")
// Bei einem großen Unternehmen stehen 900.000 € Ausgaben Einnahmen von 1.000.000 € gegenüber.
// Prüfen Sie mit if/else, ob das Unternehmen Gewinn oder Verlust gemacht hat.
// Arbeiten Sie mit Variablen, die mit den genannten Werten initialisiert werden.
// Geben Sie Ihre Lösung im Terminal aus: 

let einnahmen = 1000000
let ausgaben = 900000

console.log("Das Unternehmen hat " + einnahmen +" € eingenommen und " + ausgaben + " € ausgegeben.")

if(einnahmen > ausgaben){
    console.log("Das Unternehmen hat Gewinn gemacht")
}else{
    console.log("Das Unternehmen hat Verlust gemacht")
}

console.log("Aufgabe 3")
// In einem Handytest sollen Handys miteinander verglichen werden.
// a) Erstellen Sie die Klassendefinition mit mindestens 4 relevanten Eigenschaften:

class Handy{
    constructor(){
        this.Preis
        this.Groeße
        this.Kameraanzahl
        this.Gewicht
    }
}

// b) Instanzieren Sie zwei Objekte ("Samsung" und "Apple") der von Ihnen erstellten Klasse:

let handyApple = new Handy()
let handySamsung = new Handy()

// c) Initialisieren Sie beide Objekte mit geeigneten Eigenschaftswerten:

handyApple.Preis = 1000
handyApple.Groeße = "3.5 Zoll"
handyApple.Kameraanzahl = 3
handyApple.Gewicht = "250 Gramm"

handySamsung.Preis = 500
handySamsung.Groeße = "4 Zoll"
handySamsung.Kameraanzahl = 4
handySamsung.Gewicht = "250 Gramm"


// d) Vergleichen Sie mit if/else eine der relevanten Eigenschaften und geben Sie
//    im Terminal aus, ob Samsung oder Apple besser ist im Hinblick auf diese Eigenschaft:

if(handySamsung.Preis < handyApple.Preis){
    console.log("Das Handy von Samsung ist günstiger, also ist Samsung die bessere Handymarke.")
}else{
    console.log("Das Handy von Apple ist günstiger, also ist Apple die bessere Handymarke.")
}


console.log("Aufgabe 4")
// Änderung Sie für Ihre ganze Banking-App das Farbschema, indem Sie 
// den grünen Bereich oben und den grünen Bereich unten 
// in eine andere, ansprechende Farbe ändern, 
// so dass die weiße Schrift weiterhin gut lesbar bleibt.

// Der Kopf, die Überschrift h2 und die Fußzeile sind nun in der Farbe powderblue

console.log("Aufgabe 5")
// In Ihrer Banking-App soll der Kunde die Kosten für einen Kredit berechnen können.
// Die Formel für die monatliche Zinsbelastung lautet: 
// Zinsen pro Monat = (Kreditbetrag x Zinssatz) ÷ (100 x 12)
// Formulieren Sie auf Papier den "Issue" und dazu 10 sinnvolle Tasks