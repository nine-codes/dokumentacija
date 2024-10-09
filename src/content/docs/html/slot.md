---
title: <slot>
description: HTML <slot> tag
---

### HTML `<slot>` Tag

`<slot>` tag u HTML-u se koristi unutar Web Components za definiranje mjesta gdje se dinamički sadržaj može umetnuti. Omogućava prilagodbu sadržaja unutar Shadow DOM-a.

#### Osnovna sintaksa

```html
<slot name="slotName"></slot>
```

- **`<slot>`**: Element koji definira mjesto za umetanje sadržaja.
- **`name`**: Atribut koji specificira ime slota za ciljanje specifičnog sadržaja.

### Karakteristike `<slot>` taga

1. **Umetanje sadržaja**:
   `<slot>` tag omogućava umetanje vanjskog sadržaja unutar Web Components.

2. **Imenovani slotovi**:
   Korištenje atributa `name` omogućava umetanje specifičnog sadržaja u odgovarajući slot.

### Primjeri korištenja `<slot>` taga

1. **Osnovni slot:**

   ```html
   <slot></slot>
   ```

2. **Imenovani slot:**

   ```html
   <slot name="header"></slot>
   ```

3. **Korištenje slota unutar Web Component:**

   ```html
   <template id="my-component">
     <style>
       /* Stilovi za komponentu */
     </style>
     <div>
       <slot name="header"></slot>
       <p>Ovo je sadržaj komponente.</p>
       <slot></slot>
     </div>
   </template>
   ```

### Dodatne informacije

- **Pristupačnost**: Korištenje slotova može poboljšati organizaciju i pristupačnost sadržaja unutar Web Components.
- **Stilizacija**: Sadržaj unutar slotova može se stilizirati pomoću CSS-a unutar Shadow DOM-a.

### Zaključak

`<slot>` tag je ključan za dinamičko umetanje sadržaja unutar Web Components. Pravilno korištenje ovog taga omogućava fleksibilnost i prilagodbu sadržaja unutar Shadow DOM-a.
