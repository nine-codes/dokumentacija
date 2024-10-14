---
title: backface-visibility
description: CSS Svojstvo backface-visibility
---

### CSS Svojstvo `backface-visibility`

CSS Svojstvo `backface-visibility` određuje da li je zadnja strana elementa vidljiva kada je element rotiran.

#### Osnovna sintaksa

```css
element {
  backface-visibility: [value];
}
```

- **`value`**: Može biti `visible` ili `hidden`.

### Primjeri korištenja `backface-visibility` Svojstva

1. **Sakrivanje zadnje strane elementa:**

   ```css
   div {
     backface-visibility: hidden;
   }
   ```

### Dodatne informacije

- **Pristupačnost**: Sakrivanje zadnje strane može poboljšati korisničko iskustvo u slučajevima kada je element rotiran.
- **Best practices**: Koristite `backface-visibility` kada radite sa 3D transformacijama kako biste kontrolisali vidljivost zadnje strane elementa.

### Zaključak

CSS Svojstvo `backface-visibility` je korisno za kontrolu vidljivosti zadnje strane elementa tokom 3D transformacija, omogućavajući kreiranje čistijih i vizuelno privlačnijih efekata.
