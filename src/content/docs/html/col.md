---
title: <col>
description: HTML <col> tag
---

### HTML `<col>` Tag

`<col>` tag u HTML-u se koristi za definiranje atributa za jednu ili više kolona unutar `<colgroup>` elementa u tabeli. Ovaj tag se obično koristi za primjenu stilova ili atributa na cijele kolone.

#### Osnovna sintaksa

```html
<table>
  <colgroup>
    <col span="2" style="background-color: #f2f2f2" />
    <col style="background-color: #e6e6e6" />
  </colgroup>
  <tr>
    <th>Kolona 1</th>
    <th>Kolona 2</th>
    <th>Kolona 3</th>
  </tr>
  <tr>
    <td>Podatak 1</td>
    <td>Podatak 2</td>
    <td>Podatak 3</td>
  </tr>
</table>
```

- **`<col>`**: Definira atribute za jednu ili više kolona unutar tabele.

### Karakteristike `<col>` taga

1. **Definiranje atributa za kolone**:
   `<col>` tag se koristi za definiranje atributa za jednu ili više kolona unutar `<colgroup>` elementa u tabeli.

2. **Stilizacija**:
   Preglednici obično primjenjuju stilove ili atribute definirane unutar `<col>` taga na cijele kolone u tabeli.

### Primjeri korištenja `<col>` taga

1. **Primjena stilova na kolone:**

   ```html
   <table>
     <colgroup>
       <col span="2" style="background-color: #f2f2f2" />
       <col style="background-color: #e6e6e6" />
     </colgroup>
     <tr>
       <th>Kolona 1</th>
       <th>Kolona 2</th>
       <th>Kolona 3</th>
     </tr>
     <tr>
       <td>Podatak 1</td>
       <td>Podatak 2</td>
       <td>Podatak 3</td>
     </tr>
   </table>
   ```

2. **Definiranje širine kolona:**
   ```html
   <table>
     <colgroup>
       <col span="2" width="50%" />
       <col width="50%" />
     </colgroup>
     <tr>
       <th>Kolona 1</th>
       <th>Kolona 2</th>
       <th>Kolona 3</th>
     </tr>
     <tr>
       <td>Podatak 1</td>
       <td>Podatak 2</td>
       <td>Podatak 3</td>
     </tr>
   </table>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `<col>` taga poboljšava pristupačnost jer omogućava definiranje atributa za cijele kolone u tabeli.
- **Stilizacija**: Stilovi ili atributi definirani unutar `<col>` taga mogu se dodatno prilagoditi pomoću CSS-a kako bi se vizualno uskladili sa dizajnom stranice.

### Zaključak

`<col>` tag je koristan za definiranje atributa za jednu ili više kolona unutar `<colgroup>` elementa u tabeli unutar HTML dokumenata. Pravilno korištenje ovog taga poboljšava čitljivost i organizaciju kolona u tabelama na web stranicama.

```

Nadam se da će ova datoteka biti korisna. Ako imate dodatnih zahtjeva ili pitanja, slobodno ih postavite!
```
