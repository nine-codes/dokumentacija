---
title: <fieldset>
description: HTML <fieldset> tag
---

### HTML `<fieldset>` Tag

`<fieldset>` tag u HTML-u se koristi za grupisanje povezanih elemenata unutar forme. Ovaj tag se obično koristi zajedno sa `<legend>` tagom za dodavanje naslova grupi elemenata.

#### Osnovna sintaksa

```html
<form>
  <fieldset>
    <legend>Osobni podaci</legend>
    <label for="name">Ime:</label>
    <input type="text" id="name" name="name" />
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" />
  </fieldset>
</form>
```

- **`<fieldset>`**: Grupira povezane elemente unutar forme.

### Karakteristike `<fieldset>` taga

1. **Grupisanje elemenata**:
   `<fieldset>` tag se koristi za grupisanje povezanih elemenata unutar forme.

2. **Stilizacija**:
   Preglednici obično prikazuju grupu elemenata unutar `<fieldset>` taga s okvirom oko njih kako bi se razlikovali od ostatka forme.

### Primjeri korištenja `<fieldset>` taga

1. **Grupisanje osobnih podataka:**

   ```html
   <form>
     <fieldset>
       <legend>Osobni podaci</legend>
       <label for="name">Ime:</label>
       <input type="text" id="name" name="name" />
       <label for="email">Email:</label>
       <input type="email" id="email" name="email" />
     </fieldset>
   </form>
   ```

2. **Grupisanje podataka o plaćanju:**
   ```html
   <form>
     <fieldset>
       <legend>Podaci o plaćanju</legend>
       <label for="cardNumber">Broj kartice:</label>
       <input type="text" id="cardNumber" name="cardNumber" />
       <label for="expiryDate">Datum isteka:</label>
       <input type="text" id="expiryDate" name="expiryDate" />
     </fieldset>
   </form>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `<fieldset>` taga poboljšava pristupačnost jer omogućava grupisanje povezanih elemenata unutar forme.
- **Stilizacija**: Grupa elemenata unutar `<fieldset>` taga može se dodatno stilizirati pomoću CSS-a kako bi se vizualno uskladila sa dizajnom stranice.

### Zaključak

`<fieldset>` tag je koristan za grupisanje povezanih elemenata unutar forme unutar HTML dokumenata. Pravilno korištenje ovog taga poboljšava čitljivost i organizaciju elemenata unutar formi na web stranicama.

```

Nadam se da će ova datoteka biti korisna. Ako imate dodatnih zahtjeva ili pitanja, slobodno ih postavite!
```
