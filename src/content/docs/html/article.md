---
title: <article>
description: HTML <article> tag
---

### HTML `<article>` Tag

`<article>` tag u HTML-u koristi se za označavanje samostalnog, nezavisnog dijela sadržaja koji može biti distribuiran i razumljiv van konteksta trenutne stranice. Ovaj tag najčešće sadrži članke, postove na blogovima, novinske članke, forume, komentare, i sličan sadržaj.

#### Osnovna sintaksa

```html
<article>
  <h2>Naslov članka</h2>
  <p>
    Ovo je paragraf unutar članka. Sadržaj članka može biti različitog tipa,
    uključujući tekst, slike, videozapise itd.
  </p>
</article>
```

- **`<article>`**: Koristi se za označavanje samostalnog dijela sadržaja, koji može biti ponovo upotrijebljen ili distribuiran.

### Karakteristike `<article>` taga

1. **Samostalan sadržaj**:
   `<article>` tag označava dio sadržaja koji može stajati samostalno. To znači da, čak i ako se izdvoji iz svoje trenutne stranice, i dalje ima smisla.

2. **Semantički značaj**:
   Korištenje `<article>` taga pomaže pretraživačima i alatima za indeksiranje (poput Google-a) da lakše razumiju strukturu i važnost sadržaja. Članci unutar `<article>` taga se smatraju važnijim i relevantnijim za pretraživače.

3. **Raznovrsnost upotrebe**:
   `<article>` se može koristiti za različite vrste sadržaja, uključujući blog postove, novinske članke, pojedinačne komentare u forumima, korisničke recenzije i slične nezavisne sadržaje.

### Primjeri korištenja `<article>` taga

1. **Blog post:**

   ```html
   <article>
     <h2>Naslov blog posta</h2>
     <p>
       Ovo je sadržaj blog posta. Može uključivati tekst, slike, i druge
       multimedijalne elemente.
     </p>
   </article>
   ```

2. **Novinski članak:**

   ```html
   <article>
     <header>
       <h1>Naslov novinskog članka</h1>
       <p><time datetime="2024-09-26">26. septembar 2024.</time></p>
     </header>
     <p>
       Ovdje ide glavni sadržaj članka koji opisuje neku novost ili događaj.
     </p>
     <footer>
       <p>Autor: <strong>Ime i prezime</strong></p>
     </footer>
   </article>
   ```

3. **Komentar na forumu:**
   ```html
   <article>
     <header>
       <h3>Korisničko ime</h3>
       <p>
         <time datetime="2024-09-26T10:30">26. septembar 2024. u 10:30h</time>
       </p>
     </header>
     <p>Ovo je sadržaj korisničkog komentara na forumu.</p>
   </article>
   ```

### Korištenje `<article>` sa drugim elementima

`<article>` se često koristi zajedno sa drugim semantičkim elementima kao što su `<section>`, `<header>`, i `<footer>` za strukturiranje sadržaja.

**Primjer:**

```html
<article>
  <header>
    <h1>Naslov članka</h1>
    <p>Autor: Ime Autora</p>
  </header>
  <p>
    Ovo je glavni dio članka. Može sadržavati više paragrafa, slike, i druge
    multimedijalne sadržaje.
  </p>
  <footer>
    <p>Objavljeno: <time datetime="2024-09-26">26. septembar 2024.</time></p>
  </footer>
</article>
```

### Dodatne informacije

- **SEO**: Korištenje `<article>` taga može poboljšati SEO jer pretraživači bolje prepoznaju važan sadržaj koji se može nezavisno indeksirati.
- **Pristupačnost**: Pomaže čitačima ekrana da identifikuju važan, samostalan sadržaj na stranici, što poboljšava korisničko iskustvo.

- **Višestruki članci**: Na jednoj stranici može biti više `<article>` elemenata ako postoji više nezavisnih sadržaja, kao što su recenzije proizvoda ili postovi na blogu.

### Zaključak

`<article>` tag je ključan HTML element za označavanje sadržaja koji ima smisla i van konteksta trenutne stranice. Ovaj tag poboljšava semantičku strukturu web stranice, olakšava pretraživačima indeksiranje sadržaja, te omogućava bolje korisničko iskustvo. Preporučuje se korištenje `<article>` taga za svaki samostalan dio sadržaja na vašoj stranici.
