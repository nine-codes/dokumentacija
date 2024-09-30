---
title: <ul>
description: HTML <ul> tag
---

### HTML `<ul>` Tag

`<ul>` tag u HTML-u se koristi za kreiranje nenumerisanih lista. Ovaj element omogućava prikazivanje stavki sa oznakama (bullet points), što je korisno za prikazivanje neuređenih informacija.

#### Osnovna sintaksa

```html
<ul>
  <li>Prva stavka</li>
  <li>Druga stavka</li>
  <li>Treća stavka</li>
</ul>
```

- **`<ul>`**: Kreira nenumerisanu listu.
- **`<li>`**: Definira stavku liste.

### Karakteristike `<ul>` taga

1. **Nenumerisane liste**:
   `<ul>` tag kreira nenumerisane liste gdje su stavke označene oznakama (bullet points).

2. **Neuređene informacije**:
   Stavke unutar `<ul>` liste su prikazane bez određenog redoslijeda, što je korisno za prikazivanje neuređenih informacija.

3. **Fleksibilnost**:
   `<ul>` tag može sadržavati različite tipove sadržaja, uključujući tekst, linkove, slike, i druge HTML elemente.

### Primjeri korištenja `<ul>` taga

1. **Osnovna nenumerisana lista:**

   ```html
   <ul>
     <li>Prva stavka</li>
     <li>Druga stavka</li>
     <li>Treća stavka</li>
   </ul>
   ```

2. **Lista sa linkovima:**

   ```html
   <ul>
     <li><a href="#prva">Prva stavka</a></li>
     <li><a href="#druga">Druga stavka</a></li>
     <li><a href="#treca">Treća stavka</a></li>
   </ul>
   ```

3. **Ugniježđena lista:**
   ```html
   <ul>
     <li>Prva stavka</li>
     <li>
       Druga stavka
       <ul>
         <li>Podstavka 1</li>
         <li>Podstavka 2</li>
       </ul>
     </li>
     <li>Treća stavka</li>
   </ul>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `<ul>` taga poboljšava pristupačnost jer omogućava korisnicima koji koriste čitače ekrana da lakše prepoznaju i koriste nenumerisane liste.
- **SEO**: Nenumerisane liste unutar `<ul>` taga mogu poboljšati SEO jer pretraživači prepoznaju važnost tih stavki za strukturu sadržaja.
- **Stilizacija**: `<ul>` tag se može stilizirati pomoću CSS-a kako bi se vizualno uskladio sa dizajnom stranice.

### Zaključak

`<ul>` tag je ključan element za kreiranje nenumerisanih lista na web stranicama. Omogućava prikazivanje stavki bez određenog redoslijeda, poboljšava pristupačnost i SEO, te se može fleksibilno stilizirati pomoću CSS-a.
