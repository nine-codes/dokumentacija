---
title: <img>
description: HTML <img> tag
---

### HTML `<img>` Tag

`<img>` tag u HTML-u se koristi za ugradnju slika na web stranicu. Ovaj element omogućava prikazivanje slika iz različitih izvora, uključujući lokalne datoteke i URL-ove.

#### Osnovna sintaksa

```html
<img src="slika.jpg" alt="Opis slike" />
```

- **`<img>`**: Ugrađuje sliku na web stranicu.
- **`src`**: URL ili putanja do slike.
- **`alt`**: Alternativni tekst koji se prikazuje ako slika nije dostupna.

### Karakteristike `<img>` taga

1. **Prikaz slika**:
   `<img>` tag omogućava prikazivanje slika na web stranici, što poboljšava vizualni izgled i korisničko iskustvo.

2. **Alternativni tekst**:
   `alt` atribut pruža opis slike koji se prikazuje ako slika nije dostupna ili za korisnike koji koriste čitače ekrana.

3. **Različiti formati**:
   `<img>` tag podržava različite formate slika, uključujući JPEG, PNG, GIF, i SVG.

### Primjeri korištenja `<img>` taga

1. **Osnovna slika:**

   ```html
   <img src="slika.jpg" alt="Opis slike" />
   ```

2. **Slika sa specificiranim dimenzijama:**

   ```html
   <img src="slika.jpg" alt="Opis slike" width="300" height="200" />
   ```

3. **Slika iz URL-a:**
   ```html
   <img src="https://www.primjer.com/slika.jpg" alt="Opis slike" />
   ```

### Dodatne informacije

- **Pristupačnost**: Uvijek koristite `alt` atribut za pružanje alternativnog teksta koji opisuje sadržaj slike.
- **Performanse**: Optimizirajte slike za web kako biste smanjili vrijeme učitavanja stranice.
- **Responsive slike**: Koristite `srcset` i `sizes` atribute za pružanje različitih verzija slike za različite veličine ekrana.

### Zaključak

`<img>` tag je osnovni element za ugradnju slika na web stranice. Pravilno korištenje ovog taga poboljšava vizualni izgled stranice, pristupačnost i korisničko iskustvo. Optimizacija slika i korištenje alternativnog teksta su ključni za postizanje najboljih rezultata.
