---
title: <meta>
description: HTML <meta> tag
---

### HTML `<meta>` Tag

`<meta>` tag u HTML-u se koristi za definiranje metapodataka o HTML dokumentu. Ovi metapodaci se ne prikazuju direktno na stranici, ali su važni za pretraživače, preglednike i druge servise.

#### Osnovna sintaksa

```html
<meta charset="UTF-8" />
```

- **`<meta>`**: Definira metapodatke o HTML dokumentu.
- **`charset`**: Atribut koji definira kodnu stranicu dokumenta.

### Karakteristike `<meta>` taga

1. **Kodna stranica**:
   `charset` atribut definira kodnu stranicu dokumenta, što je važno za ispravno prikazivanje teksta.

2. **Opis i ključne riječi**:
   `name` i `content` atributi se koriste za definiranje opisa stranice i ključnih riječi koje pomažu pretraživačima da bolje razumiju sadržaj stranice.

3. **Kontrola keširanja**:
   `http-equiv` atribut se koristi za kontrolu keširanja, osvežavanja i drugih HTTP zaglavlja.

### Primjeri korištenja `<meta>` taga

1. **Definiranje kodne stranice:**

   ```html
   <meta charset="UTF-8" />
   ```

2. **Opis stranice:**

   ```html
   <meta name="description" content="Ovo je opis stranice." />
   ```

3. **Ključne riječi:**

   ```html
   <meta name="keywords" content="HTML, CSS, JavaScript" />
   ```

4. **Kontrola keširanja:**
   ```html
   <meta http-equiv="cache-control" content="no-cache" />
   ```

### Dodatne informacije

- **SEO**: Korištenje `<meta>` taga za definiranje opisa i ključnih riječi može poboljšati SEO i rangiranje stranice na pretraživačima.
- **Pristupačnost**: Definiranje kodne stranice pomoću `charset` atributa osigurava ispravno prikazivanje teksta i poboljšava pristupačnost.
- **Performanse**: Kontrola keširanja pomoću `http-equiv` atributa može poboljšati performanse stranice.

### Zaključak

`<meta>` tag je ključan element za definiranje metapodataka o HTML dokumentu. Pravilno korištenje ovog taga poboljšava SEO, pristupačnost i performanse web stranica. Metapodaci definirani pomoću `<meta>` taga pomažu pretraživačima, preglednicima i drugim servisima da bolje razumiju i prikazuju sadržaj stranice.
