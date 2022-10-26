
console.log("******** K L A U S U R 26.10.2022 ********")

// Aufgabe 1
// Grenzen Sie Datenschutz und Datensicherheit gegeneinader ab!
// 
// Datenschutz bedeutet, dass personenbezogene Daten, wie Telefonnummern, geschützt werden. 
// Jede Person soll selber entscheiden können, was mit den eigenen Daten passiert (Schutz der informatiellen Selbständigkeit)
// und diese dürfen nicht missbraucht werden. Die Datenschutzgrundverordnung sorgt dafür, dass personenbezogene
// Daten geschützt werden und vor dem Missbrauch geschützt werden und das Bundesdatenschutzgesetz regelt, wie personenbezogene Daten verarbeitet
// werden müssen. 
// Datensicherheit schützt personenbezogene Daten, aber auch alle anderen Daten. Diese ist Teil der
// Informationssicherheit. Das Ziel der Datensicherheit ist es, Verfügbarkeit (Daten sind zu jeder Zeit abrufbar),
// Authenzität(Daten sind vollständig und echt), Integrität (die Daten werden nicht missbraucht oder verändert) und
// Vertraulichkeit (die Daten sind nur für autorisierte Personen verfügbar) zu gewährleisten. Ist ein Unterpunkt 
// nicht gegeben, ist die Datensicherheit nicht mehr gewährleistet. Datensicherheit kann man mithilfe von technischen Maßnahmen,
// wie das installieren eines Virenschutzprogrammes und organisatorschen Maßnahmen, wie das Besucher ein 
// seperates WLAN bekommen, gewähren.
// 
// Aufgabe 2 a)
// Grenzen Sie symmetrische und asymmetrische Verschlüsselung gegeneinander ab! 
// Nennen Sie jeweils Vorteile! 
// Gehen Sie auch auf die Eigenschaften und Unterschiede von public key und private key ein!
// 
// In der symmetrischen Verschlüsselung gibt es einen Schlüssel zum codieren und decodieren einer Datei.
// Die symmetrische Verschlüsselung ist dadurch schnell, aber nicht so sicher wie die asymmetrische. 
// Beispielsweise wie bei einem Handy, man muss zu Anfang das Passwort eingeben und kann dann
// auf alle Daten zugreifen.
// Bei der asymmetrischen hingegen gibt es zwei Schlüssel. Ein Schlüssel zum codieren und einen zum decodieren.
// Das Passwort zum decodieren sollte über einen weiteren sichern Kanal, wie das Telefen, weitergegeben werden.
// Die asymmetrische ist sicherer, jedoch langsamer. Um die beiden positiven Eigenschaften zu verbinden sollte 
// man die hybride Verschlüsselung nehmen, die sehr sicher und schnell ist.
// Unter public key versteht man alle Daten die man einfach so erreichen und abrufenn kann, beispielsweise
// kann man im Internet jede Seite abrufen, da diese öffentlich sind. Für den private key benötigt man 
// hingegen ein Passwort, um auf die Inhalte zugreifen zu können. Beispielweise kann ich ein Dokumet teilen und
// sichere dieses mit einem Passwort. Dann muss der Empfämger des Dokumentes auch das Passwort bekommen, um 
// auf die Inhalte zugreifen zu können.
//
// 
// Aufgabe 2 b)
// Wie könnte eine Verschlüsselung aussehen, die die Vorteile symmetrischer und asymmetrischer
// Verschlüsselung miteinander verbindet?
// 
// Wenn man die Vorteile symmetrischer und asymmetrischer Verschlüsselung vereint, spricht man von einer 
// hybriden Verschlüsselung. Diese ist so sicher wie die asymmetrische und so schnell wie die symmetrische.
// Bei der hybriden Verschlüsselung verschlüsselt man zuerst die Datei symmetrisch und die Nachricht mit der man das 
// Dokumet schickt asymmetrisch. Ein Beispiel Programm ist dafür der Boxcryptor. Diesen kann man auf Teams anwenden,
// er verschlüsselt das Dokument und die Nachricht und der Vorteil ist, dass es schnell ist und kein dritter mitlesen kann.
// Jedoch benötigt der Empfänger der Nachricht einen Boxcryptor Account.
//
//
// Aufgabe 3)
// Grenzen Sie Deklaration, Instanziierung und Initialisierung voeinander ab!  
// 
// Bei der Deklaration gebe ich bekannt, dass ich ein neues Projekt starte. Bei der Instanziirung 
// werden Zellen im Arbeitsspeicher reserviert, die freien Zellen werden bei der Initialisierung mit konkreten
// Eigenschaftswerten gefüllt.
//
// 
//
//
//
//
//
//
// Aufgabe 5a)
// Sie werden beauftragt ein Programm zu entwicklen, dass alle Zeugnisse einer Schule digital verwaltet.  
// Entwerfen Sie eine Klasse mit relevanten Eigenschaften!

