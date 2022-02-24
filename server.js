// Programme verarbeiten oft Objekte der realen Welt.
// Objekte haben Eigenschaften,
// In unserem Bankingprogrammm interesieren uns Objekte, 
// wie zb. Kunde, Konto, Filiale, Bankautomat,...
//Alle Kunden unserer Bank haben dieselben Eigenschaften, 
//aber unterschiedliche Eigenschaftswerte

class Kunde{
    constructor(){
        this. IdKunde
        this. Nachname
        this. Vorname
        this. Kennwort
        this. Kontostand
        this. Geburtsdatum
        this. Mail
    }
}

// Von der Kundenklasse wird eine konkrete Instanz 
// gebildet.

let kunde = new Kunde()

// Die konkrete Instanz bekommt Eigenschaftswerte 
// zugewiesen.

kunde.IdKunde = "154288"
kunde.Nachname = "Kiff"
kunde.Vorname = "Lena"
kunde.Geburtsdatum = "13.09.2005"
kunde.Mail = "kiff@gmail.com"
kunde.Kennwort = "123"


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
// Die Methode meineApp.get ('/' ...) wird abgearbeitet, wenn der Kunde
// die Intexseite (localhost:3000 bzw. n27.herokuapp.com) ansurft.

meineApp.get('/',(browserAnfrage, serverAntwort, next) => {   
    
    // Wenn ein signierter Cookie mit Namen 'istAngemeldetAls' im Browser vorhanden ist,
    // dann ist die Prüfung wahr und es wird die gerenderte Index-Seite an den Browser zurückgegeben.
    // Andernfalls wird die Login-Seite an den Browser gegeben.
    
    if(browserAnfrage.signedCookies['istAngemeldetAls']){

        // Wenn der Kunde bereits angemeldet ist, soll die
        // Index-Seite an den Browser gegeben werden.

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
// der Anwender im Login-Formuar auf "Einloggen" klickt.
meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {      
    
// Die im Browser eingegebende IdKunde und Kennwort werden zugewiesen 
// an die Konstanten namens idKunde und Kennwort

    const idKunde = browserAnfrage.body.IdKunde
    const kennwort = browserAnfrage.body.Kennwort

    console.log("ID des Kunden: " +  idKunde)
    console.log("Kennwort des Kunden: " + kennwort)

// Die Identität des Kunden wird überprft:

    if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){
       
// Ein Cookie namens 'istAngemeldetAls' wird beim Browser gesetzt.
// Der Wert des Cookies ist das in eine Zeichenkette umgewandelte Kunden-Objekt.
// Der Cookie wird signiert, also gegen Manipulationen geschützt.

        serverAntwort.cookie('istAngemeldetAls',JSON.stringify(kunde),{signed:true})
        console.log("Der Cookie wurde erfolgreich gesetzt.")

       //Wenn die ID des Kunden mit der Eingabe im Browser übereinstimmt
       //Und das Kennwort ebenfalls übereinstimmt, 
       // dann gibt der Server die gerenderte Index-Seite zurück.

        serverAntwort.render('index.ejs', {})  
    }else{
// Wenn entweder die eingegebende Id oder das Kennwort oder Beides
// nicht üereinstimmt, wird der Login verweigert. ES wird dann die
// gerenderte Login-Seite an den Browser zurückgegebenn.

        serverAntwort.render('login.ejs',{
            meldung : "Ihre Zugangsdaten scheinen nicht zu stimmen"
        })

    }

    })


//Wenn die login-Seite im Browser aufgerufem wird, ...

meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {  
      
     //...dann wird die login.ejs vom Server gerendert an den Browser zurückgegeben:

serverAntwort.clearCookie('istAngemeldetAls')

    serverAntwort.render('login.ejs', {
        meldung : "Bitte geben sie ihre Zugangsdaten ein"
    })          
})

// Die meineApp.post('login') wird ausgeführt, sobald der Button auf dem Login-Formular gedrückt wird.

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {  
     serverAntwort.render('index.ejs', {})          
})

// require('./Uebungen/ifUndElse')
require('./Uebungen/klasseUndObjekt.js')