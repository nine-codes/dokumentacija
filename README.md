# Web development dokumentacija

[![Napravljeno sa Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## 🚀 Struktura projekta

Unutar vašeg Astro + Starlight projekta, vidjet ćete sljedeće folderi i datoteke:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight traži `.md` ili `.mdx` datoteke u direktoriju `src/content/docs/`. Svaka datoteka je izložena kao ruta na temelju njenog naziva.

Slike se mogu dodati u `src/assets/` i uključiti u Markdown s relativnom putanjom.

Statički resursi, kao što su favikoni, mogu biti stavljeni u direktorijum `public/`.

## 🧞 Komande

Svi komandi se izvode iz root direktorija projekta, iz terminala:

| Komande           | Akcija                                                  |
| :---------------- | :------------------------------------------------------ |
| `npm install`     | Instalira dependencies                                  |
| `npm run dev`     | Pokreće lokalni dev server na `localhost:4321`          |
| `npm run build`   | Builda vašu proizvodnu stranicu u `./dist/`             |
| `npm run preview` | Pregledaj izgradenu stranicu lokalno, prije deploymenta |

## 👀 Želite naučiti više?

Pogledajte [Starlightove dokumentacije](https://starlight.astro.build/) ili pročitajte [Astro dokumentaciju](https://docs.astro.build).
