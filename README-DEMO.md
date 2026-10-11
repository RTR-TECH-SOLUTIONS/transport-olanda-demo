# Demo: transport persoane Argeș – Olanda

Demo de prezentare pentru client. O singură pagină de rută, cu structura paginii
smart2.ro/transport-de-persoane/curse-romania-olanda-la-adresa, dar cu altă paletă
(fundal închis + galben de plăcuță), texte și fotografii proprii.

## Cum se vede

```
npm install
npm run dev        # http://localhost:4321
npm run build && npm run preview
```

Stack: Astro 6 + Tailwind 4, static. Font Barlow, găzduit local.

## Ce e placeholder

Toate datele firmei sunt în `src/data.ts` și sunt inventate:

- numele „Vidraru Trans", CUI, nr. Reg. Com., adresa, e-mailul;
- telefonul 0748 555 012 și numărul de WhatsApp (de schimbat înainte să ajungă demo-ul la cineva care ar putea suna);
- prețul de pornire (150 €), bagajul inclus, zilele de plecare (joi) și de retur (sâmbătă, duminică), orele;
- lista de localități din Argeș și din Olanda, opririle de pe traseu;
- logo-ul (numele scris ca pe o plăcuță), `src/components/Logo.astro`.

- linkurile din footer („Utile" și lista de rute): paginile nu există în demo, iar rutele spre
  Germania, Belgia, Anglia și coletele sunt puse doar ca să oglindească modelul.

Fotografia rotundă din hero e de pe Unsplash (licență liberă), `src/assets/olanda-mori.jpg`.

## Structura

Scheletul paginii urmează modelul smart2 (header, hero cu garanții + bandă de preț + poză rotundă,
6 avantaje, bandă cu telefonul, orașe, 3 pași, acte, bandă cu telefonul, întrebări, footer pe trei
coloane). Peste el sunt adăugate lucrurile pe care le au concurenții direcți (JET Travel, Zuppy
Travel, Nextour, Europa Zilnic) și modelul nu:

- bandă sus cu data următoarei plecări, calculată în browser (joia următoare);
- nota din recenzii sub banda de preț și secțiune cu trei recenzii;
- „Microbuzele cu care călătorești": trei fotografii și lista de dotări;
- „Program și tarife": zilele de plecare și prețurile pe zone;
- formular „cere un loc pe WhatsApp" sub cei trei pași;
- buton plutitor de WhatsApp.

Tot ce e în aceste secțiuni e placeholder: nota 4,9 și cele 214 recenzii, textele recenziilor,
tarifele pe zone, orele, dotările (Wi-Fi, USB) și fotografiile cu microbuzul (Unsplash).
Recenziile inventate NU se publică pe site-ul real; se înlocuiesc cu recenzii adevărate de pe Google.

## Ce funcționează

- meniu mobil și întrebări frecvente (acordeon nativ `details`);
- formularul de WhatsApp: validează câmpurile și deschide WhatsApp cu mesajul gata scris;
- data următoarei plecări din banda de sus;
- toate numerele de telefon sunt linkuri `tel:`.

## Ce urmează dacă clientul acceptă

1. Datele reale în `src/data.ts`, logo și poze cu flota.
2. Research SEO RO pe „transport persoane Argeș/Pitești Olanda", pagini separate pe rută
   (Germania, Belgia, Anglia) și, dacă face, pe colete. Componentele sunt deja pe date, deci
   o rută nouă înseamnă un set de date nou, nu o pagină rescrisă.
3. On-page + `LocalBusiness` JSON-LD, sitemap, robots.
4. Pachet legal: banner cookie, Termeni, Confidențialitate, Politica de cookies, condiții de transport.
5. Credit RTR în footer, deploy static pe Hostinger.
