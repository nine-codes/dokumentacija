---
title: <aside>
description: HTML <aside> tag
---

### HTML `<aside>` Tag

`<aside>` tag u HTML-u koristi se za označavanje sadržaja koji je povezan sa glavnim sadržajem stranice, ali nije njegov direktni dio. Ovaj sadržaj se obično pojavljuje u bočnim trakama ili kao dodatni sadržaj koji pruža dodatne informacije, poput citata, povezanih linkova, oglasa ili bočnih napomena.

#### Osnovna sintaksa

```html
<aside>
  <h2>Povezani članci</h2>
  <ul>
    <li><a href="#članak1">Članak 1</a></li>
    <li><a href="#članak2">Članak 2</a></li>
  </ul>
</aside>
```

- **`<aside>`**: Koristi se za označavanje dodatnog sadržaja koji je povezan, ali nije centralni dio glavnog sadržaja stranice.

### Karakteristike `<aside>` taga

1. **Dodatni sadržaj**:
   `<aside>` obuhvata informacije koje podržavaju ili se odnose na glavni sadržaj stranice, ali nisu ključne za razumijevanje glavnog teksta. To mogu biti bočne trake s povezanima člancima, oglasi, poveznice na društvene mreže, i sličan sadržaj.

2. **Pozicioniranje**:
   `<aside>` tag se obično koristi u bočnim trakama web stranice, ali se može koristiti i unutar `<article>` ili `<section>` elemenata kao dodatna napomena ili objašnjenje. Na primjer, može se koristiti za citate ili dodatne informacije unutar članka.

3. **Semantička vrijednost**:
   Korištenje `<aside>` taga pomaže pretraživačima i preglednicima da shvate koji dio sadržaja je dodatni, a koji je centralni. To pomaže u organizaciji informacija na stranici i u boljoj optimizaciji za pretraživače.

### Primjeri korištenja `<aside>` taga

1. **Bočna traka s povezanim člancima:**

   ```html
   <aside>
     <h2>Povezani članci</h2>
     <ul>
       <li><a href="#članak1">Kako poboljšati SEO</a></li>
       <li><a href="#članak2">Prednosti korištenja semantičkog HTML-a</a></li>
     </ul>
   </aside>
   ```

2. **Napomena unutar članka:**

   ```html
   <article>
     <h1>Glavni naslov članka</h1>
     <p>Ovo je glavni sadržaj članka...</p>
     <aside>
       <p>
         Napomena: Ne zaboravite da je ažuriranje sadržaja važno za SEO
         optimizaciju.
       </p>
     </aside>
   </article>
   ```

3. **Bočna traka s oglasima:**
   ```html
   <aside>
     <h3>Oglasi</h3>
     <p>Pogledajte naše najnovije proizvode!</p>
   </aside>
   ```

### Korištenje `<aside>` sa drugim elementima

`<aside>` tag se često koristi zajedno sa `<article>` i `<section>` za dodavanje dodatnih informacija koje su vezane za te dijelove sadržaja. Također se može koristiti unutar `<main>` elementa kao dio bočne trake.

**Primjer:**

```html
<main>
  <article>
    <h1>Naslov članka</h1>
    <p>Ovdje ide glavni tekst članka...</p>
  </article>

  <aside>
    <h2>Povezani sadržaj</h2>
    <p>Ovdje možete pronaći slične članke ili relevantne informacije.</p>
  </aside>
</main>
```

### Dodatne informacije

- **Pristupačnost**: `<aside>` tag pomaže korisnicima da razlikuju glavni i sporedni sadržaj, što poboljšava korisničko iskustvo i navigaciju na stranici.
- **SEO**: Korištenje `<aside>` može pomoći pretraživačima da razumiju koji dijelovi stranice su podržavajući sadržaj, a koji predstavljaju glavni fokus. To može poboljšati strukturu stranice i njen rang na pretraživačima.

- **Pozicioniranje u CSS-u**: `<aside>` se često pozicionira pomoću CSS stilova tako da se prikaže sa strane glavnog sadržaja, obično u bočnim trakama.

### Zaključak

`<aside>` tag je važan HTML element za strukturiranje dodatnog ili sporednog sadržaja na stranici. Njegovo pravilno korištenje može poboljšati semantičku strukturu, pristupačnost i SEO optimizaciju web stranice, čineći je bolje organiziranom i razumljivijom za korisnike i pretraživače.
