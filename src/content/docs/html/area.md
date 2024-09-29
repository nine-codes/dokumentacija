---
title: <area>
description: HTML Area tag
---

### HTML `<area>` Tag

`<area>` tag u HTML-u se koristi unutar `<map>` elementa za definiranje klikalnih područja (hotspotova) unutar slike. Ovaj tag omogućava da se različiti dijelovi slike povežu s različitim odredištima (linkovima), čineći sliku interaktivnom i funkcionalnom.

#### Osnovna sintaksa

```html
<img src="mapa.png" usemap="#mapa" />

<map name="mapa">
  <area
    shape="rect"
    coords="34,44,270,350"
    href="https://www.primjer1.com"
    alt="Link 1"
  />
  <area
    shape="circle"
    coords="337,300,44"
    href="https://www.primjer2.com"
    alt="Link 2"
  />
</map>
```

- **`<area>`** element koristi se unutar `<map>` kako bi se definirali klikalni dijelovi slike.
- **`usemap`** atribut na slici povezuje sliku s mapom putem njenog imena.

### Atributi `<area>` taga

1. **`shape`**:  
   Ovaj atribut definira oblik klikalnog područja na slici. Moguće vrijednosti su:

   - `rect`: Pravokutno područje.
   - `circle`: Kružni oblik.
   - `poly`: Poligonalni (mnogokutni) oblik.
   - `default`: Podrazumijevano područje, koje prekriva cijelu sliku.

   **Primjer:**

   ```html
   <area
     shape="rect"
     coords="50,50,100,100"
     href="https://www.primjer.com"
     alt="Pravokutni link"
   />
   ```

2. **`coords`**:  
   Definira koordinate za područje koje je specificirano atributom `shape`. Koordinate se razlikuju ovisno o obliku:

   - Za `rect`, potrebno je navesti četiri vrijednosti: x1, y1, x2, y2 (gornji lijevi i donji desni kut).
   - Za `circle`, tri vrijednosti: x, y, radijus.
   - Za `poly`, niz vrijednosti koje definiraju svaku tačku mnogokuta.

   **Primjeri:**

   - `rect`: `coords="50,50,100,100"`
   - `circle`: `coords="75,75,50"`
   - `poly`: `coords="25,25,75,75,50,100"`

3. **`href`**:  
   URL adresa na koju će korisnik biti preusmjeren kada klikne na određeno područje slike.

   **Primjer:**

   ```html
   <area
     shape="circle"
     coords="150,150,75"
     href="https://www.primjer.com"
     alt="Kružni link"
   />
   ```

4. **`alt`**:  
   Tekstualni opis područja. Ovaj atribut je važan za pristupačnost i prikazuje se kada se slika ne može učitati ili za korisnike koji koriste čitače ekrana.

   **Primjer:**

   ```html
   <area
     shape="rect"
     coords="50,50,100,100"
     href="https://www.primjer.com"
     alt="Pravokutni link"
   />
   ```

5. **`target`**:  
   Definira kako će se otvarati link. Može koristiti vrijednosti kao `_blank` (otvori u novom prozoru/tabu).

   **Primjer:**

   ```html
   <area
     shape="poly"
     coords="10,10,50,50,100,100"
     href="https://www.primjer.com"
     target="_blank"
     alt="Poligonalni link"
   />
   ```

### Korištenje `<area>` unutar `<map>` elementa

`<map>` element definira mapu slike, dok `<area>` elementi unutar mape definiraju specifične klikalne dijelove. Svaka `<area>` oznaka odgovara određenom dijelu slike definiranom pomoću koordinata.

**Primjer sa svim elementima:**

```html
<img src="primjer-slike.png" usemap="#mapa-slike" alt="Primjer mape slike" />

<map name="mapa-slike">
  <area
    shape="rect"
    coords="34,44,270,350"
    href="https://www.primjer1.com"
    alt="Link 1"
  />
  <area
    shape="circle"
    coords="337,300,44"
    href="https://www.primjer2.com"
    alt="Link 2"
  />
  <area
    shape="poly"
    coords="172,120,245,200,350,100"
    href="https://www.primjer3.com"
    alt="Link 3"
  />
</map>
```

### Primjeri korištenja `<area>` taga

1. **Pravokutni oblik sa linkom:**

   ```html
   <area
     shape="rect"
     coords="50,50,200,200"
     href="https://www.primjer.com"
     alt="Pravokutni link"
   />
   ```

2. **Kružni oblik sa linkom:**

   ```html
   <area
     shape="circle"
     coords="150,150,75"
     href="https://www.primjer.com"
     alt="Kružni link"
   />
   ```

3. **Poligonalni (mnogokutni) oblik sa linkom:**
   ```html
   <area
     shape="poly"
     coords="25,25,75,75,50,100"
     href="https://www.primjer.com"
     alt="Poligonalni link"
   />
   ```

### Stiliziranje `<area>` tagova

`<area>` tagovi ne mogu se direktno stilizirati pomoću CSS-a. Međutim, možete stilizirati samu sliku `<img>` element, a klikalna područja će pratiti koordinatni raspored unutar slike.

**Primjer stilizacije slike:**

```html
<img src="primjer-slike.png" usemap="#mapa" class="stilizirana-slika" />

<style>
  .stilizirana-slika {
    border: 2px solid #333;
    width: 100%;
    height: auto;
  }
</style>
```

### Zaključak

`<area>` tag je ključan za kreiranje interaktivnih slika koje sadrže više klikalnih područja. Kombinacija `<map>` i `<area>` tagova omogućava dodavanje hiperlinkova na specifične dijelove slike, čineći vašu web stranicu bogatijom i funkcionalnijom. Pravilna upotreba atributa kao što su `shape`, `coords`, i `href` omogućava precizno definiranje tih područja.
