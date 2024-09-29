---
title: <audio>
description: HTML <audio> tag
---

### HTML `<audio>` Tag

`<audio>` tag u HTML-u koristi se za ugradnju audio datoteka na web stranicu. Pomoću ovog taga možete dodati zvuk, muziku ili druge audio sadržaje koje korisnici mogu reproducirati direktno u pregledniku bez potrebe za vanjskim playerom.

#### Osnovna sintaksa

```html
<audio controls>
  <source src="audio-sample.mp3" type="audio/mpeg" />
  Vaš preglednik ne podržava audio element.
</audio>
```

- **`<audio>`**: Omogućava ugrađivanje audio datoteka u HTML stranicu.
- **`controls`**: Atribut koji prikazuje kontrole za reprodukciju (play, pause, volume).
- **`<source>`**: Definira izvor audio datoteke i njen tip.

### Karakteristike `<audio>` taga

1. **Podrška za različite formate**:
   `<audio>` tag može podržavati različite formate zvučnih datoteka, kao što su MP3 (`audio/mpeg`), Ogg (`audio/ogg`), i WAV (`audio/wav`). Preporučuje se pružiti više izvora kako bi se osigurala kompatibilnost sa različitim preglednicima.

2. **Kontrole za korisnike**:
   Korištenjem atributa `controls`, korisnici će moći pauzirati, reprodukovati, ili kontrolisati jačinu zvuka direktno putem ugrađenog playera u pregledniku. Ako ne koristite `controls`, audio će biti učitan, ali neće biti mogućnosti interakcije.

3. **Automatsko reproduciranje i petlja**:
   `<audio>` tag također podržava atribute `autoplay` (automatski pokreće zvuk kad se stranica učita) i `loop` (neprekidno ponavljanje audio zapisa).

### Primjeri korištenja `<audio>` taga

1. **Osnovni audio player:**

   ```html
   <audio controls>
     <source src="muzika.mp3" type="audio/mpeg" />
     Vaš preglednik ne podržava audio element.
   </audio>
   ```

2. **Dodavanje više formata za kompatibilnost:**

   ```html
   <audio controls>
     <source src="zvuk.ogg" type="audio/ogg" />
     <source src="zvuk.mp3" type="audio/mpeg" />
     Vaš preglednik ne podržava audio element.
   </audio>
   ```

3. **Automatska reprodukcija i petlja:**
   ```html
   <audio controls autoplay loop>
     <source src="petlja.mp3" type="audio/mpeg" />
     Vaš preglednik ne podržava audio element.
   </audio>
   ```

### Atributi `<audio>` taga

1. **`controls`**:
   Omogućava prikaz osnovnih kontrola (play, pause, volume).

2. **`autoplay`**:
   Automatski pokreće reprodukciju zvuka kada se stranica učita. Ovo može biti korisno za pozadinsku muziku, ali je važno koristiti ovaj atribut s oprezom kako ne bi narušio korisničko iskustvo.

3. **`loop`**:
   Kada je ovaj atribut prisutan, audio datoteka se ponavlja unedogled.

4. **`muted`**:
   Početno isključuje zvuk audio datoteke.

5. **`preload`**:
   Kontroliše način na koji preglednik unaprijed učitava audio datoteku:
   - `none`: Ne učitava audio prije nego što korisnik klikne na play.
   - `metadata`: Učitava samo osnovne informacije (trajanje, veličinu).
   - `auto`: Automatski učitava cijeli audio, spreman za reprodukciju.

### Dodatne informacije

- **Pristupačnost**: Preporučuje se uvijek dodati tekstualni opis ili alternativni sadržaj unutar `<audio>` taga za korisnike čiji preglednici ne podržavaju audio element.
- **Podrška u preglednicima**: Većina modernih preglednika podržava `<audio>` tag, ali različiti preglednici mogu preferirati različite formate audio datoteka. Stoga je dobra praksa pružiti više formata (npr. MP3 i Ogg) za bolju kompatibilnost.

- **Skriveni audio**: Ako želite da audio bude reproduciran bez prikaza kontrola, možete izostaviti `controls`, no ovo može stvoriti loše korisničko iskustvo ako nije jasno da se zvuk reproducira.

### Zaključak

`<audio>` tag je koristan HTML element za dodavanje zvuka na web stranicu. Omogućava ugrađivanje audio datoteka sa jednostavnim kontrolama za reprodukciju, pauzu i jačinu zvuka. Uz podršku za različite formate i atribute kao što su `autoplay` i `loop`, ovaj tag pruža fleksibilnost u radu sa audio sadržajem na web stranicama.
