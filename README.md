# Mappa Bianca – WebApp PWA per mappe interattive

**Versione:** 1.0  
**Autore:** Fabio Vivaldi  
**Licenza:** GPLv3  

Mappa Bianca è una **Progressive Web App (PWA)** installabile che visualizza una mappa interattiva con marker raggruppabili (clustering), filtri per tipologia, geolocalizzazione e funzionalità offline. I marker sono caricati da un file `markers.json`, facilmente esportabile dal plugin WordPress **ArchaeoMap** (o creato manualmente).

Ideale per: percorsi turistici, festival culturali, mappe di territorio, itinerari artistici.

---

## ✨ Funzionalità principali

- 🗺️ Mappa basata su **Leaflet** (OpenStreetMap)
- 📍 **Marker colorati** per tipologia (es. Storico, Religioso, Enogastronomico…)
- 🔍 **Clustering automatico** dei marker (zoom out)
- 🎛️ **Filtri dinamici** a bottoni (mostra/nasconde marker per categoria)
- 📌 **Popup informativi** con titolo, tipologia, immagine, estratto e link esterno
- 🧭 **Geolocalizzazione**: pulsante “La mia posizione” centra la mappa e mostra un marker blu con cerchio di accuratezza
- 📴 **Offline** (dopo prima visita): interfaccia, marker e legenda funzionano senza connessione (i tile richiedono rete o caching avanzato)
- ⬇️ **Installabile** su Android/Chrome/Edge come app nativa
- ♿ **Responsive** (funziona bene su smartphone e desktop)

---

## 🚀 Come usare la webapp (per utenti finali)

La webapp è già pubblicata su GitHub Pages (es. `https://vival18.github.io/mappa-bianca-webapp/`).

- **Navigare**: zoom, click sui marker, utilizzo dei filtri.
- **Geolocalizzazione**: clicca sul pulsante verde “📍 La mia posizione” (concedi il permesso).
- **Installare su telefono**:  
  - Android/Chrome: apri la webapp → menu browser → “Installa app” (o “Aggiungi a schermata Home”).  
  - iOS/Safari: “Condividi” → “Aggiungi a Home”.  
- **Offline**: dopo aver visitato la mappa online una volta, i file principali (index.html, markers.json, librerie) restano disponibili offline. I tile delle mappe vengono cachati durante la navigazione.

---

## 🛠️ Personalizzazione (per sviluppatori)

### 1. Cambiare i marker (file `markers.json`)

Il file `markers.json` deve contenere un array di oggetti con questa struttura:

```json
[
  {
    "title": "Forte di Rivoli",
    "lat": 45.574720,
    "lng": 10.818423,
    "tipologia": "Storico",
    "excerpt": "Descrizione breve...",
    "content": "Descrizione completa...",
    "thumbnail": "https://...",
    "permalink": "https://..."
  }
]