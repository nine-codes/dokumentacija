---
title: <script>
description: HTML <script> tag
---

### HTML `<script>` Tag

`<script>` tag u HTML-u se koristi za umetanje ili referenciranje skripti, kao što su JavaScript kodovi, unutar HTML dokumenta.

#### Osnovna sintaksa

```html
<script src="script.js"></script>
```

- **`src`**: Atribut koji specificira putanju do vanjske skripte.
- **Unutarnji JavaScript**: Skripte se mogu direktno umetnuti unutar `<script>` taga.

### Karakteristike `<script>` taga

1. **Umetanje skripti**:
   `<script>` tag omogućava umetanje JavaScript koda unutar HTML dokumenta.

2. **Vanjske skripte**:
   Korištenje `src` atributa omogućava referenciranje vanjskih JavaScript datoteka.

### Primjeri korištenja `<script>` taga

1. **Unutarnji JavaScript kod:**

   ```html
   <script>
     console.log('Hello, world!');
   </script>
   ```

2. **Vanjska JavaScript datoteka:**
   ```html
   <script src="script.js"></script>
   ```

### Dodatne informacije

- **Asinhrono učitavanje**: Atributi `async` i `defer` mogu se koristiti za kontrolu učitavanja skripti.
- **Stilizacija**: Skripte unutar `<script>` taga ne mogu se stilizirati pomoću CSS-a, ali mogu manipulirati DOM-om.

### Zaključak

`<script>` tag je ključan za dodavanje dinamičkog ponašanja i interaktivnosti na web stranicama. Pravilno korištenje ovog taga omogućava integraciju JavaScript koda unutar HTML dokumenata.
