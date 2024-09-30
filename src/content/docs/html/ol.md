---
title: <ol>
description: HTML <ol> tag
---

### HTML `<ol>` Tag

`<ol>` tag u HTML-u se koristi za kreiranje numerisanih lista. Ovaj element omogućava prikazivanje stavki u određenom redoslijedu, što je korisno za prikazivanje koraka, rangiranja ili drugih sekvencijalnih informacija.

#### Osnovna sintaksa

```html
<ol>
  <li>Prva stavka</li>
  <li>Druga stavka</li>
  <li>Treća stavka</li>
</ol>
```

- **`<ol>`**: Kreira numerisanu listu.
- **`<li>`**: Definira stavku liste.

### Karakteristike `<ol>` taga

1. **Numerisane liste**:
   `<ol>` tag kreira numerisane liste gdje su stavke automatski numerisane.

2. **Redoslijed**:
   Stavke unutar `<ol>` liste su prikazane u određenom redoslijedu, što je korisno za prikazivanje koraka ili rangiranja.

3. **Fleksibilnost**:
   `<ol>` tag može sadržavati različite tipove sadržaja, uključujući tekst, linkove, slike, i druge HTML elemente.

### Primjeri korištenja `<ol>` taga

1. **Osnovna numerisana lista:**

   ```html
   <ol>
     <li>Prva stavka</li>
     <li>Druga stavka</li>
     <li>Treća stavka</li>
   </ol>
   ```

2. **Lista sa linkovima:**

   ```html
   <ol>
     <li><a href="#prva">Prva stavka</a></li>
     <li><a href="#druga">Druga stavka</a></li>
     <li><a href="#treca">Treća stavka</a></li>
   </ol>
   ```

3. **Ugniježđena lista:**
   ```html
   <ol>
     <li>Prva stavka</li>
     <li>
       Druga stavka
       <ol>
         <li>Podstavka 1</li>
         <li>Podstavka 2</li>
       </ol>
     </li>
     <li>Treća stavka</li>
   </ol>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `<ol>` taga poboljšava pristupačnost jer omogućava korisnicima koji koriste čitače ekrana da lakše prepoznaju i koriste numerisane liste.
- **SEO**: Numerisane liste unutar `<ol>` taga mogu poboljšati SEO jer pretraživači prepoznaju važnost tih stavki za strukturu sadržaja.
- **Stilizacija**: `<ol>` tag se može stilizirati pomoću CSS-a kako bi se vizualno uskladio sa dizajnom stranice.

### Zaključak

`<ol>` tag je ključan element za kreiranje numerisanih lista na web stranicama. Omogućava prikazivanje stavki u određenom redoslijedu, poboljšava pristupačnost i SEO, te se može fleksibilno stilizirati pomoću CSS-a.
