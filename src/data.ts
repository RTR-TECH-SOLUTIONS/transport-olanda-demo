// Toate datele firmei sunt placeholder pentru demo.
// TODO(real): înlocuiește cu datele clientului (nume, CUI, telefon, prețuri, zile de plecare).

export const firma = {
  nume: 'Vidraru Trans',
  denumireLegala: 'VIDRARU TRANS S.R.L.',
  cui: 'RO00000000',
  regCom: 'J03/0000/2016',
  adresa: 'Str. Depozitelor 14, Pitești, județul Argeș',
  codPostal: '110138',
  program: 'Luni – Sâmbătă, 08:00 – 20:00',
  aniExperienta: 9,
  telefon: '0748 555 012',
  telefonLink: 'tel:+40748555012',
  whatsapp: '40748555012',
  email: 'rezervari@vidrarutrans.ro',
};

export const ruta = {
  pretDeLa: 150,
  bagajKg: 40,
  taxaKgExtra: 1,
  km: '2.200',
  ore: '30',
  plecareRo: 'joi',
  returNl: ['sâmbătă', 'duminică'],
};

export const whatsappLink = (mesaj = 'Bună ziua, aș vrea un loc pe ruta Argeș – Olanda.') =>
  `https://wa.me/${firma.whatsapp}?text=${encodeURIComponent(mesaj)}`;

export const meniu = [
  { href: '#avantaje', text: 'Servicii' },
  { href: '#plecari', text: 'Tarife' },
  { href: '#rezervare', text: 'Rezervări' },
  { href: '#acte', text: 'Ghiduri' },
  { href: '#intrebari', text: 'Utile' },
];

export const garantii = [
  'De la adresă la adresă',
  `${ruta.bagajKg} kg bagaj inclus`,
  'Asigurare pentru pasageri',
  'Microbuze Mercedes proprii',
  `${firma.aniExperienta} ani pe ruta Olandei`,
];

export const avantaje = [
  {
    titlu: 'De la adresă la adresă',
    text: 'Te luăm de la poartă, din Pitești, Mioveni, Câmpulung sau din satul tău, și te lăsăm la ușa din Olanda. Fără autogară și fără schimbat mașini pe drum.',
  },
  {
    titlu: 'Plecare în fiecare joi',
    text: 'Mașina pleacă din Argeș joia dimineața și ajunge în Olanda vineri după-amiază. Returul se face sâmbăta și duminica, deci poți pleca și numai pentru câteva zile.',
  },
  {
    titlu: `${ruta.bagajKg} kg bagaj în preț`,
    text: `Două valize mari și un bagaj de mână intră fără probleme. Ce trece de ${ruta.bagajKg} kg se taxează cu ${ruta.taxaKgExtra}\u00a0€ pe kilogram, sumă pe care o afli de la telefon, nu la îmbarcare.`,
    nota: 'Pachetele pentru rude se anunță la rezervare, ca să le facem loc.',
  },
  {
    titlu: 'Doi șoferi pe fiecare cursă',
    text: 'Pe drumul de 30 de ore conduc cu rândul doi șoferi cu atestat de transport persoane. Oprim la 3-4 ore, în parcări cu benzinărie și toalete.',
  },
  {
    titlu: 'Dus-întors, cu retur deschis',
    text: 'Poți lua biletul de întoarcere din prima, la preț mai bun, și stabilești data returului când o știi. Ne suni cu câteva zile înainte și îți ținem locul.',
  },
  {
    titlu: 'Microbuze 8+1, nu autocar',
    text: 'Mercedes Sprinter și Vito cu scaune rabatabile, aer condiționat pe plafon, prize USB la fiecare rând și remorcă închisă pentru bagaje.',
  },
];

export const oraseArges = [
  'Pitești',
  'Mioveni',
  'Curtea de Argeș',
  'Câmpulung',
  'Costești',
  'Topoloveni',
  'Ștefănești',
  'Bascov',
  'Domnești',
  'Rucăr',
  'Râmnicu Vâlcea',
  'Slatina',
];

export const oraseOlanda = [
  'Amsterdam',
  'Rotterdam',
  'Haga (Den Haag)',
  'Utrecht',
  'Eindhoven',
  'Arnhem',
  'Breda',
  'Tilburg',
  'Venlo',
  'Nijmegen',
  'Almere',
  'Westland',
];

export const pasi = [
  {
    titlu: 'Ne suni sau ne scrii',
    text: 'La telefon sau pe WhatsApp ne spui trei lucruri:',
    lista: ['localitatea din care pleci', 'adresa din Olanda', 'data la care vrei să pleci'],
  },
  {
    titlu: 'Îți confirmăm locul',
    text: 'Cu o zi înainte de plecare te sunăm cu ora aproximativă de preluare, numărul șoferului și numărul de înmatriculare al mașinii.',
  },
  {
    titlu: 'Pleci la drum',
    text: 'Șoferul oprește la adresa ta și te ajută cu bagajele. Plata se face la îmbarcare, în lei sau în euro, și primești bilet.',
  },
];

