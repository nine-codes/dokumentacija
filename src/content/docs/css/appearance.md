---
title: appearance
description: CSS Svojstvo appearance
---

### CSS Svojstvo `appearance`

CSS Svojstvo `appearance` omogućava kontrolu nad izgledom elementa, omogućavajući vam da uklonite ili modifikujete stilizaciju koja dolazi od strane korisničkog agenta (npr. pretraživača). Ovo je korisno kada želite da prilagodite izgled formnih elemenata ili drugih elemenata koji imaju podrazumijevani stil.

#### Osnovna sintaksa

```css
element {
  appearance: none;
}
```

- **`appearance`**: Primjenjuje se na elemente koji imaju podrazumijevani stil korisničkog agenta.
- **`none`**: Uklanja podrazumijevani stil korisničkog agenta.

### Karakteristike `appearance` Svojstva

1. **Uklanjanje podrazumijevanog stila**:
   `appearance` Svojstvo omogućava uklanjanje podrazumijevanog stila korisničkog agenta, što je korisno za prilagođavanje izgleda elemenata.

2. **Fleksibilnost**:
   Omogućava vam da zadržite ili uklonite podrazumijevani stil, pružajući veću kontrolu nad stilizacijom.

3. **Kompaktna sintaksa**:
   Umjesto da ručno uklanjate stilove, `appearance` Svojstvo omogućava jednostavno uklanjanje svih podrazumijevanih stilova.

### Vrijednosti `appearance` Svojstva

1. **`none`**:  
   Uklanja podrazumijevani stil korisničkog agenta.

   **Primjer:**

   ```css
   input {
     appearance: none;
   }
   ```

### Primjeri korištenja `appearance` Svojstva

1. **Prilagođavanje formnih elemenata:**

   ```css
   button {
     appearance: none;
     background-color: blue;
     color: white;
     border: 1px solid black;
   }
   ```

1. **Uklanjanje stila sa checkbox-a:**
   ```css
   input[type='checkbox'] {
     appearance: none;
   }
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `appearance` Svojstva može poboljšati pristupačnost tako što omogućava prilagođavanje elemenata na način koji je vizualno konzistentan.
- **Best practices**: Koristite `appearance` Svojstvo pažljivo, jer uklanjanje podrazumijevanih stilova može uticati na očekivano ponašanje elemenata.

### Zaključak

CSS Svojstvo `appearance` je korisno za kontrolu nad izgledom elemenata, posebno kada je potrebno ukloniti podrazumijevane stilove korisničkog agenta. Njegova sposobnost da prilagodi izgled elemenata čini ga korisnim u situacijama kada je potrebna veća kontrola nad stilizacijom.
