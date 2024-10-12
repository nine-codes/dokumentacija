---
title: all
description: CSS Svojstvo all
---

### CSS Svojstvo `all`

CSS Svojstvo `all` omogućava resetovanje svih stilova elementa na njihove početne, nasljedne ili nepostavljene vrijednosti. Ovo je korisno kada želite da uklonite sve stilove sa elementa i počnete od nule.

#### Osnovna sintaksa

```css
element {
  all: unset;
}
```

- **`all`**: Primjenjuje se na sve CSS svojstva elementa.
- **`unset`**: Vraća svojstva na njihove početne ili nasljedne vrijednosti.

### Karakteristike `all` Svojstva

1. **Resetovanje stilova**:
   `all` Svojstvo omogućava resetovanje svih stilova elementa, što je korisno za uklanjanje neželjenih stilova.

2. **Jednostavnost**:
   Umjesto da resetujete svako svojstvo pojedinačno, `all` Svojstvo omogućava resetovanje svih svojstava odjednom.

3. **Kontrola stila**:
   Omogućava preciznu kontrolu nad stilovima elementa, posebno u složenim projektima.

### Vrijednosti `all` Svojstva

1. **`unset`**:  
   Vraća svojstva na njihove početne ili nasljedne vrijednosti.

   **Primjer:**

   ```css
   element {
     all: unset;
   }
   ```

### Primjeri korištenja `all` Svojstva

1. **Resetovanje stilova:**

   ```css
   button {
     all: unset;
     background-color: blue;
     color: white;
   }
   ```

1. **Uklanjanje svih stilova:**
   ```css
   div {
     all: initial;
   }
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `all` Svojstva može poboljšati pristupačnost tako što uklanja neželjene stilove koji mogu ometati korisnike.
- **Best practices**: Koristite `all` Svojstvo pažljivo, jer može ukloniti sve stilove, uključujući i one koji su potrebni za funkcionalnost.

### Zaključak

CSS Svojstvo `all` je moćan alat za resetovanje stilova elementa. Njegova sposobnost da ukloni sve stilove odjednom čini ga korisnim u situacijama kada je potrebno početi od nule sa stilizovanjem.
