---
title: <colgroup>
description: HTML <colgroup> tag
---

### HTML `<colgroup>` Tag

`<colgroup>` tag u HTML-u se koristi za grupisanje jedne ili više kolona unutar tabele. Ovaj tag se obično koristi zajedno sa `<col>` tagom za primjenu stilova ili atributa na cijele kolone.

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

- **`<colgroup>`**: Grupira jednu ili više kolona unutar tabele.

### Karakteristike `<colgroup>` taga

1. **Grupisanje kolona**:
   `<colgroup>` tag se koristi za grupisanje jedne ili više kolona unutar tabele.

2. **Stilizacija**:
   Preglednici obično primjenjuju stilove ili atribute definirane unutar `<col>` taga na cijele kolone grupisane unutar `<colgroup>` taga.

### Primjeri korištenja `<colgroup>` taga

1. **Primjena stilova na grupu kolona:**

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

2. **Definiranje širine grupa kolona:**
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

- **Pristupačnost**: Korištenje `<colgroup>` taga poboljšava pristupačnost jer omogućava grupisanje kolona unutar tabele.
- **Stilizacija**: Stilovi ili atributi definirani unutar `<col>` taga mogu se dodatno prilagoditi pomoću CSS-a kako bi se vizualno uskladili sa dizajnom stranice.

### Zaključak

`<colgroup>` tag je koristan za grupisanje jedne ili više kolona unutar tabele unutar HTML dokumenata. Pravilno korištenje ovog taga poboljšava čitljivost i organizaciju kolona u tabelama na web stranicama.
