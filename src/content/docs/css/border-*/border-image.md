---
title: border-image
description: CSS Svojstvo border-image
---

### CSS Svojstvo `border-image`

CSS Svojstvo `border-image` omogućava korišćenje slike kao granice elementa.

#### Osnovna sintaksa

```css
element {
  border-image: url('path/to/image.png') [slice] [width] [outset] [repeat];
}
```

- **`slice`**: Definiše kako se slika seče.
- **`width`**: Širina slike granice.
- **`outset`**: Koliko slika izlazi izvan granice.
- **`repeat`**: Kako se slika ponavlja (npr. `stretch`, `repeat`, `round`).

### Primjeri korištenja `border-image` Svojstva

1. **Korišćenje slike kao granice:**

   ```css
   div {
     border-image: url('border.png') 30 stretch;
   }
   ```

### Dodatne informacije

- **Pristupačnost**: Slike granica mogu poboljšati vizuelni izgled, ali ih treba koristiti pažljivo kako ne bi ometale korisnike.
- **Best practices**: Koristite slike granica da poboljšate vizuelnu privlačnost stranice.

### Zaključak

CSS Svojstvo `border-image` je moćan alat za dodavanje vizuelnih efekata na web stranice. Njegova fleksibilnost omogućava kreiranje složenih granica sa minimalnim kodom.
