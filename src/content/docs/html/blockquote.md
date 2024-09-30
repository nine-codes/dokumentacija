---
title: <blockquote>
description: HTML <blockquote> tag
---

### HTML `<blockquote>` Tag

`<blockquote>` tag u HTML-u koristi se za označavanje dugih citata koji dolaze iz nekog vanjskog izvora. Tipično, ovaj tag se koristi za prikazivanje blokova teksta koji citiraju cijeli odlomak ili više odlomaka. U modernim preglednicima, sadržaj unutar `<blockquote>` elementa se često stilizira s uvlačenjem ili drugim stilovima kako bi se vizualno razlikovao od ostatka teksta.

#### Osnovna sintaksa

```html
<blockquote cite="https://www.izvor.com/citat">
  Ovo je dugi citat iz nekog izvora.
</blockquote>
```

- **`<blockquote>`**: Označava blok citiranog teksta.
- **`cite` atribut**: (Opcionalno) Sadrži URL izvora citata.

### Karakteristike `<blockquote>` taga

1. **Vizualna prezentacija**:
   Tekst unutar `<blockquote>` elementa obično je stiliziran s uvlačenjem u odnosu na ostatak teksta, kako bi se naglasilo da se radi o citatu.

2. **Atribut `cite`**:
   Ovaj atribut može se koristiti da navede URL izvora citata, iako se obično ne prikazuje direktno na stranici. Služi kao meta-informacija o izvoru, što je korisno za optimizaciju pretraživača (SEO) ili druge automatizirane sisteme.

### Primjeri korištenja `<blockquote>` taga

1. **Jednostavan citat bez izvora:**

   ```html
   <blockquote>Ovo je jednostavan citat bez navođenja izvora.</blockquote>
   ```

2. **Citat s izvorom:**
   ```html
   <blockquote cite="https://www.primjer.com/izvor">
     "Ovo je citat koji dolazi iz vanjskog izvora."
   </blockquote>
   ```
   Ovdje, citirani tekst dolazi s navedenog URL-a, iako sam `cite` atribut nije vidljiv u prikazu stranice.

### Kada koristiti `<blockquote>`

- **Za duže citate**: `<blockquote>` se koristi kada trebate citirati cijeli odlomak ili više rečenica iz nekog vanjskog izvora.
- **Za citate s vanjskim izvorima**: Ako želite navesti izvor citata (npr. link ka članku, knjizi ili web stranici), `<blockquote>` tag omogućava dodavanje `cite` atributa.

### Razlike između `<blockquote>` i `<q>` taga

1. **`<blockquote>`**: Koristi se za duge citate i obično je stiliziran kao blok teksta s uvlačenjem.
2. **`<q>`**: Koristi se za kraće citate unutar rečenice i obično automatski dodaje navodnike oko citata.

### Primjeri kombinacije s drugim elementima

```html
<blockquote cite="https://www.primjer.com/izvor">
  "Uspjeh nije konačan, neuspjeh nije fatalan: hrabrost da nastavite je ono što
  se računa."
</blockquote>
<cite>- Winston Churchill</cite>
```

Ovdje je citiran poznati citat s dodatkom imena autora pomoću `<cite>` taga.

### Stilizacija `<blockquote>` taga pomoću CSS-a

`<blockquote>` element možete dodatno stilizirati koristeći CSS. Na primjer, možete promijeniti uvlačenje, boju teksta, veličinu fonta ili dodati okvir.

```css
blockquote {
  margin-left: 20px;
  font-style: italic;
  color: #555;
}
```

### Ograničenja `<blockquote>`

1. **Namijenjen za duže citate**:
   `<blockquote>` tag nije prikladan za kratke citate koji su sastavni dio rečenice. Za takve situacije, bolji je izbor `<q>` tag.
2. **Atribut `cite` nije uvijek vidljiv**:
   Iako je `cite` atribut koristan za SEO i metapodatke, on nije prikazan korisnicima. Ako želite da korisnici vide izvor, morate ga ručno prikazati pomoću `<a>` ili `<cite>` tagova.

### Primjer upotrebe s URL-om izvora

```html
<blockquote cite="https://www.wikipedia.org">
  "Wikipedia je slobodna enciklopedija koju svi mogu uređivati."
</blockquote>
<cite><a href="https://www.wikipedia.org">Wikipedia</a></cite>
```

U ovom primjeru, citat iz Wikipedije je označen sa `<blockquote>`, dok je URL izvora prikazan pomoću `<cite>` i `<a>` elemenata.

### Zaključak

`<blockquote>` tag je idealan za prikazivanje dužih citata iz vanjskih izvora na web stranici. Njegova upotreba poboljšava čitljivost i organizaciju sadržaja, te može poboljšati SEO kada se koristi s `cite` atributom. S obzirom na to da većina preglednika automatski stilizuje `<blockquote>` s uvlačenjem, ovaj tag je korisno sredstvo za odvajanje citata od ostatka teksta na stranici.
