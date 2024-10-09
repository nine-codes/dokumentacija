---
title: <input type="search>
description: HTML <input type="search> tag
---

### HTML `<input type="search">` Tag

`<input type="search">` tag u HTML-u se koristi za unos pretrage unutar formulara. Ovaj tip unosa omogućava korisnicima da unesu tekstualne upite za pretragu.

#### Osnovna sintaksa

```html
<input type="search" name="search" placeholder="Pretraži..." />
```

- **`type="search"`**: Specificira da je unos namijenjen za pretragu.
- **`name`**: Atribut koji daje ime unosu, često korišteno za identifikaciju podataka na serveru.
- **`placeholder`**: Atribut koji pruža tekstualni vodič unutar polja za unos.

### Karakteristike `<input type="search">` taga

1. **Unos pretrage**:
   Omogućava korisnicima unos tekstualnih upita za pretragu.

2. **Stilizacija**:
   Može se stilizirati pomoću CSS-a kako bi se vizualno uskladio sa dizajnom stranice.

### Primjeri korištenja `<input type="search">` taga

1. **Osnovni unos pretrage:**

   ```html
   <input type="search" name="search" placeholder="Pretraži..." />
   ```

2. **Unos pretrage sa dodatnim atributima:**
   ```html
   <input
     type="search"
     name="search"
     placeholder="Pretraži..."
     aria-label="Pretraga"
   />
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje atributa `aria-label` može poboljšati pristupačnost za korisnike koji koriste čitače ekrana.
- **Validacija**: Može se koristiti zajedno sa JavaScript-om za validaciju unosa prije slanja podataka.

### Zaključak

`<input type="search">` tag je koristan za omogućavanje korisnicima da unesu upite za pretragu unutar web stranica. Pravilno korištenje ovog taga poboljšava korisničko iskustvo i funkcionalnost pretrage.
