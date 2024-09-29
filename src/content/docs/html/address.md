---
title: <address>
description: HTML Address element
---

### HTML `<address>` Tag

`<address>` tag u HTML-u se koristi za prikazivanje kontakt informacija autora ili vlasnika dokumenta ili članka. Najčešće se koristi za pružanje podataka kao što su e-mail adresa, fizička adresa, broj telefona, ili drugi relevantni kontakt podaci.

#### Osnovna sintaksa

```html
<address>
  Kontaktirajte nas na: <a href="mailto:info@primjer.com">info@primjer.com</a
  ><br />
  123 Primjer Ulica, Grad, Država
</address>
```

- **`<address>`**: Koristi se za označavanje kontakt informacija.
- **`<a href="mailto:">`**: Koristi se za kreiranje e-mail linka.

### Karakteristike `<address>` taga

1. **Kontakt informacije**:
   `<address>` tag služi za grupisanje kontakt informacija na logičan i pristupačan način. Obično sadrži fizičku adresu, e-mail adresu, brojeve telefona, i druge slične informacije.

2. **Semantička uloga**:
   Preglednici i pretraživači koriste `<address>` kao indikator da sadržaj unutar njega predstavlja kontakt informacije. To može pomoći u pretraživanju i prikazivanju podataka na specifičan način.

3. **Pozicioniranje u dokumentu**:
   `<address>` se najčešće pojavljuje na dnu stranice, ispod glavnog sadržaja, kao dio "footer" sekcije, ili ispod članka kao kontakt autora.

### Primjeri korištenja `<address>` taga

1. **E-mail adresa i fizička adresa:**

   ```html
   <address>
     Kontakt:
     <a href="mailto:ime.prezime@primjer.com">ime.prezime@primjer.com</a><br />
     123 Primjer Ulica, Sarajevo, BiH
   </address>
   ```

2. **Adresa firme:**
   ```html
   <address>
     Kompanija Primjer d.o.o.<br />
     456 Biznis Centar, Sarajevo, BiH<br />
     Tel: +387 33 123 456
   </address>
   ```

### Korištenje sa drugim elementima

`<address>` tag se može koristiti unutar `<footer>` taga za definisanje kontakt informacija u podnožju web stranice.

**Primjer:**

```html
<footer>
  <address>
    Autor: <a href="mailto:autor@primjer.com">autor@primjer.com</a><br />
    Web stranica: <a href="https://www.primjer.com">www.primjer.com</a><br />
    Lokacija: 789 Web Ulica, Mostar, BiH
  </address>
</footer>
```

### Dodatne informacije

- **Pristupačnost**: `<address>` tag poboljšava pristupačnost stranice jer jasno označava dio sa kontakt podacima, što je korisno za korisnike i pretraživače.
- **Ne za opći tekst**: `<address>` tag treba koristiti samo za kontakt informacije, a ne za obične fizičke adrese unutar tijela teksta.

### Zaključak

`<address>` tag je koristan HTML element za jasno označavanje i strukturiranje kontakt informacija na web stranici. Pravilno korištenje ovog taga poboljšava semantičku strukturu stranice, čini je pristupačnijom, te olakšava korisnicima pronalaženje važnih kontakt podataka.
