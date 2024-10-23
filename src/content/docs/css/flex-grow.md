---
title: flex-grow
description: CSS Svojstvo flex-grow
---

### CSS Svojstvo `flex-grow`

CSS Svojstvo `flex-grow` određuje koliko fleksibilni element može da raste u odnosu na druge fleksibilne elemente unutar istog kontejnera.

#### Osnovna sintaksa

```css
element {
  flex-grow: [number];
}
```

- **`number`**: Pozitivna vrednost koja određuje faktor rasta (npr. `0`, `1`, `2`).

### Primjeri korištenja `flex-grow` Svojstva

1. **Element sa faktorom rasta 1:**

   ```css
   .item {
     flex-grow: 1;
   }
   ```

2. **Element bez rasta:**

   ```css
   .item {
     flex-grow: 0;
   }
   ```

### Dodatne informacije

- **Pristupačnost**: Pravilno korišćenje `flex-grow` svojstva može poboljšati vizuelni izgled i korisničko iskustvo.
- **Best practices**: Koristite `flex-grow` da biste optimizovali raspored elemenata u fleksibilnim kontejnerima.

### Zaključak

CSS Svojstvo `flex-grow` je moćan alat za kontrolu rasta fleksibilnih elemenata unutar kontejnera, omogućavajući kreiranje raznovrsnih i prilagodljivih rasporeda.
