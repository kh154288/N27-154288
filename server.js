// Programme verarbeiten oft Objekte der realen Welt. Objekte haben 
// Eigenschaften. In unserem Bankingprogramm interessieren uns Objekte,
// wie z.B. Kunde, Konto, Filiale, Bankautomat, ...
// Alle Kunden unserer Bank haben dieselben Eigenschaften, aber
// unterschiedliche Eigenschaftswerte.

class Kunde{
    constructor(){
        this.IdKunde
        this.Nachname
        this.Vorname
        this.Passwort
        this.Kontostand
        this.Geburtsdatum
        this.Mail
        this.Telefonnummer
    }
}

class Kundenberater{
    constructor(){
        this.IdKundenberater
        this.Nachname
        this.Vorname
        this.Telefonnummer
        this.Mail
        this.Filiale
        this.Begruessung
    }
}

// Die Klasse Konto ist der Bauplan für alle konto-Objekte
// In der Klasse werden alle relevanten Eigenschaften definiert.
// Die konto-Onjekte die aus dieser Klasse erzeugt werden, haben dieselben
// Eigenschaften, aber unterschiedliche Eigenschaftswerte.

class Konto{
    constructor(){

        // Die relevanten Eigenschaften werden im Konstruktor aufgelistet.
        // Eigenschaften werden immer groß geschrieben

        this.Kontostand
        this.IBAN
        this.Kontoart
        this.PIN
    }
}

class Kredit{
    constructor(){
        this.Betrag
        this.Laufzeit
        this.Zinssatz
    }

// Eine Funktion berechnet etwas. Im Namen der Funktion steht also immer ein Ver.

    berechneGesamtkostenKreditNachEinemJahr(){
        return this.Betrag * this.Zinssatz / 100 + this.Betrag
    }
}


// Von der Kunden-Klasse wird eine konkrete Instanz gebildet. 

let kunde = new Kunde()



// Die konkrete Instanz bekommt Eigenschaftswerte zugewiesen.

kunde.IdKunde = 154288
kunde.Nachname = "Köpi"
kunde.Vorname = "Hannah"
kunde.Geburtsdatum = "13.09.2005"
kunde.Mail = "hannah@web.de"
kunde.Passwort = "123"
kunde.Telefonnummer = "02877/4585"

const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
const cookieParser = require('cookie-parser')
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))
meineApp.use(cookieParser('geheim'))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

let kundenberater = new Kundenberater ()

kundenberater.IdKundenberater = 154298
kundenberater.Nachname = "Kiff"
kundenberater.Vorname = "Pit"
kundenberater.Mail = "kiff@pit.support.mail"
kundenberater.Telefonnummer = "02877/8970"
kundenberater.Filiale = "Berlin"
kundenberater.Begruessung = "Hallo ich bin's dein Kundenberater!"

// Die Methode meineApp.get('/' ...) wird abgearbeitet, sobald
// der Kunde die Indexseite (localhost:3000 bzw. n27.herokuapp.com) ansurft.


// Instanziierung eines Objektes namens konto vom Typ KOnto
// "let konto" bedeutet, dass ein Objekt namens konto exsistieren soll.
// Man sagt, das konto wird deklariert.

// "= new Konto()" nennt man die instaziirung. Bei der Instanziierung wird 
// Festplattenspeicher reserviert, um bei der anschließenden initalisierung konkrete
// Eigenschaftswerte für ein Objekt zu speichern.

let konto = new Konto() 

// Bei der Initalisierung werden konkrete Eigenschaftswerte in die reservierten 
// Speicherzellen geschrieben.

// Die Zuweisung von Eigenschaftswerten geschieht immer von rechts nach links.

konto.Kontostand = 10000
konto.IBAN = "DE87656789876" // bei Buchstaben immer in "" schreiben
konto.Kontoart = "Girokonto"
konto.PIN = 2345



