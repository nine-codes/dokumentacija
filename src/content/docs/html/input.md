---
title: <input>
description: HTML <input> tag
---

### HTML `<input>` Tag

`<input>` tag u HTML-u se koristi za kreiranje interaktivnih kontrola za unos podataka u formularima. Ovaj element podržava različite tipove unosa, uključujući tekst, lozinke, brojeve, datume, i datoteke.

#### Osnovna sintaksa

```html
<input type="text" name="ime" />
```

- **`<input>`**: Kreira unosno polje za podatke.
- **`type`**: Definiše tip unosa (text, password, number, date, file, itd.).
- **`name`**: Ime unosa, koristi se za identifikaciju podataka na serveru.

### Karakteristike `<input>` taga

1. **Različiti tipovi unosa**:
   `<input>` tag podržava različite tipove unosa, omogućavajući unos različitih vrsta podataka.

2. **Validacija podataka**:
   HTML5 pruža ugrađene atribute za validaciju podataka, kao što su `required`, `pattern`, `min`, i `max`.

3. **Interaktivnost**:
   `<input>` elementi su interaktivni i omogućavaju korisnicima unos podataka putem tastature ili miša.

### Primjeri korištenja `<input>` taga

1. **Tekstualno polje:**

   ```html
   <input type="text" name="ime" placeholder="Unesite ime" required />
   ```

2. **Polje za lozinku:**

   ```html
   <input
     type="password"
     name="lozinka"
     placeholder="Unesite lozinku"
     required
   />
   ```

3. **Polje za broj:**

   ```html
   <input type="number" name="godine" min="1" max="100" />
   ```

4. **Polje za datum:**

   ```html
   <input type="date" name="datum" />
   ```

5. **Polje za upload datoteka:**
   ```html
   <input type="file" name="datoteka" />
   ```

### Dodatne informacije

- **Pristupačnost**: Koristite `label` elemente za povezivanje s unosnim poljima kako biste poboljšali pristupačnost.
- **Sigurnost**: Za unos osjetljivih podataka, kao što su lozinke, koristite `type="password"` kako bi se podaci prikazivali kao tačke ili zvjezdice.
- **Validacija**: HTML5 pruža ugrađene atribute za validaciju podataka, ali se preporučuje dodatna validacija na serverskoj strani.

### Zaključak

`<input>` tag je ključan element za kreiranje interaktivnih formulara na web stranicama. Omogućava unos različitih tipova podataka i pruža ugrađene opcije za validaciju i sigurnost. Pravilno korištenje ovog taga poboljšava korisničko iskustvo i funkcionalnost web stranica.
