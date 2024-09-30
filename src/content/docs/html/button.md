---
title: <button>
description: HTML <button> tag
---

### HTML `<button>` Tag

`<button>` tag u HTML-u se koristi za kreiranje interaktivnih dugmadi na web stranici. Ova dugmad mogu biti korištena za različite akcije, kao što su slanje formulara, otvaranje dijaloga ili izvršavanje JavaScript funkcija.

#### Osnovna sintaksa

```html
<button type="button">Klikni me</button>
```

- **`<button>`**: Kreira interaktivno dugme.
- **`type`**: Definiše tip dugmeta (button, submit, reset).

### Karakteristike `<button>` taga

1. **Interaktivnost**:
   `<button>` elementi su po defaultu interaktivni i reaguju na klik miša ili pritisak tipke.

2. **Fleksibilnost sadržaja**:
   Za razliku od `<input type="button">`, `<button>` tag može sadržavati HTML elemente poput teksta, ikona ili slika.

3. **Tipovi dugmadi**:
   - `type="button"`: Standardno dugme bez predefinisane akcije.
   - `type="submit"`: Dugme za slanje formulara.
   - `type="reset"`: Dugme za resetovanje formulara.

### Primjeri korištenja `<button>` taga

1. **Standardno dugme:**

   ```html
   <button type="button">Klikni me</button>
   ```

2. **Dugme za slanje formulara:**

   ```html
   <form>
     <input type="text" name="ime" />
     <button type="submit">Pošalji</button>
   </form>
   ```

3. **Dugme s ikonom:**
   ```html
   <button type="button">
     <img src="ikona.png" alt="Ikona" /> Dugme s ikonom
   </button>
   ```

### Dodatni atributi

- **`disabled`**: Onemogućava dugme.
- **`name`**: Daje ime dugmetu, korisno u formularima.
- **`value`**: Definiše vrijednost koja se šalje s formularom.

### Zaključak

`<button>` tag je ključan element za kreiranje interaktivnih komponenti na web stranicama. Njegova fleksibilnost u pogledu sadržaja i različiti tipovi čine ga pogodnim za širok spektar upotreba, od jednostavnih akcija do kompleksnih interakcija u web aplikacijama.
