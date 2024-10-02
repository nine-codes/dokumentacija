---
title: <picture>
description: HTML <picture> tag
---

### HTML `<picture>` Tag

`<picture>` tag u HTML-u se koristi za prikazivanje slika sa različitim izvorima, omogućavajući preglednicima da odaberu najbolji izvor na osnovu veličine ekrana, rezolucije, ili drugih faktora. Ovaj tag omogućava prikazivanje responzivnih slika.

#### Osnovna sintaksa

```html
<picture>
  <source srcset="slika-velika.jpg" media="(min-width: 800px)" />
  <source srcset="slika-mala.jpg" media="(max-width: 799px)" />
  <img src="slika-default.jpg" alt="Opis slike" />
</picture>
```

- **`<source>`**: Definira različite izvore slike sa atributima `srcset` i `media`.
- **`<img>`**: Definira zadanu sliku koja će biti prikazana ako nijedan od izvora ne odgovara.

### Karakteristike `<picture>` taga

1. **Responzivne slike**:
   `<picture>` tag se koristi za prikazivanje slika sa različitim izvorima, omogućavajući preglednicima da odaberu najbolji izvor na osnovu veličine ekrana, rezolucije, ili drugih faktora.

2. **Pristupačnost**:
   Korištenje atributa `alt` unutar `<img>` taga poboljšava pristupačnost jer pruža alternativni tekst za sliku.

### Primjeri korištenja `<picture>` taga

1. **Prikazivanje responzivnih slika:**

   ```html
   <picture>
     <source srcset="slika-velika.jpg" media="(min-width: 800px)" />
     <source srcset="slika-mala.jpg" media="(max-width: 799px)" />
     <img src="slika-default.jpg" alt="Opis slike" />
   </picture>
   ```

2. **Prikazivanje slika sa različitim rezolucijama:**
   ```html
   <picture>
     <source srcset="slika-2x.jpg 2x" />
     <source srcset="slika-1x.jpg 1x" />
     <img src="slika-default.jpg" alt="Opis slike" />
   </picture>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje atributa `alt` unutar `<img>` taga poboljšava pristupačnost jer pruža alternativni tekst za sliku.
- **Stilizacija**: Slike unutar `<picture>` taga mogu se dodatno stilizirati pomoću CSS-a kako bi se vizualno uskladile sa dizajnom stranice.

### Zaključak

`<picture>` tag je koristan za prikazivanje responzivnih slika sa različitim izvorima unutar HTML dokumenata. Pravilno korištenje ovog taga poboljšava čitljivost, pristupačnost i vizualni prikaz slika na web stranicama.
