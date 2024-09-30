---
title: <link>
description: HTML <link> tag
---

### HTML `<link>` Tag

`<link>` tag u HTML-u se koristi za povezivanje vanjskih resursa sa HTML dokumentom. Najčešće se koristi za povezivanje CSS stilova, ali može se koristiti i za druge resurse kao što su ikone i RSS feedovi.

#### Osnovna sintaksa

```html
<link rel="stylesheet" href="stilovi.css" />
```

- **`<link>`**: Povezuje vanjski resurs sa HTML dokumentom.
- **`rel`**: Definiše odnos između trenutnog dokumenta i povezanog resursa.
- **`href`**: URL ili putanja do vanjskog resursa.

### Karakteristike `<link>` taga

1. **Povezivanje CSS stilova**:
   Najčešća upotreba `<link>` taga je za povezivanje vanjskih CSS stilova sa HTML dokumentom.

2. **Povezivanje ikona**:
   `<link>` tag se može koristiti za povezivanje ikona koje se prikazuju u pregledniku, kao što su faviconi.

3. **Povezivanje drugih resursa**:
   `<link>` tag može povezivati različite vrste resursa, uključujući RSS feedove, prečice, i druge metapodatke.

### Primjeri korištenja `<link>` taga

1. **Povezivanje CSS stilova:**

   ```html
   <link rel="stylesheet" href="stilovi.css" />
   ```

2. **Povezivanje favicona:**

   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon" />
   ```

3. **Povezivanje RSS feeda:**
   ```html
   <link
     rel="alternate"
     type="application/rss+xml"
     title="RSS Feed"
     href="feed.xml"
   />
   ```

### Dodatne informacije

- **Performanse**: Povezivanje vanjskih CSS stilova pomoću `<link>` taga može poboljšati performanse stranice jer omogućava keširanje stilova.
- **SEO**: Korištenje `<link>` taga za povezivanje resursa kao što su RSS feedovi može poboljšati SEO i omogućiti korisnicima da se pretplate na sadržaj.
- **Pristupačnost**: Povezivanje vanjskih resursa pomoću `<link>` taga može poboljšati pristupačnost stranice jer omogućava bolje organiziranje i strukturiranje resursa.

### Zaključak

`<link>` tag je ključan element za povezivanje vanjskih resursa sa HTML dokumentom. Najčešće se koristi za povezivanje CSS stilova, ali može se koristiti i za druge resurse kao što su ikone i RSS feedovi. Pravilno korištenje ovog taga poboljšava performanse, SEO i pristupačnost web stranica.
