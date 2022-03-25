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

// Die Methode meineApp.get('/' ...) wird abgearbeitet, sobald
// der Kunde die Indexseite (localhost:3000 bzw. n27.herokuapp.com) ansurft.

meineApp.get('/',(browserAnfrage, serverAntwort, next) => {              
    
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

// Die meineApp.post('login') wird ausgeführt, sobald der Button
// auf dem Login-Formular gedrückt wird.

meineApp.get('/about',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('about.ejs', {})          
})

// require('./Uebungen/ifUndElse.js')
// require('./Uebungen/klasseUndObjekt.js')

meineApp.get('/profil',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('profil.ejs', {
        Vorname: kunde.Vorname,
        Nachname: kunde.Nachname,
        Mail: kunde.Mail, 
        Telefonnummer: kunde.Telefonnummer,
        Passwort: kunde.Passwort
    })          
})
// sobald ser Speichern-Button auf der Profile.Seite gedrückt wird, wird die 
// meineApp.post('profile'...) abgearbeitet
meineApp.post('/profil',(browserAnfrage, serverAntwort, next) => {              
    
    // Die im Browser eingegebene Werte werden in Konstanten gespeichert
    // Der Wert der Eigenschaft von Mail in Browser wird
    // zugewiesen (=) an die Eigenschaft Mail des Objekts kunde
    kunde.Mail = browserAnfrage.body.Mail
    kunde.Telefonnummer = browserAnfrage.body.Telefonnummer
    kunde.Passwort = browserAnfrage.body.Passwort
    
    console.log("Profil gespeichert.")
   
     serverAntwort.render('profil.ejs', {
        Vorname: kunde.Vorname,
        Nachname: kunde.Nachname,
        Mail: kunde.Mail, 
        Telefonnummer: kunde.Telefonnummer,
        Passwort: kunde.Passwort
    })
    
})
