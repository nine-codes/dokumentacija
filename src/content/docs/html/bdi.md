---
title: <bdi>
description: HTML <bdi> tag
---

### HTML `<bdi>` Tag

`<bdi>` (Bi-Directional Isolation) tag u HTML-u koristi se za izolaciju dijela teksta koji može imati drugačiji smjer pisanja u odnosu na okolni tekst. Ovaj tag je posebno koristan kada radite s dvosmjernim tekstovima (kao što su arapski ili hebrejski) koji se pišu s desna na lijevo (RTL), dok je većina drugih jezika kao što je bosanski ili engleski napisana s lijeva na desno (LTR).

#### Osnovna sintaksa

```html
<p>Ovo je primjer s imenom korisnika: <bdi>محمد</bdi>.</p>
```

- **`<bdi>`**: Izoluje tekstualni fragment kako bi spriječio da njegov smjer pisanja utječe na ostatak teksta.

### Karakteristike `<bdi>` taga

1. **Izolacija smjera teksta**:
   Kada se koristi `<bdi>`, tekst unutar ovog elementa se prikazuje bez ometanja smjera okolnog teksta. Ovo je važno za aplikacije koje prikazuju korisnički generisan sadržaj (npr. imena korisnika ili brojevi) koji mogu imati različite smjerove pisanja.

2. **Dvosmjerni tekst**:
   `<bdi>` tag je posebno koristan kada se mora prikazati dvosmjerni tekst (LTR i RTL), a da pritom ne dođe do promjena u izgledu ili narušavanja smjera osnovnog teksta.

### Primjeri korištenja `<bdi>` taga

1. **Izolacija RTL teksta unutar LTR konteksta:**

   ```html
   <p>Korisnik <bdi>محمد</bdi> je poslao poruku.</p>
   ```

   Ovdje je ime "محمد" napisano s desna na lijevo (RTL), ali zahvaljujući `<bdi>` tagu, ono ne utiče na smjer pisanja ostatka rečenice.

2. **Izolacija dinamički generisanog sadržaja:**
   ```html
   <p>Korisničko ime: <bdi>user123</bdi></p>
   ```
   Ako korisničko ime može sadržavati tekst iz različitih jezika i smjerova pisanja, `<bdi>` tag osigurava da neće doći do promjena u izgledu ili pogrešnog prikaza teksta.

### Kada koristiti `<bdi>`

- **Međunarodni tekst**: Kada prikazujete sadržaj koji može uključivati jezike koji koriste različite smjerove pisanja (npr. hebrejski, arapski, ili tekstove na latinskom pismu), `<bdi>` osigurava da smjer teksta unutar elementa bude ispravno prikazan, bez uticaja na ostatak stranice.
- **Dinamički sadržaj**: Korištenje `<bdi>` je vrlo korisno u situacijama kada radite s dinamički generisanim tekstom koji može sadržavati različite jezike, simbole, ili stilove pisanja.

### Razlike između `<bdi>` i drugih elemenata za smjer teksta

1. **`<bdi>` vs `<bdo>`**:

   - `<bdi>` automatski izolira tekst i sprječava miješanje smjerova pisanja.
   - `<bdo>` se koristi za eksplicitno definiranje smjera teksta (`dir` atribut) i ne radi automatsku izolaciju.

2. **`<bdi>` vs `dir` atribut**:
   - `dir` atribut definiše smjer teksta za cijeli element (LTR ili RTL), dok `<bdi>` automatski izoluje tekstualni fragment unutar miješanih smjerova pisanja.

### Dodatne informacije

- **Podrška u preglednicima**: `<bdi>` tag je podržan u većini modernih preglednika i korisno je rješenje za web stranice koje moraju podržavati višejezične tekstove i dvosmjerno pisanje.

- **Pristupačnost**: Korištenje `<bdi>` tag-a može poboljšati pristupačnost web stranica jer sprječava vizualne smetnje i pogrešno prikazivanje dvosmjernog teksta.

### Primjer korištenja u kombinaciji s drugim elementima

```html
<p>Proizvod <bdi>منتج</bdi> je dodan u vašu košaricu.</p>
```

U ovom primjeru, riječ "منتج" (proizvod) je na arapskom jeziku (RTL smjer), ali zahvaljujući `<bdi>`, ona ne mijenja smjer cijelog paragrafa.

### Zaključak

`<bdi>` tag je izuzetno koristan kada radite s dvosmjernim tekstom ili sadržajem koji dolazi iz različitih jezika. On automatski izoluje tekstualni fragment i omogućava pravilno prikazivanje smjera pisanja bez utjecaja na okolni tekst. Ovaj tag je važan za poboljšanje vizualnog prikaza i pristupačnosti na web stranicama koje podržavaju višejezični sadržaj.
