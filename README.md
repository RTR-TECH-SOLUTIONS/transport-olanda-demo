# mln-trans.ro

Site de prezentare pentru transport de persoane și colete între România și Germania, Austria, Belgia, Olanda.
Astro 6 + Tailwind 4, complet static.

## Pagini

- `/` prima pagină, cu cele patru țări
- `/transport-persoane-{germania|austria|belgia|olanda}/`
- `/transport-colete-{germania|austria|belgia|olanda}/`
- `/sitemap.xml`, `/robots.txt`

Paginile pe țări se generează din lista `tari` din `src/data.ts`. O țară nouă înseamnă o intrare în listă și o
fotografie în `src/lib/foto.ts`.

## Conținut

Tot textul stă în `src/data.ts`. Pe site nu apar prețuri, zile de plecare sau date de firmă: clientul le comunică la
telefon, deci paginile trimit la apel sau la WhatsApp. Formularul nu salvează nimic, doar deschide WhatsApp cu
mesajul gata scris.

De confirmat cu clientul (`TODO(real)` în cod): numele afișat și numărul de telefon.

## Indexare

`INDEXARE` din `src/data.ts` este `false`: paginile au `noindex`, iar `robots.txt` blochează tot site-ul. Se trece pe
`true` după ce numele și telefonul sunt confirmate. Demo-ul de pe GitHub Pages rămâne mereu neindexat.

## Publicare

Un push pe `main` pornește `.github/workflows/deploy.yml`, care construiește site-ul de două ori:

- varianta de producție ajunge în branch-ul `productie`, de unde Hostinger o preia singur prin Git, în `public_html`
  (https://mln-trans.ro);
- demo-ul, construit cu `DEMO=1`, ajunge pe GitHub Pages.

`public/.htaccess` redirecționează `www` spre adresa fără `www`.

## Local

```
npm install
npm run dev
npm run build && npm run preview
```

## De făcut

- Politica de confidențialitate: are nevoie de numele persoanei sau al firmei care răspunde de date.
- Google Search Console și profil Google Business, după deschiderea indexării.
- Fotografii proprii ale clientului, dacă le trimite. Cele actuale sunt de pe Unsplash.
