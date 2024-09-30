---
title: <p>
description: Paragraph tag
---

### HTML `<p>` Tag

`<p>` tag u HTML-u se koristi za označavanje odlomaka teksta. Ovaj tag je jedan od osnovnih i najčešće korištenih elemenata prilikom kreiranja web stranica, jer omogućava logičku organizaciju teksta u odlomke, što poboljšava čitljivost i strukturu sadržaja.

#### Osnovna sintaksa

```html
<p>Ovo je primjer teksta unutar p tag-a.</p>
```

- **Otvoreni tag**: `<p>`
- **Zatvoreni tag**: `</p>`

### Svojstva i karakteristike `<p>` taga

1. **Blok element**:  
   `<p>` je blok element, što znači da svaki put kada se koristi, započinje novi blok teksta i automatski dodaje vertikalni razmak prije i poslije paragrafa. To omogućava bolju organizaciju i preglednost sadržaja.

2. **Automatsko formatiranje**:  
   Preglednici automatski dodaju razmak između odlomaka bez potrebe za dodatnim CSS stilovima. Ako su dva `<p>` elementa jedan ispod drugog, preglednik će automatski postaviti odgovarajući prostor između njih.

3. **Nesting (ugnježđivanje)**:  
   Nije preporučeno koristiti `<p>` tag unutar drugog `<p>` taga. Ugnježđivanje paragrafa može uzrokovati nepredvidivo ponašanje u preglednicima.

   **Nepravilno:**

   ```html
   <p>Ovo je odlomak. <p>Ovo je drugi odlomak unutar prvog, što nije ispravno.</p></p>
   ```

4. **Inline elementi unutar `<p>` taga**:  
   Unutar `<p>` taga možete koristiti **inline elemente** kao što su:

   - `<a>` (linkovi)
   - `<strong>` (označava važan tekst, bold)
   - `<em>` (kurziv ili naglašeni tekst)
   - `<span>` (za ciljanje dijelova teksta s CSS stilovima)

   **Primjer:**

   ```html
   <p>
     Ovaj tekst je <strong>boldovan</strong> i ovdje je <a href="#">link</a>.
   </p>
   ```

### Primjeri korištenja `<p>` taga

1. **Osnovni primjer:**

   ```html
   <p>Ovo je jednostavan odlomak teksta.</p>
   ```

2. **Kombinacija s drugim inline elementima:**

   ```html
   <p>
     Možete kombinirati <em>kurzivni tekst</em> i
     <strong>boldovani tekst</strong> unutar jednog paragrafa.
   </p>
   ```

3. **Link unutar paragrafa:**
   ```html
   <p>
     Posjetite našu <a href="https://www.primjer.com">web stranicu</a> za više
     informacija.
   </p>
   ```

### Dodatne informacije

- **HTML 5 specifikacije**: `<p>` tag se koristi za strukturiranje semantičkog sadržaja i označavanje odlomaka.
- **Valjanost koda**: Korištenje `<p>` taga unutar drugih blokovskih elemenata (poput `<div>`, `<article>`, `<section>`) je potpuno valjano, dok ugnježđivanje paragrafa unutar paragrafa treba izbjegavati.

### Zaključak

`<p>` tag je osnovni HTML element koji služi za organizaciju i prikaz teksta u odlomcima. On doprinosi boljoj strukturi web stranice i olakšava korisnicima da čitaju i razumiju sadržaj. Sa CSS-om se može lako prilagoditi izgled paragrafa kako bi bio vizualno privlačniji i funkcionalniji.
