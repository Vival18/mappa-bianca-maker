# 🗺️ Mappa Bianca Maker

**Mappa Bianca Maker** è una Progressive Web App (PWA) che ti permette di **tracciare i tuoi percorsi GPS** in tempo reale, salvarli localmente nel browser ed esportarli nei formati GeoJSON e GPX.

Realizzata con **Leaflet** e pensata per funzionare sia su desktop che su smartphone, è lo strumento ideale per escursionisti, ciclisti, geologi, urbanisti e tutti coloro che vogliono registrare e visualizzare i propri spostamenti.

---

## 🔗 Link alla mappa pubblicata
[https://vival18.github.io/mappa-bianca-maker/](https://vival18.github.io/mappa-bianca-maker/)

---

## 📦 Contenuto del repository

mappa-bianca-maker/
├── index.html # Pagina principale (mappa, controlli, stili)
├── manifest.json # Configurazione PWA
├── sw.js # Service Worker per offline caching
├── icon-192.png # Icona PWA (192x192)
├── icon-512.png # Icona PWA (512x512)
└── README.md # Questo file
text


---

## ✨ Funzionalità principali

- **Tracciamento GPS automatico** – avvia la registrazione e cammina; l’app acquisisce la tua posizione in tempo reale.
- **Marker di partenza e arrivo** – indicatori visivi per l’inizio e la fine del percorso.
- **Distanza percorsa** – calcolata in tempo reale usando la formula di Haversine (precisione metrica).
- **Salvataggio locale** – i percorsi vengono conservati nel tuo browser (localStorage) e rimangono disponibili anche dopo aver chiuso la pagina.
- **Salvataggio automatico (bozza)** – ogni 5 punti acquisiti, il percorso parziale viene salvato come bozza. All’avvio, se esiste una bozza, puoi riprenderla.
- **Visualizzazione percorsi salvati** – lista con checkbox per mostrare/nascondere ogni tracciato sulla mappa.
- **Esportazione** – scarica i tuoi percorsi nei formati **GeoJSON** (per analisi GIS) e **GPX** (compatibile con GPS, Garmin, Strava, ecc.).
- **Geolocalizzazione** – pulsante per centrare la mappa sulla tua posizione attuale.
- **PWA installabile** – aggiungi l’app alla schermata Home del tuo smartphone e usala anche offline (parziale).

---

## 🚀 Come usare l'app

### 1. Tracciare un percorso

1. Apri la mappa sul tuo dispositivo.
2. **Attendi** che la posizione venga rilevata automaticamente (l’app centrerà la mappa su di te).
3. Nel pannello in basso, clicca su **“▶️ Inizia”**.
4. Cammina: vedrai il tracciato in verde e il marker verde che ti segue.
5. Durante la registrazione, il pannello mostra:
   - Numero di punti acquisiti
   - Distanza percorsa (metri/km)
6. Per fermare la registrazione, clicca **“⏹️ Ferma”**.
7. **💾 Salva** il percorso: dagli un nome (opzionale) e clicca su “Salva”. Il percorso verrà archiviato nella lista.

### 2. Gestire i percorsi salvati

- **Mostra/nascondi** un percorso usando il checkbox nella lista.
- **Centra la mappa** su un percorso cliccando sul suo nome.
- **Elimina** un singolo percorso con il pulsante ✕.
- **Cancella tutti** i percorsi con il pulsante dedicato.

### 3. Esportare i percorsi

- **GeoJSON** – utile per analisi GIS, QGIS, ArcGIS, ecc.
- **GPX** – formato standard per dispositivi GPS, Strava, Garmin, Komoot, ecc.

### 4. Recuperare una bozza

Se durante la registrazione perdi la connessione o chiudi la pagina, i dati non vanno persi:
- L’app salva automaticamente ogni 5 punti.
- All’avvio, se esiste una bozza, viene visualizzato il pulsante **“📂 Riprendi bozza”**.
- Cliccaci per riprendere il percorso esattamente da dove lo avevi lasciato.

---

## 🛠 Come modificare l'app (per sviluppatori)

### Struttura dati

I percorsi sono salvati in `localStorage` con la chiave `mappa_bianca_tracks`. Ogni traccia ha questa struttura:

```javascript
{
  id: "uuid",
  name: "Nome del percorso",
  timestamp: "2026-06-27T10:30:00.000Z",
  points: [
    { lat: 45.618771, lng: 10.824897 },
    { lat: 45.618800, lng: 10.825000 }
  ],
  distance: 125.34,   // metri
  color: "#e31a23",
  startMarker: { lat: 45.618771, lng: 10.824897 },
  endMarker: { lat: 45.620000, lng: 10.830000 }
}

Cambiare il centro predefinito della mappa

Nel file index.html, cerca la riga:
javascript

const map = L.map('map', {
  center: [45.620, 10.830],
  zoom: 14,
});

Modifica le coordinate e il livello di zoom.
Cambiare i colori dei percorsi

Nella funzione generateColor(), modifica la palette:
javascript

const palette = [
  '#e31a23', '#1e90ff', '#ff8c00', '#2ecc71',
  '#9b59b6', '#f1c40f', '#e67e22', '#1abc9c'
];

Personalizzare l’intervallo di salvataggio automatico

Cerca la costante AUTOSAVE_INTERVAL:
javascript

const AUTOSAVE_INTERVAL = 5; // ogni 5 punti

Cambiare il timeout della geolocalizzazione

Cerca LOCATION_TIMEOUT_MS:
javascript

const LOCATION_TIMEOUT_MS = 10000; // 10 secondi

🧪 Debug per sviluppatori

    Coordinate cliccando sulla mappa: la mappa stampa in console (F12) le coordinate nel formato [lat, lng].

    Stato della cache: apri la console e digita localStorage.getItem('mappa_bianca_tracks') per vedere i percorsi salvati.

    Bozza: localStorage.getItem('mappa_bianca_draft') per vedere la bozza corrente.

📄 Licenza e crediti

    Mappa Bianca Maker – progetto open source realizzato da Vival18.

    Leaflet – libreria open source (BSD 2-Clause).

    OpenStreetMap – tile layer (© contributori OSM).

🤝 Contributi

Se hai suggerimenti, segnalazioni di bug o vuoi contribuire allo sviluppo, apri una Issue o una Pull Request sul repository GitHub.
📬 Contatti

    GitHub: Vival18

    Repository: mappa-bianca-maker