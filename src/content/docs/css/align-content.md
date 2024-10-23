---
title: align-content
description: CSS Svojstvo align-content
---

### CSS Svojstvo `align-content`

CSS Svojstvo `align-content` određuje kako se višeredni sadržaj u fleksibilnom kontejneru ili mreži poravnava duž poprečne ose.

#### Osnovna sintaksa

```css
element {
  align-content: [value];
}
```

- **`value`**: Može biti jedan od sljedećih vrijednosti: `normal`, `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.

### Primjeri korištenja `align-content` Svojstva

1. **Poravnavanje sadržaja na početku:**

   ```css
   div {
     align-content: flex-start;
   }
   ```

2. **Poravnavanje sadržaja na kraju:**

   ```css
   div {
     align-content: flex-end;
   }
   ```

3. **Poravnavanje sadržaja u centru:**

   ```css
   div {
     align-content: center;
   }
   ```

### Dodatne informacije

- **Pristupačnost**: Poravnavanje sadržaja može poboljšati čitljivost i strukturu, ali treba biti pažljivo korišteno kako ne bi ometalo korisnike.
- **Best practices**: Koristite `align-content` da poboljšate vizuelnu strukturu i čitljivost sadržaja na web stranici.

### Zaključak

CSS Svojstvo `align-content` je moćan alat za kontroliranje poravnavanja višerednog sadržaja u fleksibilnim kontejnerima i mrežama. Njegova fleksibilnost omogućava kreiranje različitih poravnavanja sadržaja sa minimalnim kodom.
