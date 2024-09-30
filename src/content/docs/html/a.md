---
title: <a>
description: Link tag
---

### HTML `<a>` Tag

`<a>` tag (anchor tag) u HTML-u se koristi za kreiranje hiperlinkova. Hiperlinkovi omogućavaju korisnicima da klikom na određeni tekst ili element budu preusmjereni na druge web stranice, dokumente ili lokacije unutar iste stranice.

#### Osnovna sintaksa

```html
<a href="https://www.primjer.com">Kliknite ovdje</a>
```

- **Otvoreni tag**: `<a>`
- **Zatvoreni tag**: `</a>`
- **Atribut**: `href` (Hypertext Reference), koji specificira odredište linka.

### Atributi `<a>` taga

1. **`href` (Hypertext Reference)**:  
   Ovo je najvažniji atribut `<a>` taga. On definira URL ili odredište gdje će korisnik biti preusmjeren nakon klika na link.

   **Primjer:**

   ```html
   <a href="https://www.primjer.com">Posjetite našu stranicu</a>
   ```

2. **`target`**:  
   Ovaj atribut određuje kako će se otvarati link. Najčešće korištena vrijednost je `_blank`, koja otvara link u novom prozoru ili kartici.

   **Primjer:**

   ```html
   <a href="https://www.primjer.com" target="_blank">Otvori u novoj kartici</a>
   ```

3. **`title`**:  
   Ovaj atribut prikazuje dodatni tekst (tooltip) kada korisnik pređe mišem preko linka.

   **Primjer:**

   ```html
   <a href="https://www.primjer.com" title="Kliknite ovdje za više informacija">
     Više informacija
   </a>
   ```

4. **`rel`**:  
   Atribut `rel` definira odnos između trenutne stranice i povezanog URL-a. Na primjer, `noopener` i `noreferrer` su često korišteni za sigurnost kada se linkovi otvaraju u novom prozoru.

   **Primjer:**

   ```html
   <a href="https://www.primjer.com" target="_blank" rel="noopener noreferrer">
     Siguran link
   </a>
   ```

5. **`download`**:  
   Ovaj atribut omogućava korisnicima da preuzmu datoteku umjesto da posjete link. Vrijednost atributa može specificirati ime datoteke za preuzimanje.

   **Primjer:**

   ```html
   <a href="/files/dokument.pdf" download="moj_dokument.pdf"
     >Preuzmi dokument</a
   >
   ```

### Primjeri korištenja `<a>` taga

1. **Link prema eksternoj stranici:**

   ```html
   <a href="https://www.google.com">Google</a>
   ```

2. **Link prema lokalnoj datoteci:**

   ```html
   <a href="/datoteke/primjer.pdf">Preuzmi PDF</a>
   ```

3. **Link prema određenom dijelu stranice (Anchor link):**

   ```html
   <a href="#sekcija">Skoči na sekciju</a>

   <h2 id="sekcija">Ovo je ciljna sekcija</h2>
   ```

4. **Email link:**
   ```html
   <a href="mailto:primjer@email.com">Pošalji email</a>
   ```

### Dodatne informacije

- **SEO**: Koristite deskriptivne tekstove za linkove kako bi pretraživači bolje razumjeli sadržaj stranice.
- **Pristupačnost**: Pobrinite se da linkovi imaju jasan i razumljiv tekst, kako bi bili korisni za sve korisnike, uključujući one koji koriste čitače ekrana.

### Zaključak

`<a>` tag je osnovni HTML element koji omogućava kreiranje linkova prema internim i eksternim resursima. Pravilna upotreba atributa poput `href`, `target`, `rel` i `download` pruža veliku fleksibilnost i sigurnost prilikom rada sa linkovima.
