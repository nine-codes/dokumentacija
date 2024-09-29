---
title: <base>
description: HTML <base> tag
---

### HTML `<base>` Tag

`<base>` tag u HTML-u koristi se za postavljanje osnovne URL adrese i ciljanog okvira za sve relativne linkove unutar dokumenta. Ovaj tag se nalazi unutar `<head>` sekcije HTML dokumenta i utječe na sve `<a>`, `<img>`, i druge elemente koji koriste relativne URL-ove.

#### Osnovna sintaksa

```html
<head>
  <base href="https://www.primjer.com/" target="_blank" />
</head>
```

- **`<base href>`**: Definiše osnovni URL koji će biti primijenjen na sve relativne linkove u dokumentu.
- **`<base target>`**: Definiše podrazumijevani cilj otvaranja linkova, kao što su novi prozor/tab ili iframe.

### Karakteristike `<base>` taga

1. **Relativni URL-ovi**:
   `<base href>` atribut određuje osnovnu (root) URL adresu koja se dodaje svim relativnim linkovima u HTML dokumentu. Ako postoji `<base>` tag, svi linkovi koji nemaju punu URL adresu koriste ovu osnovnu adresu kao referentnu.

2. **Ciljani prozor ili okvir**:
   `<base target>` atribut definiše gdje će se otvoriti linkovi iz tog dokumenta. Najčešće korištene vrijednosti za `target` su:
   - `_self`: Otvara link u istom prozoru/tabu (ovo je podrazumijevano ponašanje).
   - `_blank`: Otvara link u novom prozoru ili tabu.
   - `_parent`: Otvara link u nadređenom okviru (koristi se za okvire/iframe).
   - `_top`: Otvara link u cijelom prozoru, uklanjajući sve okvire.

### Primjeri korištenja `<base>` taga

1. **Definisanje osnovne URL adrese:**

   ```html
   <head>
     <base href="https://www.mojastranica.com/" />
   </head>
   <body>
     <a href="kontakt">Kontaktirajte nas</a>
     <!-- Link će voditi na: https://www.mojastranica.com/kontakt -->
   </body>
   ```

2. **Otvaranje linkova u novom prozoru:**
   ```html
   <head>
     <base href="https://www.mojastranica.com/" target="_blank" />
   </head>
   <body>
     <a href="o-nama">O nama</a>
     <!-- Link će se otvoriti u novom tabu i voditi na: https://www.mojastranica.com/o-nama -->
   </body>
   ```

### Kada koristiti `<base>`

- **Centralizirano postavljanje osnovnog URL-a**: Ako imate više relativnih linkova unutar jednog dokumenta, možete koristiti `<base>` da postavite jednu osnovnu adresu i tako olakšate rad sa linkovima. Ovo može biti posebno korisno kod većih web stranica s mnogo međusobno povezanih stranica.
- **Definisanje ciljanog prozora za sve linkove**: Ako želite da svi linkovi u dokumentu podrazumijevano budu otvoreni u novom tabu ili prozoru, `<base>` sa `target` atributom je elegantno rješenje.

### Ograničenja `<base>` taga

1. **Samo jedan `<base>` tag po dokumentu**:
   HTML specifikacije dozvoljavaju korištenje samo jednog `<base>` taga unutar `<head>` sekcije. Ako se doda više `<base>` tagova, samo prvi će biti primijenjen.

2. **Ne utiče na apsolutne URL-ove**:
   `<base href>` utječe samo na relativne URL-ove. Apsolutni linkovi (koji počinju s `http://`, `https://`, itd.) nisu pod utjecajem ovog taga.

3. **Globalno utjecanje**:
   Kada postavite `<base>`, on utiče na sve relativne URL-ove u dokumentu. Stoga je važno pažljivo razmisliti o tome kako i gdje postavljate ovaj tag, jer može nehotice utjecati na mnoge linkove i elemente.

### Primjeri korištenja u kombinaciji s drugim elementima

```html
<head>
  <base href="https://www.primjer.com/" />
</head>
<body>
  <img src="slike/logo.png" alt="Logo" />
  <!-- Slika će biti učitana sa: https://www.primjer.com/slike/logo.png -->
  <a href="kontakt">Kontakt</a>
  <!-- Link će voditi na: https://www.primjer.com/kontakt -->
</body>
```

### Zaključak

`<base>` tag je koristan alat za definiranje osnovnog URL-a i podrazumijevanog cilja za sve relativne linkove i resurse u dokumentu. Iako se koristi rijetko, može značajno olakšati rad sa relativnim URL-ovima na složenijim web stranicama, posebno kada se koristi s pažnjom da ne utječe na neželjene dijelove stranice.
