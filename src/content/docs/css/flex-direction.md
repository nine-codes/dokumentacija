---
title: flex-direction
description: CSS Svojstvo flex-direction
---

### CSS Svojstvo `flex-direction`

CSS Svojstvo `flex-direction` određuje smer u kojem se fleksibilni elementi postavljaju u fleksibilnom kontejneru.

#### Osnovna sintaksa

```css
element {
  flex-direction: [value];
}
```

- **`value`**: Može biti `row`, `row-reverse`, `column`, `column-reverse`.

### Primjeri korištenja `flex-direction` Svojstva

1. **Postavljanje smera fleksibilnih elemenata u red:**

   ```css
   .container {
     flex-direction: row;
   }
   ```

2. **Postavljanje smera fleksibilnih elemenata u kolonu:**

   ```css
   .container {
     flex-direction: column;
   }
   ```

### Dodatne informacije

- **Pristupačnost**: Smer fleksibilnih elemenata može poboljšati vizuelni izgled i strukturu, ali ga treba koristiti pažljivo kako ne bi ometao korisnike.
- **Best practices**: Koristite smer fleksibilnih elemenata da poboljšate vizuelnu strukturu stranice.

### Zaključak

CSS Svojstvo `flex-direction` je moćan alat za kontrolu smera postavljanja fleksibilnih elemenata u kontejnerima, omogućavajući kreiranje raznovrsnih rasporeda i dizajna.
