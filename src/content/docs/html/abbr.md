---
title: <abbr>
description: HTML Abbreviation element
---

### HTML `<abbr>` Tag

`<abbr>` tag u HTML-u se koristi za označavanje skraćenica ili akronima. Kada korisnik pređe mišem preko skraćenice, može se prikazati puni oblik te skraćenice, što olakšava razumijevanje sadržaja i poboljšava pristupačnost.

#### Osnovna sintaksa

```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

- **`<abbr>`**: Označava skraćenicu ili akronim.
- **`title`**: Atribut koji pruža puni oblik skraćenice kada se mišem pređe preko nje.

### Karakteristike `<abbr>` taga

1. **Pristupačnost**:
   `<abbr>` tag poboljšava pristupačnost stranice, jer omogućava korisnicima da saznaju puni naziv skraćenice. Čitači ekrana mogu pročitati puni naziv kada dođu do skraćenice.

2. **SEO**:
   Korištenje `<abbr>` taga s ispravnim `title` atributom može pomoći pretraživačima da bolje razumiju sadržaj stranice, jer pruža dodatne informacije o skraćenicama i akronimima.

3. **Tooltips**:
   Kada se skraćenica koristi unutar `<abbr>` taga s `title` atributom, puni oblik skraćenice može se prikazati kao "tooltip" kada korisnik pređe mišem preko teksta.

### Atributi `<abbr>` taga

1. **`title`**:  
   Ovaj atribut pruža puni oblik skraćenice ili akronima. Kada korisnik pređe mišem preko skraćenice, prikazuje se sadržaj `title` atributa kao dodatna informacija.

   **Primjer:**

   ```html
   <abbr title="Cascading Style Sheets">CSS</abbr>
   ```

### Primjeri korištenja `<abbr>` taga

1. **Skraćenica sa punim nazivom:**

   ```html
   <p>
     Jezik <abbr title="HyperText Markup Language">HTML</abbr> je osnovni jezik
     za izradu web stranica.
   </p>
   ```

2. **Akronim sa objašnjenjem:**
   ```html
   <p>
     Za stiliziranje web stranica koristi se
     <abbr title="Cascading Style Sheets">CSS</abbr>.
   </p>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `<abbr>` taga je posebno korisno za korisnike koji koriste čitače ekrana, jer omogućava da se puni oblik skraćenice pročita naglas.
- **Best practices**: Uvijek koristite `<abbr>` tag kada koristite skraćenice koje možda nisu poznate široj publici. Pobrinite se da uvijek pružite puni naziv skraćenice u `title` atributu.

### Zaključak

`<abbr>` tag je jednostavan, ali veoma koristan HTML element koji pomaže da se skraćenice i akronimi jasno definiraju i učine razumljivim za sve korisnike. Redovno korištenje ovog taga ne samo da poboljšava korisničko iskustvo, već i čini vašu web stranicu pristupačnijom i bolje optimizovanom za pretraživače.
