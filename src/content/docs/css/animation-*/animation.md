---
title: animation
description: CSS Svojstvo animation
---

### CSS Svojstvo `animation`

CSS Svojstvo `animation` omogućava definisanje animacija za HTML elemente. Ovo svojstvo je skraćeno svojstvo koje kombinuje nekoliko animacionih svojstava u jedno.

#### Osnovna sintaksa

```css
element {
  animation: [name] [duration] [timing-function] [delay] [iteration-count]
    [direction] [fill-mode] [play-state];
}
```

- **`name`**: Ime animacije definisano pomoću `@keyframes`.
- **`duration`**: Trajanje animacije.
- **`timing-function`**: Funkcija vremena animacije.
- **`delay`**: Kašnjenje prije početka animacije.
- **`iteration-count`**: Broj ponavljanja animacije.
- **`direction`**: Smjer animacije.
- **`fill-mode`**: Kako animacija primjenjuje stilove prije i poslije izvršavanja.
- **`play-state`**: Stanje animacije (pokrenuto ili pauzirano).

### Primjeri korištenja `animation` Svojstva

1. **Osnovna animacija:**

   ```css
   div {
     animation: slide 3s ease-in-out infinite;
   }
   ```

### Dodatne informacije

- **Pristupačnost**: Animacije mogu poboljšati korisničko iskustvo, ali ih treba koristiti pažljivo kako ne bi ometale korisnike.
- **Best practices**: Koristite animacije da poboljšate interaktivnost i vizuelnu privlačnost stranice.

### Zaključak

CSS Svojstvo `animation` je moćan alat za dodavanje dinamičkih efekata na web stranice. Njegova fleksibilnost omogućava kreiranje složenih animacija sa minimalnim kodom.
