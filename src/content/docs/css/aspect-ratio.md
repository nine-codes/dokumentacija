---
title: aspect-ratio
description: CSS Svojstvo aspect-ratio
---

### CSS Svojstvo `aspect-ratio`

CSS Svojstvo `aspect-ratio` omogućava postavljanje omjera širine i visine elementa, što je korisno za održavanje proporcija elemenata bez obzira na veličinu ekrana ili kontejnera.

#### Osnovna sintaksa

```css
element {
  aspect-ratio: 16 / 9;
}
```

- **`aspect-ratio`**: Definiše omjer širine prema visini elementa.

### Karakteristike `aspect-ratio` Svojstva

1. **Održavanje proporcija**:
   `aspect-ratio` Svojstvo omogućava održavanje proporcija elemenata, što je korisno za slike, video zapise i druge medijske elemente.

2. **Fleksibilnost**:
   Omogućava vam da lako prilagodite elemente različitim veličinama ekrana dok zadržavate željeni omjer.

3. **Jednostavna sintaksa**:
   Definiše omjer kao razlomak, što olakšava razumijevanje i primjenu.

### Vrijednosti `aspect-ratio` Svojstva

1. **`<ratio>`**:  
   Definiše omjer širine prema visini. Može biti izražen kao razlomak (npr. `16 / 9`) ili decimalni broj (npr. `1.777`).

   **Primjer:**

   ```css
   div {
     aspect-ratio: 4 / 3;
   }
   ```

### Primjeri korištenja `aspect-ratio` Svojstva

1. **Postavljanje omjera za video elemente:**

   ```css
   video {
     aspect-ratio: 16 / 9;
     width: 100%;
   }
   ```

1. **Održavanje proporcija slike:**
   ```css
   img {
     aspect-ratio: 1 / 1;
     width: 100%;
     height: auto;
   }
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `aspect-ratio` Svojstva može poboljšati vizualnu konzistentnost i korisničko iskustvo na različitim uređajima.
- **Best practices**: Koristite `aspect-ratio` Svojstvo za elemente gdje je važno zadržati proporcije, kao što su slike i video zapisi.

### Zaključak

CSS Svojstvo `aspect-ratio` je korisno za održavanje proporcija elemenata, posebno u responzivnom dizajnu. Njegova sposobnost da zadrži omjer širine i visine čini ga korisnim u situacijama kada je potrebna vizualna konzistentnost.
