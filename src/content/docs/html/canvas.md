---
title: <canvas>
description: HTML <canvas> tag
---

### HTML `<canvas>` Tag

`<canvas>` tag u HTML-u se koristi za crtanje grafike i animacija pomoću skriptiranja (obično JavaScript). Ovaj element pruža prostor na web stranici gdje se mogu dinamički crtati različiti oblici, slike i drugi vizualni elementi.

#### Osnovna sintaksa

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

- **`<canvas>`**: Kreira prostor za crtanje na web stranici.
- **`id`**: Jedinstveni identifikator za canvas element.
- **`width` i `height`**: Definišu dimenzije canvas-a u pikselima.

### Karakteristike `<canvas>` taga

1. **Dinamičko crtanje**:
   `<canvas>` omogućava dinamičko crtanje grafike, animacija i drugih vizualnih elemenata pomoću JavaScript-a.

2. **Rasterska grafika**:
   Canvas radi s pikselima, što ga čini pogodnim za kompleksne grafike i manipulaciju slika.

3. **Performanse**:
   Efikasan je za animacije i igre zbog svoje sposobnosti brze manipulacije piksela.

### Primjeri korištenja `<canvas>` taga

1. **Osnovni canvas:**

   ```html
   <canvas id="myCanvas" width="200" height="100"></canvas>
   ```

2. **Crtanje pravougaonika pomoću JavaScript-a:**

   ```html
   <canvas id="myCanvas" width="200" height="100"></canvas>
   <script>
     var c = document.getElementById('myCanvas');
     var ctx = c.getContext('2d');
     ctx.fillStyle = '#FF0000';
     ctx.fillRect(0, 0, 150, 75);
   </script>
   ```

3. **Crtanje linije:**
   ```html
   <canvas id="myCanvas" width="200" height="100"></canvas>
   <script>
     var c = document.getElementById('myCanvas');
     var ctx = c.getContext('2d');
     ctx.moveTo(0, 0);
     ctx.lineTo(200, 100);
     ctx.stroke();
   </script>
   ```

### Dodatne informacije

- **Fallback sadržaj**: Tekst unutar `<canvas>` taga se prikazuje ako preglednik ne podržava canvas.
- **Skaliranje**: Canvas se može skalirati pomoću CSS-a, ali to može utjecati na kvalitetu slike.
- **Eksportovanje**: Sadržaj canvas-a se može eksportovati kao slika.

### Zaključak

`<canvas>` tag je moćan alat za kreiranje dinamičkih i interaktivnih grafika na web stranicama. Njegova fleksibilnost i performanse čine ga idealnim za širok spektar primjena, od jednostavnih crteža do kompleksnih animacija i igara.
