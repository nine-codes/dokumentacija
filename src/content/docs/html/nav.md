---
title: <nav>
description: HTML <nav> tag
---

### HTML `<nav>` Tag

`<nav>` tag u HTML-u se koristi za definiranje navigacijskog dijela web stranice. Ovaj element obuhvata linkove koji omogućavaju korisnicima navigaciju kroz različite dijelove web stranice.

#### Osnovna sintaksa

```html
<nav>
  <ul>
    <li><a href="#home">Početna</a></li>
    <li><a href="#about">O nama</a></li>
    <li><a href="#contact">Kontakt</a></li>
  </ul>
</nav>
```

- **`<nav>`**: Definira navigacijski dio web stranice.

### Karakteristike `<nav>` taga

1. **Navigacija**:
   `<nav>` tag obuhvata navigacijske linkove koji omogućavaju korisnicima da se kreću kroz različite dijelove web stranice.

2. **Semantička vrijednost**:
   Korištenje `<nav>` taga pomaže pretraživačima i alatima za pristupačnost da prepoznaju navigacijske dijelove stranice.

3. **Fleksibilnost**:
   `<nav>` tag može sadržavati različite vrste navigacijskih elemenata, uključujući liste, linkove, i dugmad.

### Primjeri korištenja `<nav>` taga

1. **Osnovna navigacija:**

   ```html
   <nav>
     <ul>
       <li><a href="#home">Početna</a></li>
       <li><a href="#about">O nama</a></li>
       <li><a href="#contact">Kontakt</a></li>
     </ul>
   </nav>
   ```

2. **Navigacija sa dugmadima:**

   ```html
   <nav>
     <button onclick="location.href='#home'">Početna</button>
     <button onclick="location.href='#about'">O nama</button>
     <button onclick="location.href='#contact'">Kontakt</button>
   </nav>
   ```

3. **Horizontalna navigacija:**
   ```html
   <nav>
     <ul style="list-style-type: none; display: flex;">
       <li style="margin-right: 10px;"><a href="#home">Početna</a></li>
       <li style="margin-right: 10px;"><a href="#about">O nama</a></li>
       <li><a href="#contact">Kontakt</a></li>
     </ul>
   </nav>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `<nav>` taga poboljšava pristupačnost jer omogućava korisnicima koji koriste čitače ekrana da lakše prepoznaju i koriste navigacijske dijelove stranice.
- **SEO**: Navigacijski linkovi unutar `<nav>` taga mogu poboljšati SEO jer pretraživači prepoznaju važnost tih linkova za strukturu stranice.
- **Stilizacija**: `<nav>` tag se može stilizirati pomoću CSS-a kako bi se vizualno uskladio sa dizajnom stranice.

### Zaključak

`<nav>` tag je ključan element za definiranje navigacijskih dijelova web stranice. Omogućava korisnicima da se lako kreću kroz različite dijelove stranice, poboljšava pristupačnost i SEO, te se može fleksibilno stilizirati pomoću CSS-a.
