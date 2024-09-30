---
title: <label>
description: HTML <label> tag
---

### HTML `<label>` Tag

`<label>` tag u HTML-u se koristi za povezivanje teksta sa unosnim poljem u formularu. Ovaj element poboljšava pristupačnost jer omogućava korisnicima da kliknu na tekst etikete kako bi fokusirali odgovarajuće unosno polje.

#### Osnovna sintaksa

```html
<label for="ime">Ime:</label> <input type="text" id="ime" name="ime" />
```

- **`<label>`**: Kreira etiketu za unosno polje.
- **`for`**: Atribut koji povezuje etiketu sa unosnim poljem putem `id` atributa.

### Karakteristike `<label>` taga

1. **Povezivanje sa unosnim poljem**:
   Korištenjem `for` atributa, `<label>` tag se povezuje sa unosnim poljem koje ima odgovarajući `id` atribut. Klikom na etiketu, fokus se prebacuje na povezano unosno polje.

2. **Pristupačnost**:
   `<label>` tag poboljšava pristupačnost formulara jer omogućava korisnicima koji koriste čitače ekrana da lakše identificiraju unosna polja.

3. **Fleksibilnost**:
   `<label>` tag može biti postavljen prije ili poslije unosnog polja, ili može obuhvatiti unosno polje.

### Primjeri korištenja `<label>` taga

1. **Etiketa prije unosnog polja:**

   ```html
   <label for="ime">Ime:</label> <input type="text" id="ime" name="ime" />
   ```

2. **Etiketa poslije unosnog polja:**

   ```html
   <input type="text" id="ime" name="ime" /> <label for="ime">Ime:</label>
   ```

3. **Etiketa koja obuhvata unosno polje:**
   ```html
   <label>
     Ime:
     <input type="text" name="ime" />
   </label>
   ```

### Dodatne informacije

- **Pristupačnost**: Uvijek koristite `<label>` tag za unosna polja kako biste poboljšali pristupačnost formulara.
- **CSS stilizacija**: `<label>` tag se može stilizirati pomoću CSS-a kako bi se vizualno uskladio sa dizajnom stranice.
- **Validacija**: Korištenje `<label>` taga može pomoći u validaciji podataka jer jasno označava koja unosna polja su obavezna.

### Zaključak

`<label>` tag je ključan element za kreiranje pristupačnih i korisnički prijatnih formulara na web stranicama. Omogućava povezivanje teksta sa unosnim poljima, poboljšava pristupačnost i olakšava korisnicima interakciju sa formularima.
