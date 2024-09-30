---
title: <bdo>
description: HTML <bdo> tag
---

### HTML `<bdo>` Tag

`<bdo>` (Bi-Directional Override) tag u HTML-u koristi se za eksplicitno promjenu smjera teksta. Ovaj tag je koristan kada želite ručno kontrolisati smjer pisanja teksta, bilo da je to s lijeva na desno (LTR) ili s desna na lijevo (RTL).

#### Osnovna sintaksa

```html
<p>Normalan tekst <bdo dir="rtl">ovaj tekst ide s desna na lijevo</bdo>.</p>
```

- **`<bdo dir>`**: Definiše smjer teksta. Vrijednosti mogu biti `ltr` (s lijeva na desno) ili `rtl` (s desna na lijevo).

### Karakteristike `<bdo>` taga

1. **Ručno podešavanje smjera teksta**:
   `<bdo>` tag omogućava da ručno definišete smjer u kojem će se prikazivati tekst, bez obzira na jezik koji se koristi. Ovo je korisno kada želite promijeniti podrazumijevani smjer pisanja za dio teksta unutar stranice.

2. **Atribut `dir`**:
   Atribut `dir` određuje smjer pisanja teksta unutar `<bdo>` taga. Vrijednosti mogu biti:
   - **`ltr`**: S lijeva na desno (Left to Right).
   - **`rtl`**: S desna na lijevo (Right to Left).

### Primjeri korištenja `<bdo>` taga

1. **Promjena smjera teksta u LTR smjer:**

   ```html
   <p>
     Ovo je normalan tekst, ali <bdo dir="ltr">ovo je tekst u LTR smjeru</bdo>.
   </p>
   ```

   Ovdje je smjer teksta unutar `<bdo>` elementa eksplicitno postavljen na s lijeva na desno (LTR).

2. **Promjena smjera teksta u RTL smjer:**
   ```html
   <p>Ovo je tekst <bdo dir="rtl">koji ide s desna na lijevo</bdo>.</p>
   ```
   U ovom primjeru, smjer teksta je preokrenut na s desna na lijevo (RTL), bez obzira na jezik ili podrazumijevani smjer pisanja.

### Kada koristiti `<bdo>`

- **Kontrola nad smjerom pisanja**: Ako želite ručno kontrolirati smjer u kojem se tekst prikazuje, na primjer kada je tekst na jeziku koji se piše s desna na lijevo, ili obrnuto, `<bdo>` vam omogućava da to lako definišete.

- **Kombinacija jezika**: Kada imate tekst koji sadrži jezike koji koriste različite smjerove pisanja (LTR i RTL), `<bdo>` vam omogućava precizno kontrolisanje smjera pisanja kako bi se sadržaj pravilno prikazao.

### Razlike između `<bdo>` i drugih elemenata za smjer teksta

1. **`<bdo>` vs `<bdi>`**:

   - **`<bdo>`**: Ručno kontroliše smjer teksta unutar elementa. Koristi se kada želite eksplicitno postaviti smjer teksta.
   - **`<bdi>`**: Izoluje dio teksta tako da njegov smjer ne utiče na okolni sadržaj. Koristi se kada ne želite promijeniti smjer, već izolovati tekstualni fragment.

2. **`<bdo>` vs `dir` atribut**:
   - **`<bdo>`**: Mijenja smjer teksta samo unutar specifičnog dijela HTML dokumenta.
   - **`dir` atribut**: Može biti primijenjen na bilo koji HTML element za postavljanje smjera teksta, ali `<bdo>` pruža bolju kontrolu nad specifičnim dijelovima teksta.

### Primjeri kombinacije s drugim elementima

```html
<p>Tekst normalnog smjera: <bdo dir="rtl">Ovo je tekst u RTL smjeru</bdo>.</p>
<p>Još jedan primjer s LTR tekstom: <bdo dir="ltr">12345</bdo>.</p>
```

U ovom primjeru, prvi `<bdo>` tag preokreće smjer na RTL za arapske brojeve, dok drugi tag postavlja smjer na LTR za numerički tekst.

### Ograničenja `<bdo>`

1. **Ručno podešavanje**:
   `<bdo>` zahtijeva da ručno odredite smjer pisanja, što može biti nepraktično u dinamičnim situacijama gdje ne znate unaprijed koji će se jezici ili smjerovi pisanja koristiti.

2. **Ne preporučuje se za izolaciju**:
   Ako želite izolovati tekstualni fragment bez mijenjanja smjera, `<bdi>` tag je bolji izbor.

### Zaključak

`<bdo>` tag pruža jednostavan način za eksplicitno mijenjanje smjera teksta unutar HTML dokumenta. Koristan je u situacijama kada radite s više jezika i trebate ručno kontrolisati smjer pisanja dijelova teksta. Iako pruža veliku fleksibilnost, treba ga koristiti pažljivo kako ne bi poremetio strukturu i čitljivost ostatka teksta na stranici.
