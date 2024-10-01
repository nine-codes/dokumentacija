---
title: <head>
description: HTML <head> tag
---

### HTML `<head>` Tag

`<head>` tag u HTML-u se koristi za označavanje zaglavlja dokumenta. Ovaj tag se obično koristi za uključivanje metapodataka, stilova, skripti, i drugih informacija koje nisu vidljive korisnicima, ali su važne za preglednike i pretraživače.

#### Osnovna sintaksa

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Naslov stranice</title>
    <meta charset="UTF-8" />
    <meta name="description" content="Opis stranice" />
    <meta name="keywords" content="HTML, CSS, JavaScript" />
    <meta name="author" content="Autor stranice" />
    <link rel="stylesheet" href="styles.css" />
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Dobrodošli na moju web stranicu</h1>
    <p>Ovo je paragraf unutar tijela dokumenta.</p>
  </body>
</html>
```

- **`<head>`**: Označava zaglavlje HTML dokumenta.

### Karakteristike `<head>` taga

1. **Zaglavlje dokumenta**:
   `<head>` tag se koristi za označavanje zaglavlja HTML dokumenta, gdje se obično uključuju metapodaci, stilovi, skripti, i druge informacije koje nisu vidljive korisnicima.

2. **Stilizacija**:
   Preglednici obično ne prikazuju sadržaj unutar `<head>` taga, ali stilizacija može biti prilagođena pomoću CSS-a za elemente unutar `<head>` taga, kao što su `<title>`, `<meta>`, `<link>`, i `<script>`.

### Primjeri korištenja `<head>` taga

1. **Osnovna struktura HTML dokumenta:**

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Naslov stranice</title>
       <meta charset="UTF-8" />
       <meta name="description" content="Opis stranice" />
       <meta name="keywords" content="HTML, CSS, JavaScript" />
       <meta name="author" content="Autor stranice" />
       <link rel="stylesheet" href="styles.css" />
       <script src="script.js"></script>
     </head>
     <body>
       <h1>Dobrodošli na moju web stranicu</h1>
       <p>Ovo je paragraf unutar tijela dokumenta.</p>
     </body>
   </html>
   ```

2. **Uključivanje vanjskih stilova i skripti:**
   ```html
   <head>
     <title>Naslov stranice</title>
     <link rel="stylesheet" href="styles.css" />
     <script src="script.js"></script>
   </head>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `<head>` taga poboljšava pristupačnost jer omogućava uključivanje metapodataka, stilova, skripti, i drugih informacija koje su važne za preglednike i pretraživače.
- **Stilizacija**: Elementi unutar `<head>` taga mogu se dodatno stilizirati pomoću CSS-a kako bi se vizualno uskladili sa dizajnom stranice.

### Zaključak

`<head>` tag je ključan za označavanje zaglavlja HTML dokumenta. Svi metapodaci, stilovi, skripti, i druge informacije koje nisu vidljive korisnicima, ali su važne za preglednike i pretraživače, nalaze se unutar ovog taga. Pravilno korištenje `<head>` taga poboljšava čitljivost i organizaciju informacija na web stranicama.

```

```
