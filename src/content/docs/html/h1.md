---
title: <h1>
description: Heading Tag
---

### HTML Heading Tagovi (`<h1>` do `<h6>`)

Heading tagovi u HTML-u (`<h1>` do `<h6>`) koriste se za strukturiranje naslova i podnaslova na web stranici. Ovi tagovi pomažu pretraživačima i korisnicima da bolje razumiju hijerarhiju i organizaciju sadržaja.

#### Osnovna sintaksa

```html
<h1>Ovo je glavni naslov</h1>
<h2>Ovo je podnaslov</h2>
<h3>Ovo je pod-podnaslov</h3>
```

- **`<h1>`** predstavlja najvažniji, glavni naslov na stranici.
- **`<h6>`** predstavlja najmanje važan naslov.

### Karakteristike heading tagova

1. **Hijerarhija**:
   Heading elementi definiraju hijerarhiju teksta, gdje `<h1>` ima najveću važnost, dok `<h6>` ima najmanju. Obično bi trebala postojati samo jedna `<h1>` oznaka po stranici, koja predstavlja glavni naslov ili temu stranice.

2. **SEO (Search Engine Optimization)**:
   Pretraživači koriste heading tagove kako bi razumjeli strukturu i važnost sadržaja na stranici. Naslov `<h1>` je ključan za SEO jer daje naznake o glavnoj temi stranice.

3. **Automatsko stiliziranje**:
   Preglednici automatski stiliziraju heading elemente sa različitim veličinama fonta i marginama. `<h1>` je obično najveći po veličini, dok je `<h6>` najmanji.

4. **Pristupačnost**:
   Heading tagovi pomažu korisnicima koji koriste čitače ekrana da brže navigiraju kroz sadržaj, jer čitači ekrana mogu prepoznati hijerarhiju naslova i omogućiti lakšu navigaciju kroz stranicu.

### Osnovni primjer

```html
<h1>Naslov 1</h1>
<h2>Naslov 2</h2>
<h3>Naslov 3</h3>
<h4>Naslov 4</h4>
<h5>Naslov 5</h5>
<h6>Naslov 6</h6>
```

- `<h1>`: Najvažniji naslov, koristi se za glavni naslov stranice.
- `<h2>`: Sljedeći po važnosti, obično označava sekcije.
- `<h3>`: Označava podsekcije unutar `<h2>` sekcija.
- `<h4>`, `<h5>`, `<h6>`: Manje važni naslovi, koriste se za daljnju podjelu sadržaja.

### Stiliziranje heading tagova

Možete koristiti CSS za prilagođavanje izgleda heading tagova, uključujući veličinu fonta, boju, marginu i poravnanje.

**Primjer CSS stilizacije**:

```html
<h1 class="custom-h1">Naslov sa stilom</h1>

<style>
  .custom-h1 {
    font-size: 36px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }
</style>
```

### Primjeri korištenja heading tagova

1. **Glavni naslov stranice (`<h1>`)**:

   ```html
   <h1>Dobrodošli na našu web stranicu</h1>
   ```

2. **Sekcije i podsekcije (`<h2>` i `<h3>`)**:

   ```html
   <h2>O nama</h2>
   <h3>Naša misija</h3>
   <h3>Naš tim</h3>
   ```

3. **Dublje strukturiranje sadržaja (`<h4>` do `<h6>`)**:
   ```html
   <h4>Projekti 2023</h4>
   <h5>Projekt 1: Web dizajn</h5>
   <h6>Detalji o projektu</h6>
   ```

### Dodatne informacije

- **SEO praksa**: Koristite samo jedan `<h1>` po stranici kako biste pretraživačima jasno signalizirali glavnu temu stranice. Ostali heading tagovi (`<h2>` do `<h6>`) trebaju se koristiti u logičnom redoslijedu kako bi se osigurala hijerarhijska struktura.
- **Pristupačnost**: Korisnici koji koriste čitače ekrana oslanjaju se na heading tagove kako bi razumjeli strukturu stranice. Ispravna upotreba headinga čini vašu web stranicu pristupačnijom.

### Zaključak

Heading tagovi od `<h1>` do `<h6>` su ključni za organizaciju i strukturu sadržaja na web stranici. Pravilna hijerarhija naslova poboljšava i čitljivost stranice i njenu SEO vrijednost. Koristite heading tagove kako biste jasno predstavili glavne i podteme na svojoj stranici, osiguravajući dobru navigaciju i preglednost.
