---
title: <iframe>
description: HTML <iframe> tag
---

### HTML `<iframe>` Tag

`<iframe>` tag u HTML-u se koristi za umetanje okvira unutar stranice koji može prikazivati drugi HTML dokument. Ovaj tag omogućava prikazivanje sadržaja iz drugih izvora unutar trenutne stranice.

#### Osnovna sintaksa

```html
<iframe src="https://www.example.com" width="600" height="400"></iframe>
```

- **`src`**: Atribut koji specificira URL sadržaja koji će biti prikazan unutar okvira.
- **`width`**: Atribut koji specificira širinu okvira.
- **`height`**: Atribut koji specificira visinu okvira.

### Karakteristike `<iframe>` taga

1. **Umetanje sadržaja**:
   `<iframe>` tag se koristi za umetanje sadržaja iz drugih izvora unutar trenutne stranice.

2. **Stilizacija**:
   Preglednici obično prikazuju sadržaj unutar `<iframe>` taga kao ugrađeni okvir, ali stilizacija može biti prilagođena pomoću CSS-a.

### Primjeri korištenja `<iframe>` taga

1. **Umetanje vanjskog sadržaja:**

   ```html
   <iframe src="https://www.example.com" width="600" height="400"></iframe>
   ```

2. **Umetanje YouTube videa:**
   ```html
   <iframe
     width="560"
     height="315"
     src="https://www.youtube.com/embed/dQw4w9WgXcQ"
     frameborder="0"
     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
     allowfullscreen
   ></iframe>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje atributa `title` može poboljšati pristupačnost jer pruža opis sadržaja unutar okvira.
- **Stilizacija**: Okviri unutar `<iframe>` taga mogu se dodatno stilizirati pomoću CSS-a kako bi se vizualno uskladili sa dizajnom stranice.

### Zaključak

`<iframe>` tag je koristan za umetanje sadržaja iz drugih izvora unutar HTML dokumenata. Pravilno korištenje ovog taga poboljšava funkcionalnost i interaktivnost na web stranicama.