meineApp.get('/' ,(browserAnfrage, serverAntwort, next) => {              
    
    // Wenn ein signierter Cookie mit Namen 'istAngemeldetAls' im Browser vorhanden ist,
    // dann ist die Prüfung wahr und die Anweisungen im Rumpf der if-Kontrollstruktur 
    // werden abgearbeitet.

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        
        // Die Index-Seite wird an den Browser gegeben:

        serverAntwort.render('index.ejs',{})
    }else{

        // Wenn der Kunde noch nicht eigeloggt ist, soll
        // die Loginseite an den Browser zurückgegeben werden.
        serverAntwort.render('login.ejs', {
            meldung : ""
        })
    }                 
})

// Die Methode meineApp.post('/login' ...) wird abgearbeitet, sobald
// der Anwender im Login-Formular auf "Einloggen" klickt.

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
    
    // Die im Browser eingegebene IdKunde und Kennwort werden zugewiesen
    // an die Konstanten namens idKunde und kennwort.

    const idKunde = browserAnfrage.body.IdKunde
    const passwort = browserAnfrage.body.Passwort
    
    console.log("ID des Kunden: " + idKunde)
    console.log("Passwort des Kunden: " + passwort)

    // Die Identität des Kunden wird überprüft.
    
    if(idKunde == kunde.IdKunde && passwort == kunde.Passwort){
    
        // Ein Cookie namens 'istAngemeldetAls' wird beim Browser gesetzt.
        // Der Wert des Cookies ist das in eine Zeichenkette umgewandelte Kunden-Objekt.
        // Der Cookie wird signiert, also gegen Manpulationen geschützt.

        serverAntwort.cookie('istAngemeldetAls',JSON.stringify(kunde),{signed:true})
        console.log("Der Cookie wurde erfolgreich gesetzt.")

        // Wenn die Id des Kunden mit der Eingabe im Browser übereinstimmt
        // UND ("&&") das Kennwort ebenfalls übereinstimmt,
        // dann gibt der Server die gerenderte Index-Seite zurück.
        
        serverAntwort.render('index.ejs', {})
    }else{

        // Wenn entweder die eingegebene Id oder das Kennwort oder beides
        // nicht übereinstimmt, wird der Login verweigert. Es wird dann die
        // gerenderte Login-Seite an den Browser zurückgegeben.

        serverAntwort.render('login.ejs', {
            meldung : "Ihre Zugangsdaten scheinen nicht zu stimmen."
        })
    }
})


// Wenn die login-Seite im Browser aufgerufen wird, ...

meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {              

    // ... dann wird die login.ejs vom Server gerendert an den
    // Browser zurückgegeben:

    // Der Cookie wird gelöscht.

    serverAntwort.clearCookie('istAngemeldetAls')

    serverAntwort.render('login.ejs', {
        meldung : "Bitte geben Sie die Zugangsdaten ein."
    })          
})

// Wenn die About-Seite angesurft wird, wird die about-Seite zum Browser
// zurückgegeben


meineApp.get('/about',(browserAnfrage, serverAntwort, next) => {              
  
    // Wenn der Anmelde-Cookie gesetzt ist, wird der Nutzer zur
    // About-Seite gelenkt.

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        
        // Die Index-Seite wird an den Browser gegeben:

        serverAntwort.render('about.ejs',{})
    }else{

        // Wenn der Kunde noch nicht eigeloggt ist, soll
        // die Loginseite an den Browser zurückgegeben werden.
        serverAntwort.render('login.ejs', {
            meldung : ""
        })
    }       
          
})



