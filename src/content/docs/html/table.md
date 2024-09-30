---
title: <table>
description: HTML <table> tag
---

### HTML `<table>` Tag

`<table>` tag u HTML-u se koristi za kreiranje tabela. Tabele omogućavaju organizaciju podataka u redove i kolone, što je korisno za prikazivanje strukturiranih informacija.

#### Osnovna sintaksa

```html
<table>
  <tr>
    <th>Naslov 1</th>
    <th>Naslov 2</th>
  </tr>
  <tr>
    <td>Podatak 1</td>
    <td>Podatak 2</td>
  </tr>
</table>
```

- **`<table>`**: Kreira tabelu.
- **`<tr>`**: Definira red u tabeli.
- **`<th>`**: Definira ćeliju zaglavlja u tabeli.
- **`<td>`**: Definira ćeliju podataka u tabeli.

### Karakteristike `<table>` taga

1. **Strukturirani podaci**:
   `<table>` tag omogućava organizaciju podataka u redove i kolone, što je korisno za prikazivanje strukturiranih informacija.

2. **Zaglavlja i podaci**:
   Tabele mogu imati zaglavlja (`<th>`) i ćelije podataka (`<td>`), što omogućava jasnu organizaciju i prezentaciju informacija.

3. **Fleksibilnost**:
   `<table>` tag može sadržavati različite tipove sadržaja, uključujući tekst, linkove, slike, i druge HTML elemente.

### Primjeri korištenja `<table>` taga

1. **Osnovna tabela:**

   ```html
   <table>
     <tr>
       <th>Naslov 1</th>
       <th>Naslov 2</th>
     </tr>
     <tr>
       <td>Podatak 1</td>
       <td>Podatak 2</td>
     </tr>
   </table>
   ```

2. **Tabela sa više redova:**

   ```html
   <table>
     <tr>
       <th>Naslov 1</th>
       <th>Naslov 2</th>
     </tr>
     <tr>
       <td>Podatak 1</td>
       <td>Podatak 2</td>
     </tr>
     <tr>
       <td>Podatak 3</td>
       <td>Podatak 4</td>
     </tr>
   </table>
   ```

3. **Tabela sa ugniježđenim tabelama:**
   ```html
   <table>
     <tr>
       <th>Naslov 1</th>
       <th>Naslov 2</th>
     </tr>
     <tr>
       <td>
         <table>
           <tr>
             <td>Podatak 1.1</td>
             <td>Podatak 1.2</td>
           </tr>
         </table>
       </td>
       <td>Podatak 2</td>
     </tr>
   </table>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `<th>` elemenata za zaglavlja kolona poboljšava pristupačnost tabela jer omogućava korisnicima koji koriste čitače ekrana da lakše prepoznaju strukturu tabele.
- **SEO**: Tabele unutar `<table>` taga mogu poboljšati SEO jer pretraživači prepoznaju važnost tih stavki za strukturu sadržaja.
- **Stilizacija**: `<table>` tag se može stilizirati pomoću CSS-a kako bi se vizualno uskladio sa dizajnom stranice.

### Zaključak

`<table>` tag je ključan element za kreiranje tabela na web stranicama. Omogućava organizaciju podataka u redove i kolone, poboljšava pristupačnost i SEO, te se može fleksibilno stilizirati pomoću CSS-a.
