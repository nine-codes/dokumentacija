---
title: <div>
description: HTML <div> tag
---

### HTML `<div>` Tag

`<div>` tag u HTML-u se koristi kao generički kontejner za grupiranje i strukturiranje sadržaja. Ovaj element nema specifično značenje sam po sebi, ali je izuzetno koristan za organizaciju i stiliziranje dijelova web stranice.

#### Osnovna sintaksa

```html
<div>
  <!-- Sadržaj ide ovdje -->
</div>
```

- **`<div>`**: Kreira blok-nivo kontejner za sadržaj.

### Karakteristike `<div>` taga

1. **Fleksibilnost**:
   `<div>` je izuzetno fleksibilan i može sadržavati bilo koji tip HTML sadržaja, uključujući druge `<div>` elemente.

2. **Blok-nivo element**:
   Po defaultu, `<div>` je blok-nivo element, što znači da zauzima cijelu širinu svog roditeljskog elementa i počinje u novom redu.

3. **Bez semantičkog značenja**:
   Sam `<div>` nema specifično semantičko značenje, za razliku od elemenata poput `<article>` ili `<section>`.

### Primjeri korištenja `<div>` taga

1. **Osnovno grupiranje sadržaja:**

   ```html
   <div>
     <h2>Naslov sekcije</h2>
     <p>Ovo je paragraf unutar div-a.</p>
   </div>
   ```

2. **Korištenje sa CSS klasama:**

   ```html
   <div class="container">
     <div class="header">
       <h1>Dobrodošli na našu stranicu</h1>
     </div>
     <div class="content">
       <p>Ovo je glavni sadržaj stranice.</p>
     </div>
   </div>
   ```

3. **Kreiranje layouta:**
   ```html
   <div id="page-wrapper">
     <div id="header">
       <!-- Sadržaj zaglavlja -->
     </div>
     <div id="main-content">
       <!-- Glavni sadržaj -->
     </div>
     <div id="footer">
       <!-- Sadržaj podnožja -->
     </div>
   </div>
   ```

### Dodatne informacije

- **Pristupačnost**: Iako je `<div>` koristan za strukturiranje, preporučuje se korištenje semantičkih elemenata (poput `<header>`, `<nav>`, `<main>`, `<article>`) gdje god je to moguće radi bolje pristupačnosti.
- **Performanse**: Prekomjerno korištenje `<div>` elemenata može dovesti do "div soup" - pretrpanog i teško održivog koda.
- **CSS manipulacija**: `<div>` elementi se često koriste kao "hooks" za CSS stiliziranje i JavaScript manipulaciju.

### Zaključak

`<div>` tag je fundamentalan alat u HTML-u za organizaciju i strukturiranje web stranica. Njegova fleksibilnost ga čini neophodnim u modernom web dizajnu, ali treba ga koristiti mudro, dajući prednost semantičkim elementima gdje god je to moguće za bolju strukturu i pristupačnost web stranice.