meineApp.get('/profil',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('profil.ejs', {
        Vorname: kunde.Vorname,
        Nachname: kunde.Nachname,
        Mail: kunde.Mail, 
        Telefonnummer: kunde.Telefonnummer,
        Passwort: kunde.Passwort,
        Erfolgsmeldung: ""
    })          
})
// sobald ser Speichern-Button auf der Profile.Seite gedrückt wird, wird die 
// meineApp.post('profile'...) abgearbeitet
meineApp.post('/profil',(browserAnfrage, serverAntwort, next) => {              
    
    
    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        
        // Die Index-Seite wird an den Browser gegeben:

        serverAntwort.render('index.ejs',{})
    }else{

        // Wenn der Kunde noch nicht eigeloggt ist, soll
        // die Loginseite an den Browser zurückgegeben werden.
        serverAntwort.render('login.ejs', {
            meldung : ""
        })
    }       
    
    // Die Erfolgs für das Speichern der geänderten Profildaten 
    //wird in eine lokale Variabel names Erfolgsmeldung gespeichert
    
    let erfolgsmeldung = ""

    // Der Wert der Eigenschaft von Mail im Browser wird
    // zugewiesen (=) an die Eigenschaft Mail des Objekts kunde

    if(kunde.Mail != browserAnfrage.body.Mail){

        // Wenn der Wert der Eigenschaft von kunde.Mail abweicht
        // vom Wert der Eigenschaft Mail aus dem Browser-Formular,
        // dann wird die Erfolgsmeldung initialisiert:

        erfolgsmeldung = erfolgsmeldung + "Änderung der Mail erfolgreich. "
        kunde.Mail = browserAnfrage.body.Mail
        console.log(erfolgsmeldung)
    }

    if(kunde.Passwort != browserAnfrage.body.Passwort){

        // Wenn der Wert der Eigenschaft von kunde.Kennwort abweicht
        // vom Wert der Eigenschaft Kennwort aus dem Browser-Formular,
        // dann wird die Erfolgsmeldung initialisiert:

        erfolgsmeldung = erfolgsmeldung + "Änderung des Kennworts erfolgreich. "
        kunde.Passwort = browserAnfrage.body.Passwort
        console.log(erfolgsmeldung)
    }

    if(kunde.Telefonnummer != browserAnfrage.body.Telefonnumer){

        // Wenn der Wert der Eigenschaft von kunde.Rufnummer abweicht
        // vom Wert der Eigenschaft Rufnummer aus dem Browser-Formular,
        // dann wird die Erfolgsmeldung initialisiert:

        erfolgsmeldung = erfolgsmeldung + "Änderung der Rufnummer erfolgreich. "
        kunde.telefonnummer = browserAnfrage.body.Telefonnummer
        console.log(erfolgsmeldung)
    }
    
    console.log("Profil gespeichert.")
    
    serverAntwort.render('profil.ejs', {
        Vorname: kunde.Vorname,
        Nachname: kunde.Nachname,
        Mail: kunde.Mail,
        Telefonnummer: kunde.Rufnummer,
        Passwort: kunde.Kennwort,
        Erfolgsmeldung: erfolgsmeldung
    })
})


meineApp.get('/support',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('support.ejs', {
        Vorname: kundenberater.Vorname,
        Nachname: kundenberater.Nachname,
        Mail: kundenberater.Mail, 
        Telefonnummer: kundenberater.Telefonnummer,
        Filiale: kundenberater.Filiale,
        Begruessung: kundenberater.Begruessung,
        Erfolgsmeldung: ""
    })          
})
// Sobald der Button "Kontostand anzeigen" auf der Index Seite gedrückt wird, 
// wird die meineApp.get ('/KontostandAnzeigen'-Funktion abgearbeitet)

meineApp.get('/KontostandAnzeigen' ,(browserAnfrage, serverAntwort, next) => {              
    
    // Wenn ein signierter Cookie mit Namen 'istAngemeldetAls' im Browser vorhanden ist,
    // dann ist die Prüfung wahr und die Anweisungen im Rumpf der if-Kontrollstruktur 
    // werden abgearbeitet.

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        


        // Die Index-Seite wird an den Browser gegeben:

        serverAntwort.render('KontostandAnzeigen.ejs',{
            Kontostand: konto.Kontostand,
            IBAN: konto.IBAN,
            Kontoart: konto.Kontoart,
            Erfolgsmeldung:""
        })
    }else{

        // Wenn der Kunde noch nicht eigeloggt ist, soll
        // die Loginseite an den Browser zurückgegeben werden.
        serverAntwort.render('login.ejs', {
            Meldung : ""
        })
    }                 
})

//require('./Uebungen/ifUndElse.js')
//require('./Uebungen/klasseUndObjekt.js')
require('./Uebungen/klausur.js')

meineApp.get('/kreditRechner' ,(browserAnfrage, serverAntwort, next) => {              
    

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        

        serverAntwort.render('kreditRechner.ejs',{})
    }else{

         serverAntwort.render('login.ejs', {
            meldung : ""
        })
    }                 
})