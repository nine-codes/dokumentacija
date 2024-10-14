---
title: background-origin
description: CSS Svojstvo background-origin
---

### CSS Svojstvo `background-origin`

CSS Svojstvo `background-origin` određuje odakle počinje pozadinska slika.

#### Osnovna sintaksa

```css
element {
  background-origin: [value];
}
```

- **`value`**: Može biti `border-box`, `padding-box`, ili `content-box`.

### Primjeri korištenja `background-origin` Svojstva

1. **Postavljanje porekla pozadine:**

   ```css
   div {
     background-origin: padding-box;
   }
   ```

### Dodatne informacije

- **Pristupačnost**: Poreklo pozadine može uticati na izgled, pa ga treba pažljivo birati.
- **Best practices**: Koristite `background-origin` da biste precizno kontrolisali pozicioniranje pozadinske slike.

### Zaključak

CSS Svojstvo `background-origin` omogućava kontrolu nad početnom tačkom pozadinske slike, što je korisno za precizne vizuelne efekte.
