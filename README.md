Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

COME SVOLGO QUESTO ESERCIZIO:

- sulla pagina index.html creo 2 input e un button senza dare loro degli stili, gli do solo classi e li farò interagire su js

su js:

- creo una variabile dove chiedo all'utente di indicare quanti chilometri vuole percorrere

- creo una variabile dove chiedo all'utente la sua età

- creo una variabile che è il calcolo tra kmPreferiti e la tariffa di 0,21 € al km per sapere il prezzo

- dal risultato del prezzo applico i vari sconti sulla base della variabile ottenuta chiedendo all'utente la sua età