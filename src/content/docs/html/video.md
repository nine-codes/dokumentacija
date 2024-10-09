---
title: <video>
description: HTML <video> tag
---

### HTML `<video>` Tag

`<video>` tag u HTML-u se koristi za umetanje video sadržaja unutar web stranice. Omogućava reprodukciju video datoteka s kontrolama za korisnike.

#### Osnovna sintaksa

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  Vaš preglednik ne podržava video tag.
</video>
```

- **`<video>`**: Element koji obuhvata video sadržaj.
- **`controls`**: Atribut koji omogućava prikaz kontrola za reprodukciju videa.

### Karakteristike `<video>` taga

1. **Umetanje video sadržaja**:
   `<video>` tag omogućava umetanje i reprodukciju video datoteka unutar HTML dokumenta.

2. **Podrška za više formata**:
   Korištenje `<source>` elemenata omogućava specificiranje više formata za video sadržaj.

### Primjeri korištenja `<video>` taga

1. **Osnovni video s kontrolama:**

   ```html
   <video controls>
     <source src="video.mp4" type="video/mp4" />
     Vaš preglednik ne podržava video tag.
   </video>
   ```

2. **Video s više formata:**
   ```html
   <video controls>
     <source src="video.mp4" type="video/mp4" />
     <source src="video.ogg" type="video/ogg" />
     Vaš preglednik ne podržava video tag.
   </video>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje atributa `controls` poboljšava pristupačnost, omogućavajući korisnicima kontrolu nad reprodukcijom videa.
- **Stilizacija**: Video element može se stilizirati pomoću CSS-a za prilagodbu izgleda.

### Zaključak

`<video>` tag je ključan za umetanje i reprodukciju video sadržaja unutar HTML dokumenata. Pravilno korištenje ovog taga poboljšava korisničko iskustvo i funkcionalnost web stranica.
