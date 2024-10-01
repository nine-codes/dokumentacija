---
title: <dialog>
description: HTML <dialog> tag
---

### HTML `<dialog>` Tag

`<dialog>` tag u HTML-u se koristi za kreiranje dijaloga ili modalnih prozora. Ovaj tag se obično koristi za prikazivanje dodatnih informacija ili interaktivnih elemenata koji zahtijevaju korisničku interakciju.

#### Osnovna sintaksa

```html
<dialog id="myDialog">
  <p>Ovo je dijalog.</p>
  <button id="closeButton">Zatvori</button>
</dialog>
<button id="openButton">Otvori dijalog</button>
```

- **`<dialog>`**: Kreira dijalog ili modalni prozor.

### Karakteristike `<dialog>` taga

1. **Dijalog ili modalni prozor**:
   `<dialog>` tag se koristi za kreiranje dijaloga ili modalnih prozora koji prikazuju dodatne informacije ili interaktivne elemente.

2. **Interaktivnost**:
   Preglednici obično prikazuju dijalog kao modalni prozor koji se može otvoriti ili zatvoriti pomoću JavaScript-a.

### Primjeri korištenja `<dialog>` taga

1. **Kreiranje dijaloga:**

   ```html
   <dialog id="myDialog">
     <p>Ovo je dijalog.</p>
     <button id="closeButton">Zatvori</button>
   </dialog>
   <button id="openButton">Otvori dijalog</button>

   <script>
     const dialog = document.getElementById('myDialog');
     const openButton = document.getElementById('openButton');
     const closeButton = document.getElementById('closeButton');

     openButton.addEventListener('click', () => {
       dialog.showModal();
     });

     closeButton.addEventListener('click', () => {
       dialog.close();
     });
   </script>
   ```

2. **Kreiranje modalnog prozora:**

   ```html
   <dialog id="myModal">
     <p>Ovo je modalni prozor.</p>
     <button id="closeModal">Zatvori</button>
   </dialog>
   <button id="openModal">Otvori modalni prozor</button>

   <script>
     const modal = document.getElementById('myModal');
     const openModalButton = document.getElementById('openModal');
     const closeModalButton = document.getElementById('closeModal');

     openModalButton.addEventListener('click', () => {
       modal.showModal();
     });

     closeModalButton.addEventListener('click', () => {
       modal.close();
     });
   </script>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje `<dialog>` taga poboljšava pristupačnost jer omogućava kreiranje dijaloga ili modalnih prozora koji prikazuju dodatne informacije ili interaktivne elemente.
- **Stilizacija**: Dijalog ili modalni prozor kreiran pomoću `<dialog>` taga može se dodatno stilizirati pomoću CSS-a kako bi se vizualno uskladio sa dizajnom stranice.

### Zaključak

`<dialog>` tag je koristan za kreiranje dijaloga ili modalnih prozora unutar HTML dokumenata. Pravilno korištenje ovog taga poboljšava čitljivost i interaktivnost dodatnih informacija ili elemenata na web stranicama.

```

Nadam se da će ova datoteka biti korisna. Ako imate dodatnih zahtjeva ili pitanja, slobodno ih postavite!
```
