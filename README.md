# DidaFlow Website

![DidaFlow Logo](https://img.shields.io/badge/DidaFlow-Coming%20Soon-blue?style=for-the-badge&logo=data:image/svg+xml;base64,...)

> La piattaforma EdTech che trasforma il modo di fare formazione

## 🎯 Panoramica

DidaFlow è una piattaforma EdTech innovativa dedicata agli enti formativi di ogni tipo. Offriamo strumenti avanzati per la creazione di percorsi formativi efficaci, la collaborazione tra formatori e l'analisi dei risultati.

## ✨ Caratteristiche della Landing Page

- 🎨 **Design Moderno**: Interface elegante con animazioni fluide
- 📱 **Responsive**: Perfetta su desktop, tablet e mobile  
- 🚀 **Performance**: Vanilla JS per velocità massima
- 📧 **Early Access**: Form di iscrizione per accesso anticipato
- 🎭 **Animazioni**: Effetti CSS coinvolgenti senza librerie esterne

## 🛠️ Tecnologie Utilizzate

- **HTML5** - Struttura semantica
- **CSS3** - Design moderno con Grid/Flexbox
- **Vanilla JavaScript** - Interattività senza dipendenze
- **Google Fonts** - Tipografia Inter

## 🚀 Deploy

### GitHub Pages (Raccomandato)
1. Vai su Settings > Pages
2. Seleziona "Deploy from a branch"
3. Scegli "main" branch
4. Il sito sarà disponibile su: `https://[username].github.io/didaflow-website`

### Netlify
1. Connetti il repository a Netlify
2. Deploy automatico ad ogni push
3. Custom domain supportato

### Vercel
1. Importa il repository su Vercel
2. Deploy automatico configurato

## 📂 Struttura Progetto
```
didaflow-website/
├── index.html              # Landing page principale
├── README.md               # Documentazione
├── LICENSE                 # Licenza GNU GPL v3
├── .gitignore             # File da ignorare
└── assets/                # (opzionale per versioni future)
├── css/
├── js/
└── images/
```

## 🎨 Design System

### Colori Principali
- **Primary Blue**: `#3b82f6`
- **Secondary Cyan**: `#06b6d4` 
- **Dark Background**: `#0f172a`
- **Text**: `#ffffff` / `#94a3b8`

### Tipografia
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 📧 Integrazione Email

Il form di iscrizione è pronto per l'integrazione con:
- **Mailchimp**
- **ConvertKit** 
- **EmailJS**
- **Backend custom**

Sostituisci la funzione `handleEmailSubmit()` in `index.html` con la tua logica.

## 🔧 Personalizzazione

### Modificare i Contenuti
- Testi: cerca i commenti `<!-- CONTENT -->` in `index.html`
- Date: aggiorna la sezione "Lancio Previsto"
- Link social: modifica la sezione `.social-links`

### Aggiungere Analytics
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
````

