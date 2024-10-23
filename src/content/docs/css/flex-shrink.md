---
title: flex-shrink
description: CSS Svojstvo flex-shrink
---

### CSS Svojstvo `flex-shrink`

CSS Svojstvo `flex-shrink` određuje koliko fleksibilni element može da se smanji u odnosu na druge fleksibilne elemente unutar istog kontejnera.

#### Osnovna sintaksa

```css
element {
  flex-shrink: [number];
}
```

- **`number`**: Pozitivna vrednost koja određuje faktor smanjenja (npr. `0`, `1`, `2`).

### Primjeri korištenja `flex-shrink` Svojstva

1. **Element sa faktorom smanjenja 1:**

   ```css
   .item {
     flex-shrink: 1;
   }
   ```

2. **Element bez smanjenja:**

   ```css
   .item {
     flex-shrink: 0;
   }
   ```

### Dodatne informacije

- **Pristupačnost**: Pravilno korišćenje `flex-shrink` svojstva može poboljšati vizuelni izgled i korisničko iskustvo.
- **Best practices**: Koristite `flex-shrink` da biste optimizovali raspored elemenata u fleksibilnim kontejnerima.

### Zaključak

CSS Svojstvo `flex-shrink` je moćan alat za kontrolu smanjenja fleksibilnih elemenata unutar kontejnera, omogućavajući kreiranje raznovrsnih i prilagodljivih rasporeda.
