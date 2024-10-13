---
title: backdrop-filter
description: CSS Svojstvo backdrop-filter
---

### CSS Svojstvo `backdrop-filter`

CSS Svojstvo `backdrop-filter` omogućava primjenu grafičkih efekata kao što su zamućenje ili promjena boje na pozadinu elementa, bez uticaja na sadržaj unutar elementa. Ovo je korisno za stvaranje vizualno privlačnih efekata na pozadinskim slojevima.

#### Osnovna sintaksa

```css
element {
  backdrop-filter: blur(5px);
}
```

- **`backdrop-filter`**: Primjenjuje grafičke efekte na pozadinu elementa.

### Karakteristike `backdrop-filter` Svojstva

1. **Vizualni efekti**:
   `backdrop-filter` Svojstvo omogućava primjenu efekata kao što su zamućenje, kontrast, i promjena boje na pozadinu elementa.

2. **Kreativna kontrola**:
   Omogućava dizajnerima da stvore jedinstvene vizualne efekte koji poboljšavaju korisničko iskustvo.

3. **Podrška za više efekata**:
   Možete kombinovati više efekata koristeći razmake između njih.

### Vrijednosti `backdrop-filter` Svojstva

1. **`blur(<length>)`**:  
   Primjenjuje zamućenje na pozadinu.

   **Primjer:**

   ```css
   div {
     backdrop-filter: blur(10px);
   }
   ```

2. **`brightness(<percentage>)`**:  
   Podešava svjetlinu pozadine.

   **Primjer:**

   ```css
   div {
     backdrop-filter: brightness(150%);
   }
   ```

3. **`contrast(<percentage>)`**:  
   Podešava kontrast pozadine.

   **Primjer:**

   ```css
   div {
     backdrop-filter: contrast(200%);
   }
   ```

### Primjeri korištenja `backdrop-filter` Svojstva

1. **Zamućenje pozadine:**

   ```css
   .overlay {
     backdrop-filter: blur(5px);
     background-color: rgba(255, 255, 255, 0.5);
   }
   ```

1. **Kombinacija efekata:**
   ```css
   .fancy-background {
     backdrop-filter: blur(5px) brightness(120%);
   }
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `backdrop-filter` Svojstva može poboljšati vizualnu privlačnost, ali treba ga koristiti pažljivo kako bi se osigurala čitljivost sadržaja.
- **Best practices**: Testirajte efekte na različitim uređajima kako biste osigurali konzistentno korisničko iskustvo.

### Zaključak

CSS Svojstvo `backdrop-filter` je moćan alat za primjenu vizualnih efekata na pozadinu elemenata. Njegova sposobnost da stvori jedinstvene vizualne efekte čini ga korisnim u modernom web dizajnu.
