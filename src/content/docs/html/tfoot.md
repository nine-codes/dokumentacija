---
title: <tfoot>
description: HTML <tfoot> tag
---

### HTML `<tfoot>` Tag

`<tfoot>` tag u HTML-u se koristi za definiranje podnožja tabele. Obično sadrži redove sa sumama, ukupnim vrijednostima ili drugim informacijama koje se odnose na cijelu tabelu.

#### Osnovna sintaksa

```html
<table>
  <thead>
    <tr>
      <th>Naslov 1</th>
      <th>Naslov 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Podatak 1</td>
      <td>Podatak 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Ukupno</td>
      <td>100</td>
    </tr>
  </tfoot>
</table>
```

- **`<tfoot>`**: Element koji obuhvata redove podnožja unutar tabele.

### Karakteristike `<tfoot>` taga

1. **Definiranje podnožja**:
   `<tfoot>` tag se koristi za grupiranje redova koji sadrže informacije o cijeloj tabeli.

2. **Kompatibilnost s `<thead>` i `<tbody>`**:
   Kada se koristi zajedno s `<thead>` i `<tbody>`, omogućava jasnu strukturu tabele s odvojenim zaglavljem, tijelom i podnožjem.

### Dodatne informacije

- **Pristupačnost**: Korištenje `<tfoot>` poboljšava pristupačnost i omogućava čitačima ekrana da bolje interpretiraju strukturu tabele.
- **Stilizacija**: Redovi unutar `<tfoot>` mogu se stilizirati pomoću CSS-a za poboljšanje vizualnog prikaza.

### Zaključak

`<tfoot>` tag je koristan za organizaciju i strukturiranje podnožja unutar HTML tabela. Pravilno korištenje ovog taga poboljšava čitljivost i pristupačnost tabela.
