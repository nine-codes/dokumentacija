---
title: <details>
description: HTML <details> tag
---

### HTML `<details>` Tag

`<details>` tag u HTML-u se koristi za kreiranje interaktivnih elemenata koji korisnicima omogućavaju da prikažu ili sakriju dodatne informacije. Ovaj tag se obično koristi zajedno sa `<summary>` tagom.

#### Osnovna sintaksa

```html
<details>
  <summary>Kliknite ovdje za više informacija</summary>
  <p>Ovo je dodatni sadržaj koji se prikazuje kada kliknete na summary.</p>
</details>
```

- **`<details>`**: Kreira interaktivni element za prikazivanje ili sakrivanje dodatnih informacija.
- **`<summary>`**: Definiše vidljivi naslov za `<details>` element.

### Karakteristike `<details>` taga

1. **Interaktivnost**:
   `<details>` tag omogućava korisnicima da prikažu ili sakriju dodatne informacije klikom na `<summary>` element.

2. **Stilizacija**:
   Preglednici obično prikazuju `<summary>` element s malom strelicom koja pokazuje da se može kliknuti za prikazivanje ili sakrivanje sadržaja.

### Primjeri korištenja `<details>` taga

1. **Interaktivni element za dodatne informacije:**

   ```html
   <details>
     <summary>Kliknite ovdje za više informacija</summary>
     <p>Ovo je dodatni sadržaj koji se prikazuje kada kliknete na summary.</p>
   </details>
   ```

2. **Interaktivni element unutar liste:**
   ```html
   <ul>
     <li>
       <details>
         <summary>Prva stavka</summary>
         <p>Ovo je dodatni sadržaj za prvu stavku.</p>
       </details>
     </li>
     <li>
       <details>
         <summary>Druga stavka</summary>
         <p>Ovo je dodatni sadržaj za drugu stavku.</p>
       </details>
     </li>
   </ul>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `<details>` i `<summary>` tagova poboljšava pristupačnost jer omogućava korisnicima da prikažu ili sakriju dodatne informacije.
- **Stilizacija**: Elementi unutar `<details>` taga mogu se dodatno stilizirati pomoću CSS-a kako bi se vizualno uskladili sa dizajnom stranice.

### Zaključak

`<details>` tag je koristan za kreiranje interaktivnih elemenata koji korisnicima omogućavaju da prikažu ili sakriju dodatne informacije unutar HTML dokumenata. Pravilno korištenje ovog taga poboljšava čitljivost i organizaciju sadržaja na web stranicama.
