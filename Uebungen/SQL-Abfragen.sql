Abfragen

*Abfrage 1*
--------------

Suche alle Kunden aus der Tabelle kunde:

SELECT * FROM kunde; 

Das Sterchnchen steht für alle Eigenschaften (Spalten) aller Kundensätze (Zeilen)

*Abfrage 2*
--------------

Suche alle Vornamen und Nachnamen

SELECT vorname, nachname FROM kunde;

*Abfrage 3*
----------

Suche alle Vornamen und Nachnamen aller Kunden, die in Borken wohnenn:

SELECT vorname, nachname FROM kunde WHERE ort = "Borken"; 