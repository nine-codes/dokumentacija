---
title: background-blend-mode
description: CSS Svojstvo background-blend-mode
---

### CSS Svojstvo `background-blend-mode`

CSS Svojstvo `background-blend-mode` određuje kako se pozadinske slike i boje kombinuju.

#### Osnovna sintaksa

```css
element {
  background-blend-mode: [value];
}
```

- **`value`**: Način kombinovanja (npr. `normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`).

### Primjeri korištenja `background-blend-mode` Svojstva

1. **Postavljanje načina kombinovanja pozadine:**

   ```css
   div {
     background-blend-mode: multiply;
   }
   ```

### Dodatne informacije

- **Pristupačnost**: Način kombinovanja pozadine može uticati na izgled, pa ga treba pažljivo birati.
- **Best practices**: Koristite `background-blend-mode` da biste kontrolisali način kombinovanja pozadinske slike i boje.

### Zaključak

CSS Svojstvo `background-blend-mode` omogućava kontrolu nad načinom kombinovanja pozadinske slike i boje, što je korisno za precizne vizuelne efekte.
