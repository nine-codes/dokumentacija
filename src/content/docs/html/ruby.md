---
title: <ruby>
description: HTML <ruby> tag
---

### HTML `<ruby>` Tag

`<ruby>` tag u HTML-u se koristi za prikazivanje rubi anotacija, koje su male tekstualne napomene ili vodiči za izgovor, često korištene u azijskim jezicima.

#### Osnovna sintaksa

```html
<ruby>
  tekst
  <rt>anotacija</rt>
</ruby>
```

- **`<ruby>`**: Glavni element koji obuhvata tekst i njegovu rubi anotaciju.
- **`<rt>`**: Element unutar `<ruby>` koji specificira rubi tekst (anotaciju).

### Karakteristike `<ruby>` taga

1. **Prikaz rubi anotacija**:
   `<ruby>` tag omogućava prikazivanje rubi anotacija iznad ili pored teksta.

2. **Podrška za više jezika**:
   Koristi se za jezike koji zahtijevaju dodatne vodiče za izgovor, kao što su japanski i kineski.

### Primjeri korištenja `<ruby>` taga

1. **Osnovna rubi anotacija:**

   ```html
   <ruby> 漢 <rt>kan</rt> </ruby>
   ```

2. **Rubi anotacija sa više znakova:**
   ```html
   <ruby> 漢字 <rt>kanji</rt> </ruby>
   ```

### Dodatne informacije

- **Pristupačnost**: Rubi anotacije pomažu u razumijevanju i izgovoru složenih znakova.
- **Stilizacija**: Rubi tekst može se stilizirati pomoću CSS-a kako bi se uskladio s dizajnom stranice.

### Zaključak

`<ruby>` tag je koristan za dodavanje vodiča za izgovor i dodatnih informacija uz tekst, posebno u kontekstu azijskih jezika. Pravilno korištenje ovog taga poboljšava razumijevanje i pristupačnost sadržaja.
