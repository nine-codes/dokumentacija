---
title: <option>
description: HTML <option> tag
---

### HTML `<option>` Tag

`<option>` tag u HTML-u se koristi za definiranje opcija unutar `<select>`, `<optgroup>`, ili `<datalist>` elemenata. Ovaj tag omogućava korisnicima da odaberu jednu ili više opcija iz padajućeg izbornika ili liste.

#### Osnovna sintaksa

```html
<select>
  <option value="jabuka">Jabuka</option>
  <option value="banana">Banana</option>
  <option value="kruska">Kruška</option>
</select>
```

- **`value`**: Atribut koji specificira vrijednost opcije koja će biti poslana na server kada se opcija odabere.
- **`selected`**: Atribut koji označava da je opcija unaprijed odabrana.
- **`disabled`**: Atribut koji označava da je opcija onemogućena i ne može biti odabrana.

### Karakteristike `<option>` taga

1. **Definiranje opcija**:
   `<option>` tag se koristi za definiranje opcija unutar `<select>`, `<optgroup>`, ili `<datalist>` elemenata.

2. **Pristupačnost**:
   Korištenje atributa `value`, `selected`, i `disabled` poboljšava pristupačnost i korisničko iskustvo.

### Primjeri korištenja `<option>` taga

1. **Definiranje opcija unutar `<select>` elementa:**

   ```html
   <select>
     <option value="jabuka">Jabuka</option>
     <option value="banana">Banana</option>
     <option value="kruska">Kruška</option>
   </select>
   ```

2. **Unaprijed odabrana opcija:**

   ```html
   <select>
     <option value="jabuka">Jabuka</option>
     <option value="banana" selected>Banana</option>
     <option value="kruska">Kruška</option>
   </select>
   ```

3. **Onemogućena opcija:**
   ```html
   <select>
     <option value="jabuka">Jabuka</option>
     <option value="banana" disabled>Banana</option>
     <option value="kruska">Kruška</option>
   </select>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje atributa `value`, `selected`, i `disabled` poboljšava pristupačnost i korisničko iskustvo.
- **Stilizacija**: Opcije unutar `<option>` taga mogu se dodatno stilizirati pomoću CSS-a kako bi se vizualno uskladile sa dizajnom stranice.

### Zaključak

`<option>` tag je koristan za definiranje opcija unutar `<select>`, `<optgroup>`, ili `<datalist>` elemenata u HTML dokumentima. Pravilno korištenje ovog taga poboljšava čitljivost i organizaciju opcija na web stranicama.

```

Nadam se da će ova datoteka biti korisna. Ako imate dodatnih zahtjeva ili pitanja, slobodno ih postavite!
```
