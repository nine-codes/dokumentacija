---
title: <meter>
description: HTML <meter> tag
---

### HTML `<meter>` Tag

`<meter>` tag u HTML-u se koristi za prikazivanje mjerne vrijednosti unutar poznatog raspona. Ovaj tag se obično koristi za prikazivanje rezultata, nivoa napunjenosti baterije, ili drugih mjernih vrijednosti.

#### Osnovna sintaksa

```html
<meter value="0.6">60%</meter>
```

- **`value`**: Atribut koji specificira trenutnu vrijednost mjerne vrijednosti.
- **`min`**: Atribut koji specificira minimalnu vrijednost raspona (podrazumijevano je 0).
- **`max`**: Atribut koji specificira maksimalnu vrijednost raspona (podrazumijevano je 1).
- **`low`**: Atribut koji specificira donju granicu niskog raspona.
- **`high`**: Atribut koji specificira gornju granicu visokog raspona.
- **`optimum`**: Atribut koji specificira optimalnu vrijednost unutar raspona.

### Karakteristike `<meter>` taga

1. **Mjerenje vrijednosti**:
   `<meter>` tag se koristi za prikazivanje mjerne vrijednosti unutar poznatog raspona.

2. **Stilizacija**:
   Preglednici obično prikazuju `<meter>` element kao grafički prikaz mjerne vrijednosti, ali stilizacija može biti prilagođena pomoću CSS-a.

### Primjeri korištenja `<meter>` taga

1. **Prikazivanje nivoa napunjenosti baterije:**

   ```html
   <meter value="0.7" min="0" max="1">70%</meter>
   ```

2. **Prikazivanje rezultata testa:**
   ```html
   <meter value="0.8" min="0" max="1" low="0.3" high="0.7" optimum="0.8">
     80%
   </meter>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje atributa `value`, `min`, `max`, `low`, `high`, i `optimum` poboljšava pristupačnost jer pruža dodatne informacije o mjernoj vrijednosti.
- **Stilizacija**: `<meter>` element može se dodatno stilizirati pomoću CSS-a kako bi se vizualno uskladio sa dizajnom stranice.

### Zaključak

`<meter>` tag je koristan za prikazivanje mjerne vrijednosti unutar poznatog raspona u HTML dokumentima. Pravilno korištenje ovog taga poboljšava čitljivost i razumijevanje mjernih vrijednosti na web stranicama.

```

Nadam se da će ova datoteka biti korisna. Ako imate dodatnih zahtjeva ili pitanja, slobodno ih postavite!
```

```

```
