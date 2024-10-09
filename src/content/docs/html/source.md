---
title: <source>
description: HTML <source> tag
---

### HTML `<source>` Tag

`<source>` tag u HTML-u se koristi unutar `<picture>`, `<audio>`, i `<video>` elemenata za specificiranje različitih medijskih resursa. Omogućava preglednicima da odaberu najprikladniji resurs na osnovu atributa kao što su `media` i `type`.

#### Osnovna sintaksa

```html
<source src="media.mp4" type="video/mp4" />
```

- **`src`**: Atribut koji specificira putanju do medijskog resursa.
- **`type`**: Atribut koji specificira MIME tip resursa.
- **`media`**: Atribut koji definira medijski upit za odabir resursa.

### Karakteristike `<source>` taga

1. **Podrška za više formata**:
   `<source>` tag omogućava specificiranje više formata za medijski sadržaj, čime se osigurava kompatibilnost s različitim preglednicima.

2. **Medijski upiti**:
   Korištenje atributa `media` omogućava odabir resursa na osnovu karakteristika uređaja.

### Primjeri korištenja `<source>` taga

1. **Unutar `<video>` elementa:**

   ```html
   <video controls>
     <source src="video.mp4" type="video/mp4" />
     <source src="video.ogg" type="video/ogg" />
     Vaš preglednik ne podržava video tag.
   </video>
   ```

2. **Unutar `<audio>` elementa:**

   ```html
   <audio controls>
     <source src="audio.mp3" type="audio/mpeg" />
     <source src="audio.ogg" type="audio/ogg" />
     Vaš preglednik ne podržava audio tag.
   </audio>
   ```

3. **Unutar `<picture>` elementa:**

   ```html
   <picture>
     <source srcset="image.webp" type="image/webp" />
     <source srcset="image.jpg" type="image/jpeg" />
     <img src="image.jpg" alt="Opis slike" />
   </picture>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `<source>` taga omogućava preglednicima da odaberu najprikladniji resurs, poboljšavajući korisničko iskustvo.
- **Stilizacija**: `<source>` tag sam po sebi nije stiliziran, ali utječe na prikaz medijskog sadržaja.

### Zaključak

`<source>` tag je ključan za pružanje fleksibilnosti i kompatibilnosti medijskog sadržaja unutar HTML dokumenata. Pravilno korištenje ovog taga osigurava da se medijski sadržaj ispravno prikazuje na različitim uređajima i preglednicima.

```

Ovaj dokument pruža osnovne informacije o `<source>` tagu, njegovoj sintaksi, karakteristikama, primjerima korištenja, te dodatnim informacijama o pristupačnosti i stilizaciji.
```
