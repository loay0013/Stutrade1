📝 Beskrivelse
Stutrade1 er en mobil- og webapplikation udviklet med Angular og Ionic. Projektet har til formål at give studerende en platform til at handle studiematerialer. Applikationen drager fordel af Ionic’s kraftfulde UI-komponenter og Angulars robuste arkitektur for at skabe en hurtig og brugervenlig oplevelse.

🚀 Funktioner
Responsivt design – Understøtter både mobil- og desktopplatforme
Brugerregistrering og login – Sikker godkendelse af brugere
Oprettelse og administration af annoncer – Brugere kan oprette, redigere og slette opslag
Søgefunktionalitet – Hurtig filtrering og søgning af produkter
Offline support – Ved hjælp af Ionic Storage
PWA-understøttelse – Kan installeres som en webapp på mobile enheder
📦 Teknologier anvendt
Angular – Komponentbaseret frontend-rammeværk
Ionic – UI-komponentbibliotek og værktøjer til mobiludvikling
Capacitor – Til native enhedsfunktionalitet (hvis anvendt)
SCSS – Forbedret styling med Sass-forprocessor
Firebase / Node.js backend (hvis anvendt) – Til datahåndtering og autentifikation
📂 Projektstruktur
src/ – Indeholder hovedkoden for Angular og Ionic-applikationen
assets/ – Billeder og andre statiske filer
environment/ – Konfigurationsfiler til udvikling og produktion
pages/ – UI-komponenter opdelt i individuelle sider
services/ – API-kald og datahåndtering
🔧 Installation
Følg disse trin for at installere og køre projektet lokalt:

1.Klon repoet
git clone https://github.com/loay0013/Stutrade1.git
cd Stutrade1
2.Installer afhængigheder
npm install
3.Start udviklingsserveren
ionic serve
Applikationen vil være tilgængelig på http://localhost:8100.
4.Byg appen til Android/iOS (valgfrit) Hvis du ønsker at køre appen på en mobil enhed:
ionic build
ionic capacitor run android