export const acte = [
  {
    titlu: 'Adulți',
    lista: ['Carte de identitate sau pașaport, valabile pe toată durata șederii.'],
  },
  {
    titlu: 'Minori',
    lista: [
      'Pașaport sau carte de identitate proprie.',
      'Dacă merge cu un singur părinte ori cu alt adult: declarația notarială a părintelui care lipsește și cazierul însoțitorului, conform legii.',
    ],
  },
  {
    titlu: 'Înainte de plecare',
    lista: [
      'Uită-te la data de expirare a actului cu o săptămână înainte, cât mai e timp de un act nou.',
      'Ține actele în bagajul de mână, nu în remorcă: se cer la vama Nădlac.',
    ],
  },
];

export const intrebari = [
  {
    q: 'Cât costă un bilet?',
    a: `Prețul depinde de localitatea din Olanda la care ajungi. Biletele pornesc de la ${ruta.pretDeLa}\u00a0€ de persoană, pe sens. La dus-întors și pentru copiii sub 10 ani prețul e mai mic; îl afli exact la telefon.`,
  },
  {
    q: 'Veniți până la adresă și în sate?',
    a: 'Da. Preluăm din tot județul Argeș, inclusiv din comune, și din zonele vecine din Vâlcea și Olt. În Olanda te lăsăm la adresa pe care ne-o dai, în oricare dintre cele 12 provincii.',
  },
  {
    q: 'În ce zi pleacă mașina din Argeș?',
    a: 'În fiecare joi dimineața. Preluările de la adrese se fac între 06:00 și 10:00, iar ora ta o afli miercuri, când te sunăm pentru confirmare.',
  },
  {
    q: 'Când se face returul din Olanda?',
    a: 'Sâmbăta și duminica. Ajungi în Argeș a doua zi seara.',
  },
  {
    q: 'Cu ce mașini se face transportul?',
    a: 'Cu microbuze Mercedes Sprinter și Vito de 8+1 locuri, cu aer condiționat, scaune rabatabile și remorcă închisă pentru bagaje. Toate au licență de transport internațional și asigurare pentru pasageri.',
  },
  {
    q: 'Plătesc ceva în plus pentru bagaj?',
    a: `Nu, până la ${ruta.bagajKg} kg de persoană. Peste această limită se plătește ${ruta.taxaKgExtra}\u00a0€ pe kilogram. Nu luăm la bagaje alcool și țigări peste limita legală, substanțe inflamabile sau alte bunuri interzise de lege.`,
  },
];

// TODO(real): paginile de mai jos nu există în demo; linkurile sunt doar de formă.
export const utile = [
  'Condiții generale de transport persoane',
  'Prețuri simplificate',
  'Aria de acoperire',
  'Întrebări generale',
  'Politica de cookies',
  'Politica de confidențialitate',
  'Contact',
];

export const servicii = [
  {
    titlu: 'Transport internațional de persoane',
    rute: [
      'Transport persoane Argeș – Olanda la adresă',
      'Transport persoane Argeș – Germania la adresă',
      'Transport persoane Argeș – Belgia la adresă',
      'Transport persoane Argeș – Anglia la adresă',
    ],
  },
  {
    titlu: 'Transport internațional de colete',
    rute: ['Transport colete Argeș – Olanda la adresă', 'Transport colete Argeș – Germania la adresă'],
  },
];

export const dotari = [
  'Aer condiționat și încălzire separată pentru pasageri',
  'Scaune rabatabile, cu centură în trei puncte',
  'Prize USB la fiecare rând',
  'Wi-Fi pe teritoriul României',
  'Remorcă închisă pentru bagaje',
  'Revizie făcută înaintea fiecărei curse',
];

export const plecari = [
  { zi: 'Joi', sens: 'Argeș → Olanda', preluare: '06:00 – 10:00', sosire: 'vineri, după-amiaza' },
  { zi: 'Sâmbătă', sens: 'Olanda → Argeș', preluare: '08:00 – 13:00', sosire: 'duminică, seara' },
  { zi: 'Duminică', sens: 'Olanda → Argeș', preluare: '08:00 – 13:00', sosire: 'luni, seara' },
];

export const tarife = [
  { zona: 'Eindhoven, Tilburg, Breda, Venlo', sens: 150, dusIntors: 280 },
  { zona: 'Utrecht, Arnhem, Nijmegen', sens: 150, dusIntors: 280 },
  { zona: 'Amsterdam, Rotterdam, Haga, Almere', sens: 160, dusIntors: 300 },
  { zona: 'Groningen și nordul Olandei', sens: 170, dusIntors: 320 },
];

// TODO(real): recenziile și nota sunt inventate. Se înlocuiesc cu recenzii reale de pe Google.
export const recenziiSumar = { nota: '4,9', total: 214, sursa: 'Google' };

export const recenzii = [
  {
    text: 'Merg la sere în Westland de patru ani și tot cu ei plec. M-au luat din fața porții, din Mioveni, la 7 fix, și vineri pe la 4 eram la cazare.',
    nume: 'Marian D.',
    detaliu: 'Mioveni → Westland',
  },
  {
    text: 'Am trimis-o pe mama singură la sora mea, la Eindhoven. Șoferul m-a sunat când au trecut vama și când a ajuns la adresă. Asta a contat cel mai mult pentru mine.',
    nume: 'Andreea P.',
    detaliu: 'Curtea de Argeș → Eindhoven',
  },
  {
    text: 'Aveam două valize mari și un cărucior. Nu mi-au cerut nimic în plus și le-au pus ei în remorcă. Microbuz curat, opriri la timp, șoferi liniștiți.',
    nume: 'Ionuț și Raluca M.',
    detaliu: 'Pitești → Rotterdam',
  },
];
