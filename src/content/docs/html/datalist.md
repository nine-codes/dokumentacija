---
title: <datalist>
description: HTML <datalist> tag
---

### HTML `<datalist>` Tag

`<datalist>` tag u HTML-u se koristi za definiranje liste unaprijed definiranih opcija za `<input>` element. Ovaj tag se obično koristi za pružanje korisnicima mogućnosti izbora iz unaprijed definiranih vrijednosti.

#### Osnovna sintaksa

```html
<input list="browsers" name="browser" />
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Safari"></option>
  <option value="Edge"></option>
  <option value="Opera"></option>
</datalist>
```

- **`<datalist>`**: Definira listu unaprijed definiranih opcija za `<input>` element.

### Karakteristike `<datalist>` taga

1. **Unaprijed definirane opcije**:
   `<datalist>` tag se koristi za definiranje liste unaprijed definiranih opcija za `<input>` element.

2. **Stilizacija**:
   Preglednici obično prikazuju opcije unutar `<datalist>` taga kao padajuću listu kada korisnik počne unositi tekst u povezani `<input>` element.

### Primjeri korištenja `<datalist>` taga

1. **Definiranje liste pretraživača:**

   ```html
   <input list="browsers" name="browser" />
   <datalist id="browsers">
     <option value="Chrome"></option>
     <option value="Firefox"></option>
     <option value="Safari"></option>
     <option value="Edge"></option>
     <option value="Opera"></option>
   </datalist>
   ```

2. **Definiranje liste gradova:**
   ```html
   <input list="cities" name="city" />
   <datalist id="cities">
     <option value="Sarajevo"></option>
     <option value="Mostar"></option>
     <option value="Banja Luka"></option>
     <option value="Tuzla"></option>
     <option value="Zenica"></option>
   </datalist>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `<datalist>` taga poboljšava pristupačnost jer omogućava korisnicima izbor iz unaprijed definiranih opcija.
- **Stilizacija**: Opcije unutar `<datalist>` taga mogu se dodatno stilizirati pomoću CSS-a kako bi se vizualno uskladile sa dizajnom stranice.

### Zaključak

`<datalist>` tag je koristan za definiranje liste unaprijed definiranih opcija za `<input>` element unutar HTML dokumenata. Pravilno korištenje ovog taga poboljšava čitljivost i pristupačnost opcija na web stranicama.

```

Nadam se da će ova datoteka biti korisna. Ako imate dodatnih zahtjeva ili pitanja, slobodno ih postavite!
```
