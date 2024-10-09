---
title: <track>
description: HTML <track> tag
---

### HTML `<track>` Tag

`<track>` tag u HTML-u se koristi unutar `<video>` i `<audio>` elemenata za specificiranje tekstualnih zapisa, kao što su titlovi, opisi ili poglavlja.

#### Osnovna sintaksa

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track src="subtitles.vtt" kind="subtitles" srclang="en" label="English" />
</video>
```

- **`<track>`**: Element koji definira tekstualne zapise za medijski sadržaj.
- **`src`**: Atribut koji specificira putanju do datoteke s tekstualnim zapisima.
- **`kind`**: Atribut koji specificira vrstu tekstualnog zapisa (npr. `subtitles`, `captions`).
- **`srclang`**: Atribut koji definira jezik tekstualnog zapisa.
- **`label`**: Atribut koji pruža opis tekstualnog zapisa.

### Karakteristike `<track>` taga

1. **Podrška za tekstualne zapise**:
   `<track>` tag omogućava dodavanje titlova, opisa i drugih tekstualnih zapisa unutar medijskog sadržaja.

2. **Više vrsta zapisa**:
   Podržava različite vrste zapisa, uključujući titlove i opise.

### Dodatne informacije

- **Pristupačnost**: Korištenje `<track>` poboljšava pristupačnost medijskog sadržaja, omogućavajući korisnicima da prate sadržaj putem titlova ili opisa.
- **Stilizacija**: Tekstualni zapisi unutar `<track>` mogu se stilizirati pomoću CSS-a.

### Zaključak

`<track>` tag je ključan za dodavanje tekstualnih zapisa unutar medijskog sadržaja. Pravilno korištenje ovog taga poboljšava pristupačnost i korisničko iskustvo.