class Zeugnis{
    constructor(){
        this.Durchschnitt
        this.Name
        this.Klasse
        this.Klassenlehrer
        this.Geburtsdatum
    }
}

// Aufgabe 5b)
// Führen Sie Deklaration, Instanzzierung und Initialisierung für das Halbjahreszeugnis 
// des Schüler Pit Kiff durch. 
// Vergeben Sie realistische Eigenschaftswerte.  
//

let zeugnisPit = new Zeugnis()

zeugnisPit.Durchschnitt = "2,0"
zeugnisPit.Name = "Pit Kiff"
zeugnisPit.Klasse = "GW21a"
zeugnisPit.Klassenlehrer = "Herr Müller"
zeugnisPit.Geburtsdatum = "13.09.2005"
zeugnisPit.Jahrgang = 12


// Aufgabe 5c)
// Geben Sie die Eigenschaftswerte aus 5b auf der Konsole wie folgt aus: Je Eigenschaft soll
// in jeweils einer Zeile die Eigenschaft und der zugehörige Wert angezeigt werden.
// Beispiel für:
// Schuhgröße: 40
// Haarfarbe: braun 

console.log("Der Schüler heißt " + zeugnisPit.Name + ".")
console.log("Der Schüler " + zeugnisPit.Name + " ist am " + zeugnisPit.Geburtsdatum + " geboren.")
console.log("Der Schüler " + zeugnisPit.Name + " geht in die Jahrgangsstufe " + zeugnisPit.Jahrgang + ".")
console.log("Der Schüler " + zeugnisPit.Name + " hat einen Durchschnitt von " + zeugnisPit.Durchschnitt + ".")
console.log("Der Schüler " + zeugnisPit.Name + " ist in der Klasse " + zeugnisPit.Klasse + "." )
console.log("Der Klassenlehrer der Klasse " + zeugnisPit.Klasse + " heißt " + zeugnisPit.Klassenlehrer + ".")


// Aufgabe 6)
// Zwei Schüler haben bekommen Zeugnisse: 
// Pit: Punkte (Mathe: 15, Deutsch: 10, Englisch:  5) 
// Git: Punkte (Mathe: 10, Deutsch:  8, Englisch: 15) 
//
// Initialisieren Sie Variablen für alle genannten Eigenschaftswerte. 
// Programmieren Sie folgende Logik:
// * Wenn die Durchschnittspunktzahl von Pit größer ist, soll auf der Konsole stehen: 
//     "Pit hat das bessere Zeugnis" 
// * Wenn die Durchschnittspunktzahl von Git größer ist, soll auf der Konsole stehen: 
//     "Git hat das bessere Zeugnis"
// Wenn die Durchschnittspunktzahl gleich ist, dann soll auf der Konsole stehen: 
//     "Pit gleich Git" 
// Wenn die Durchschnittspunktzahl bei einem doppelt so groß oder größer ist, dann soll auf der Konsole stehen: 
//     "Git hat das viel bessere Zeugnis" bzw.
//     "Pit hat das viel bessere Zeugnis"

let punktePitMathe = 15
let punktePitDeutsch = 10
let punktePitEnglisch = 5

let punkteGitMathe = 10
let punkteGitDeutsch = 8
let punkteGitEnglisch = 15

if((punktePitMathe + punktePitDeutsch + punktePitEnglisch)/3 > (punkteGitDeutsch + punkteGitEnglisch + punkteGitMathe)/3){
    console.log("Pit hat das bessere Zeugnis")
}else{
    console.log("Git hat das bessere Zeugnis")
}

if((punktePitMathe + punktePitDeutsch + punktePitEnglisch)/3 == (punkteGitDeutsch + punkteGitEnglisch + punkteGitMathe)/3){
    console.log("Pit gleich Git")
}else{
    console.log("Pit nicht gleich Git")
}

if((punktePitMathe + punktePitDeutsch + punktePitEnglisch)/3 >> (punkteGitDeutsch + punkteGitEnglisch + punkteGitMathe)/3){
    console.log("Pit hat das viel bessere Zeugnis")
}else{
    console.log("Git hat das viel bessere Zeugnis")
}