---
title: <form>
description: HTML <form> tag
---

### HTML `<form>` Tag

`<form>` tag u HTML-u se koristi za kreiranje formulara za unos podataka. Formulari omogućavaju korisnicima da unesu podatke koji se zatim šalju na server za obradu.

#### Osnovna sintaksa

```html
<form action="/submit" method="post">
  <!-- Elementi formulara idu ovdje -->
</form>
```

- **`<form>`**: Kreira formular za unos podataka.
- **`action`**: URL na koji se šalju podaci iz formulara.
- **`method`**: HTTP metoda za slanje podataka (`get` ili `post`).

### Karakteristike `<form>` taga

1. **Unos podataka**:
   Formulari omogućavaju korisnicima da unesu različite tipove podataka, uključujući tekst, brojeve, datume, i datoteke.

2. **Slanje podataka**:
   Podaci iz formulara se šalju na server za obradu putem `action` URL-a i specificirane HTTP metode.

3. **Validacija**:
   Formulari mogu uključivati ugrađenu validaciju podataka pomoću HTML atributa kao što su `required`, `pattern`, i `min`.

### Primjeri korištenja `<form>` taga

1. **Osnovni formular:**

   ```html
   <form action="/submit" method="post">
     <label for="name">Ime:</label>
     <input type="text" id="name" name="name" required />
     <button type="submit">Pošalji</button>
   </form>
   ```

2. **Formular sa različitim tipovima unosa:**

   ```html
   <form action="/submit" method="post">
     <label for="email">Email:</label>
     <input type="email" id="email" name="email" required />
     <label for="age">Godine:</label>
     <input type="number" id="age" name="age" min="1" max="100" />
     <label for="dob">Datum rođenja:</label>
     <input type="date" id="dob" name="dob" />
     <button type="submit">Pošalji</button>
   </form>
   ```

3. **Formular za upload datoteka:**
   ```html
   <form action="/upload" method="post" enctype="multipart/form-data">
     <label for="file">Izaberite datoteku:</label>
     <input type="file" id="file" name="file" />
     <button type="submit">Upload</button>
   </form>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `<label>` elemenata za povezivanje s unosnim poljima poboljšava pristupačnost formulara.
- **Sigurnost**: Preporučuje se korištenje `post` metode za slanje osjetljivih podataka kako bi se izbjeglo prikazivanje podataka u URL-u.
- **Validacija**: HTML5 pruža ugrađene atribute za validaciju podataka, ali se preporučuje dodatna validacija na serverskoj strani.

### Zaključak

`<form>` tag je ključan element za kreiranje interaktivnih i funkcionalnih formulara na web stranicama. Omogućava unos i slanje podataka na server, te pruža različite opcije za validaciju i sigurnost podataka.
