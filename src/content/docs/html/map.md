---
title: <map>
description: HTML <map> tag
---

### HTML `<map>` Tag

`<map>` tag u HTML-u se koristi za definiranje slike sa mapom (image map). Ovaj tag omogućava kreiranje područja unutar slike koja su interaktivna i mogu se kliknuti, slično kao hiperlinkovi.

#### Osnovna sintaksa

```html
<img src="slika.jpg" usemap="#mapa" alt="Opis slike" />
<map name="mapa">
  <area
    shape="rect"
    coords="34,44,270,350"
    alt="Opis područja"
    href="https://www.example.com"
  />
</map>
```

- **`<map>`**: Definira mapu slike.
- **`<area>`**: Definira interaktivno područje unutar mape slike.
- **`usemap`**: Atribut unutar `<img>` taga koji povezuje sliku sa mapom.

### Karakteristike `<map>` taga

1. **Mapa slike**:
   `<map>` tag se koristi za definiranje mape slike koja sadrži interaktivna područja.

2. **Interaktivna područja**:
   `<area>` tag unutar `<map>` taga definira interaktivna područja unutar slike koja mogu biti kliknuta.

### Primjeri korištenja `<map>` taga

1. **Definiranje mape slike:**

   ```html
   <img src="slika.jpg" usemap="#mapa" alt="Opis slike" />
   <map name="mapa">
     <area
       shape="rect"
       coords="34,44,270,350"
       alt="Opis područja"
       href="https://www.example.com"
     />
   </map>
   ```

2. **Kreiranje više interaktivnih područja:**
   ```html
   <img src="slika.jpg" usemap="#mapa" alt="Opis slike" />
   <map name="mapa">
     <area
       shape="rect"
       coords="34,44,270,350"
       alt="Opis područja 1"
       href="https://www.example1.com"
     />
     <area
       shape="circle"
       coords="160,210,75"
       alt="Opis područja 2"
       href="https://www.example2.com"
     />
     <area
       shape="poly"
       coords="200,10,250,190,160,210"
       alt="Opis područja 3"
       href="https://www.example3.com"
     />
   </map>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje atributa `alt` unutar `<area>` taga poboljšava pristupačnost jer pruža opis interaktivnih područja.
- **Stilizacija**: Interaktivna područja unutar mape slike mogu se dodatno stilizirati pomoću CSS-a kako bi se vizualno uskladila sa dizajnom stranice.

### Zaključak

`<map>` tag je koristan za definiranje mape slike sa interaktivnim područjima unutar HTML dokumenata. Pravilno korištenje ovog taga poboljšava funkcionalnost i interaktivnost na web stranicama.

```

Nadam se da će ova datoteka biti korisna. Ako imate dodatnih zahtjeva ili pitanja, slobodno ih postavite!
```

```

```
