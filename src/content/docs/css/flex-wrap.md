---
title: flex-wrap
description: CSS Svojstvo flex-wrap
---

### CSS Svojstvo `flex-wrap`

CSS Svojstvo `flex-wrap` određuje da li se fleksibilni elementi u fleksibilnom kontejneru prelamaju u novi red ili kolonu.

#### Osnovna sintaksa

```css
element {
  flex-wrap: [value];
}
```

- **`value`**: Može biti `nowrap`, `wrap`, `wrap-reverse`.

### Primjeri korištenja `flex-wrap` Svojstva

1. **Prelamanje elemenata u novi red:**

   ```css
   .container {
     flex-wrap: wrap;
   }
   ```

2. **Bez prelamanja elemenata:**

   ```css
   .container {
     flex-wrap: nowrap;
   }
   ```

### Dodatne informacije

- **Pristupačnost**: Pravilno prelamanje elemenata može poboljšati vizuelni izgled i korisničko iskustvo.
- **Best practices**: Koristite `flex-wrap` da biste optimizovali raspored elemenata u fleksibilnim kontejnerima.

### Zaključak

CSS Svojstvo `flex-wrap` je moćan alat za kontrolu prelamanja elemenata u fleksibilnim kontejnerima, omogućavajući kreiranje raznovrsnih i prilagodljivih rasporeda.
