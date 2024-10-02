---
title: <output>
description: HTML <output> tag
---

### HTML `<output>` Tag

`<output>` tag u HTML-u se koristi za prikazivanje rezultata izračuna ili akcija koje su korisnici izvršili unutar forme. Ovaj tag omogućava prikazivanje dinamičkih rezultata unutar HTML dokumenta.

#### Osnovna sintaksa

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="a" value="50" /> +
  <input type="number" id="b" value="50" />
  = <output name="result" for="a b">100</output>
</form>
```

- **`name`**: Atribut koji specificira ime `<output>` elementa.
- **`for`**: Atribut koji specificira povezana `id` polja unutar forme.

### Karakteristike `<output>` taga

1. **Prikazivanje rezultata**:
   `<output>` tag se koristi za prikazivanje rezultata izračuna ili akcija koje su korisnici izvršili unutar forme.

2. **Pristupačnost**:
   Korištenje atributa `name` i `for` poboljšava pristupačnost i korisničko iskustvo.

### Primjeri korištenja `<output>` taga

1. **Prikazivanje rezultata izračuna:**

   ```html
   <form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
     <input type="range" id="a" value="50" /> +
     <input type="number" id="b" value="50" />
     = <output name="result" for="a b">100</output>
   </form>
   ```

2. **Prikazivanje rezultata akcije:**
   ```html
   <form oninput="result.value=parseInt(x.value)*parseInt(y.value)">
     <input type="number" id="x" value="5" /> *
     <input type="number" id="y" value="10" />
     = <output name="result" for="x y">50</output>
   </form>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje atributa `name` i `for` poboljšava pristupačnost i korisničko iskustvo.
- **Stilizacija**: `<output>` element može se dodatno stilizirati pomoću CSS-a kako bi se vizualno uskladio sa dizajnom stranice.

### Zaključak

`<output>` tag je koristan za prikazivanje rezultata izračuna ili akcija unutar HTML dokumenata. Pravilno korištenje ovog taga poboljšava čitljivost i razumijevanje dinamičkih rezultata na web stranicama.

```

Nadam se da će ova datoteka biti korisna. Ako imate dodatnih zahtjeva ili pitanja, slobodno ih postavite!
```
