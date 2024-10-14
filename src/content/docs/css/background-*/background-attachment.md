---
title: background-attachment
description: CSS Svojstvo background-attachment
---

### CSS Svojstvo `background-attachment`

CSS Svojstvo `background-attachment` određuje kako se pozadinska slika ponaša kada se skroluje stranica.

#### Osnovna sintaksa

```css
element {
  background-attachment: [value];
}
```

- **`value`**: Može biti `scroll`, `fixed`, ili `local`.

### Primjeri korištenja `background-attachment` Svojstva

1. **Fiksna pozadina:**

   ```css
   div {
     background-attachment: fixed;
   }
   ```

### Dodatne informacije

- **Pristupačnost**: Fiksne pozadine mogu poboljšati vizuelni izgled, ali ih treba koristiti pažljivo kako ne bi ometale korisnike.
- **Best practices**: Koristite `background-attachment` da biste kontrolisali ponašanje pozadinske slike tokom skrolovanja.

### Zaključak

CSS Svojstvo `background-attachment` omogućava kontrolu nad ponašanjem pozadinske slike tokom skrolovanja, što je korisno za kreiranje dinamičnih vizuelnih efekata.
