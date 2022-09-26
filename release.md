# Mall för inlämning laboration 1, 1dv610

> This file is here for school project reflection and will be removed in later versions

​
## Checklista
  - [x] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [x] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt: "det bör fungera" :) )
  - [x] Koden är objektorienterad
  - [x] Jag har skrivit en modul som riktar sig till programmerare
​
## Egenskattning och mål
  - [ ] Jag är inte klar eftersom jag vet att jag saknar något. (Då skall du inte lämna in! Lämna då istället in på restlaboration.)
  - [x] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - [x] De flesta testfall fungerar
    - [x] Koden är förberedd på Återanvändning
    - [x] All kod samt historik finns i git 
    - [x] Kodkvaliterskraven är ifyllda
    - [x] Reflektion är skriven utifrån bokens kapitel 
  - [x] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
    - [x] Samtliga testfall är skrivna    
    - [x] Testfall är automatiserade
    - [x] Det finns en tydlig beskrivning i hur modulen skall användas (i git)
    - [x] Kodkvalitetskraven är varierade 
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A) 
​
Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. 
​
## Återanvändning
>Beskriv hur du anpassat din kod och instruktioner för att någon annan programmerare skall kunna använda din modul. Om du skrivit instruktioner för din användare, länka till dessa. Om inte, beskriv här hur någon skall göra för att använda din modul.


Jag har gjort modulen så att den går att installera som ett npm paket i andra applikationer.
Man importerar metoderna som en es6 modul det finns en [README.md](https://github.com/BunnyCode/element-scraper/blob/main/README.md) fil där man kan se vilka metoder som finns tillgängliga, samt ett par exempel hur man använder dem.
​
## Beskrivning av min kod
>Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder. Skapa gärna ett klassdiagram som bild. Använd det ni lärt er så här långt i 1dv607. Kommunicera så att jag kan förstå.

dist/index.js är huvud filen som sen använder sig av hjälpmetoder.
​
## Hur jag testat
>Beskriv hur du kommit fram till om din kod fungerar.
​

Jag har gjort körningar med [Test appen](https://github.com/BunnyCode/element-scraper/tree/main/function-test-app) mot en github page sida.
https://bunnycode.github.io/element-scraper/

Då denna sida inte ändras kan resultaten veriferias mellan varje förändring / itteration. Ska den uppdateras så kommer det endast tillkomma mer komplexa strtukturer.
När jag gjorde om greedy och non greedy funktionerna, så var detta viktigt för att se att man fick förväntade resultat.

Tanken var att köra med testramverk, men då det tog mer tid än jag tänkt mig så lät jag skriva metod anrop som ger en gämförelseutskrift.

Detta är inte optimalt men fungerar i ett första skede, det låter mig dess utom testa allting på samma sätt varje gång.

### Testfall
>Lista de enskilda testfallen. **Fetmarkera** sådant som du själv fyllt i. En rad per testfall. Om ni använder vertyg för testning kan ni ha en bild här med testrapporten. Tänk på att kommunicera till mig. Vad fungerar?, vad fungerar inte? Hur är det testat? Vilka delar testas inte?

​
| Vad testas      | input | output | utfall PASS/FAIL |
| --------- | --------- | ------ | ------- |
|           |           |        |         |
​
​
## Kodkvalitetskrav
​
>**Fetmarkera** de "regler" som används ur CC. Ni kan frångå tabellformat om ni vill. Skapa direktlänkar till er kod där det är lämpligt. Skriv så att jag kan förstå.
​
### Namngivning
​
| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|                      |                                              |
​
### Funktioner
​
| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|                      |                                              |
​
## Laborationsreflektion
> Reflektera över uppgiften utifrån ett kodkvalitetsperspektiv. Använd begrepp ifrån boken. 