---
title: <summary>
description: HTML <summary> tag
---

### HTML `<summary>` Tag

`<summary>` tag u HTML-u se koristi za definiranje vidljivog naslova za `<details>` element. Ovaj tag se obično koristi za prikazivanje naslova koji korisnici mogu kliknuti kako bi prikazali ili sakrili dodatne informacije.

#### Osnovna sintaksa

```html
<details>
  <summary>Kliknite ovdje za više informacija</summary>
  <p>Ovo je dodatni sadržaj koji se prikazuje kada kliknete na summary.</p>
</details>
```

- **`<summary>`**: Definira vidljivi naslov za `<details>` element.

### Karakteristike `<summary>` taga

1. **Vidljivi naslov**:
   `<summary>` tag se koristi za definiranje vidljivog naslova za `<details>` element.

2. **Interaktivnost**:
   Preglednici obično prikazuju `<summary>` element s malom strelicom koja pokazuje da se može kliknuti za prikazivanje ili sakrivanje sadržaja.

### Primjeri korištenja `<summary>` taga

1. **Vidljivi naslov za dodatne informacije:**

   ```html
   <details>
     <summary>Kliknite ovdje za više informacija</summary>
     <p>Ovo je dodatni sadržaj koji se prikazuje kada kliknete na summary.</p>
   </details>
   ```

2. **Vidljivi naslov unutar liste:**
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

- **Pristupačnost**: Korištenje `<summary>` taga poboljšava pristupačnost jer omogućava korisnicima da prikažu ili sakriju dodatne informacije.
- **Stilizacija**: Elementi unutar `<summary>` taga mogu se dodatno stilizirati pomoću CSS-a kako bi se vizualno uskladili sa dizajnom stranice.

### Zaključak

`<summary>` tag je koristan za definiranje vidljivog naslova za `<details>` element unutar HTML dokumenata. Pravilno korištenje ovog taga poboljšava čitljivost i organizaciju sadržaja na web stranicama.
