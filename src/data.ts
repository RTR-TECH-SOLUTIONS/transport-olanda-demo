// Conținutul site-ului. Prețurile și zilele de plecare nu apar nicăieri:
// clientul le comunică la telefon, deci paginile trimit la apel sau WhatsApp.

// Devine true după ce numele și telefonul de mai jos sunt confirmate de client.
// Cât e false, paginile au noindex și robots.txt blochează tot site-ul.
export const INDEXARE = false;

// TODO(real): confirmă numele afișat și numărul de telefon.
export const firma = {
  nume: 'MLN Trans',
  telefon: '0757 209 906',
  telefonLink: 'tel:+40757209906',
  whatsapp: '40757209906',
};

export const whatsappLink = (mesaj = 'Bună ziua, aș vrea detalii despre transport.') =>
  `https://wa.me/${firma.whatsapp}?text=${encodeURIComponent(mesaj)}`;

export type Serviciu = 'persoane' | 'colete';

export interface Tara {
  slug: string;
  nume: string;
  // „ajungem oriunde în …”: formularea despre acoperire, diferită de la o țară la alta
  acoperire: string;
  orase: string[];
}

export const tari: Tara[] = [
  {
    slug: 'germania',
    nume: 'Germania',
    acoperire: 'Ajungem în orice localitate din Germania, în toate cele 16 landuri.',
    orase: [
      'Berlin',
      'München',
      'Frankfurt',
      'Stuttgart',
      'Nürnberg',
      'Köln',
      'Düsseldorf',
      'Dortmund',
      'Hamburg',
      'Hanovra',
      'Mannheim',
      'Augsburg',
    ],
  },
  {
    slug: 'austria',
    nume: 'Austria',
    acoperire: 'Ajungem în orice localitate din Austria, de la Viena până în Tirol și Vorarlberg.',
    orase: [
      'Viena',
      'Graz',
      'Linz',
      'Salzburg',
      'Innsbruck',
      'Klagenfurt',
      'Wels',
      'Sankt Pölten',
      'Villach',
      'Wiener Neustadt',
      'Steyr',
      'Bregenz',
    ],
  },
  {
    slug: 'belgia',
    nume: 'Belgia',
    acoperire: 'Ajungem în orice localitate din Belgia, în Flandra, în Valonia și în Bruxelles.',
    orase: [
      'Bruxelles',
      'Anvers (Antwerpen)',
      'Gent',
      'Liège',
      'Charleroi',
      'Bruges',
      'Leuven',
      'Namur',
      'Mons',
      'Hasselt',
      'Mechelen',
      'Genk',
    ],
  },
  {
    slug: 'olanda',
    nume: 'Olanda',
    acoperire: 'Ajungem în orice localitate din Olanda, în toate cele 12 provincii.',
    orase: [
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
    ],
  },
];

export const oraseRomania = [
  'București',
  'Pitești',
  'Craiova',
  'Sibiu',
  'Brașov',
  'Cluj-Napoca',
  'Timișoara',
  'Arad',
  'Iași',
  'Bacău',
  'Constanța',
  'Galați',
];

export const caleRuta = (serviciu: Serviciu, slug: string) => `/transport-${serviciu}-${slug}/`;

export const listaTari = tari.map((t) => t.nume).join(', ');

export const garantii = ['De la adresă la adresă', 'Din toată România', 'Tur și retur', 'Persoane și colete'];

export const avantajePersoane = (tara: string) => [
  {
    titlu: 'De la adresă la adresă',
    text: `Te luăm de la adresa din România și te lăsăm la adresa din ${tara}. Nu ai drum până la autogară și nu schimbi mașina pe traseu.`,
  },
  {
    titlu: 'Din toată România',
    text: 'Preluăm pasageri din orice județ, din orașe și din comune. Ne spui localitatea la telefon și îți confirmăm de unde te luăm.',
  },
  {
    titlu: 'Tur și retur',
    text: `Facem drumul în ambele sensuri: România – ${tara} și ${tara} – România. Poți rezerva doar dusul sau și întoarcerea.`,
  },
  {
    titlu: 'Prețul îl afli înainte',
    text: 'Prețul depinde de localitatea de plecare și de adresa la care ajungi. Ți-l spunem la telefon sau pe WhatsApp, înainte să rezervi.',
  },
  {
    titlu: 'Rezervare la telefon sau pe WhatsApp',
    text: 'Nu completezi conturi și nu plătești online. Suni sau scrii, ne dai datele călătoriei și îți ținem locul.',
  },
  {
    titlu: 'Iei și un colet cu tine',
    text: 'Dacă ai de dus un pachet pentru cineva sau bagaje în plus, ne spui la rezervare, ca să le facem loc.',
  },
];

export const avantajeColete = (tara: string) => [
  {
    titlu: 'Ridicăm coletul de la adresă',
    text: `Venim după colet la adresa din România și îl predăm la adresa din ${tara}. Nu îl duci tu la un depozit sau la un punct de colectare.`,
  },
  {
    titlu: 'Din toată România',
    text: 'Preluăm colete din orice județ, din orașe și din comune. Ne spui localitatea și îți confirmăm când trecem.',
  },
  {
    titlu: 'În ambele sensuri',
    text: `Ducem colete din România în ${tara} și aducem colete din ${tara} în România.`,
  },
  {
    titlu: 'Prețul îl afli înainte',
    text: 'Prețul depinde de greutatea și de mărimea coletului și de adresa la care ajunge. Ți-l spunem la telefon, înainte să ni-l dai.',
  },
  {
    titlu: 'Colete, pachete și bagaje',
    text: 'Luăm cutii, pachete pentru familie, valize și genți. Pentru obiecte voluminoase sau fragile, întreabă-ne înainte.',
  },
  {
    titlu: 'Vorbești direct cu noi',
    text: 'Stabilim totul la telefon sau pe WhatsApp: de unde îl luăm, unde îl ducem și cine îl primește.',
  },
];

export const pasiPersoane = [
  {
    titlu: 'Ne suni sau ne scrii',
    text: 'La telefon sau pe WhatsApp ne spui:',
    lista: ['localitatea din care pleci', 'adresa la care ajungi', 'data la care vrei să pleci', 'câte persoane sunteți'],
  },
  {
    titlu: 'Afli prețul și data plecării',
    text: 'Îți spunem cât costă drumul pentru ruta ta și care este următoarea plecare cu locuri libere.',
  },
  {
    titlu: 'Îți confirmăm locul',
    text: 'Dacă ți se potrivește, îți rezervăm locul și stabilim de unde și la ce oră te luăm.',
  },
];

export const pasiColete = [
  {
    titlu: 'Ne suni sau ne scrii',
    text: 'La telefon sau pe WhatsApp ne spui:',
    lista: [
      'de unde ridicăm coletul',
      'adresa la care trebuie să ajungă',
      'ce conține și cât cântărește, cu aproximație',
      'numele și telefonul destinatarului',
    ],
  },
  {
    titlu: 'Afli prețul și data',
    text: 'Îți spunem cât costă transportul coletului și când îl putem ridica.',
  },
  {
    titlu: 'Ridicăm și predăm coletul',
    text: 'Venim după colet la adresa stabilită și îl predăm destinatarului, la adresa pe care ne-ai dat-o.',
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
      'Dacă pleacă doar cu unul dintre părinți: acordul notarial al celuilalt părinte.',
      'Dacă pleacă cu alt adult: acordul notarial al ambilor părinți și cazierul judiciar al însoțitorului.',
    ],
  },
  {
    titlu: 'Înainte de plecare',
    lista: [
      'Uită-te la data de expirare a actului din timp, cât mai poți face unul nou.',
      'Ține actele la tine, nu în bagajul din portbagaj.',
    ],
  },
];

export const reguliColete = [
  {
    titlu: 'Ce poți trimite',
    lista: [
      'Colete și pachete pentru familie: haine, alimente ambalate, lucruri de casă.',
      'Valize, genți și bagaje care nu au încăput la drum.',
      'Obiecte mai mari, după ce stabilim la telefon dacă este loc.',
    ],
  },
  {
    titlu: 'Cum îl pregătești',
    lista: [
      'Închide bine cutia și leag-o sau lipește-o cu bandă.',
      'Scrie pe colet numele, adresa și telefonul destinatarului.',
      'Spune-ne dacă este ceva fragil înăuntru.',
    ],
  },
  {
    titlu: 'Ce nu luăm',
    lista: [
      'Bunuri interzise de lege și substanțe inflamabile.',
      'Alcool și țigări peste limitele legale.',
      'Bani și obiecte de valoare.',
    ],
  },
];

export const intrebariPersoane = (tara: string, slug: string) => [
  {
    q: `Cât costă transportul de persoane România – ${tara}?`,
    a: `Prețul depinde de localitatea din care pleci și de adresa din ${tara} la care ajungi. Îl afli la telefon sau pe WhatsApp, înainte să rezervi.`,
  },
  {
    q: `Când este următoarea plecare spre ${tara}?`,
    a: `Sună-ne sau scrie-ne pe WhatsApp și îți spunem data următoarei plecări spre ${tara} și dacă mai sunt locuri.`,
  },
  {
    q: 'Mă luați de la adresă, chiar dacă stau la sat?',
    a: `Da. Preluăm de la adresă din orice localitate din România și te lăsăm la adresa din ${tara} pe care ne-o dai.`,
  },
  {
    q: `Faceți și drumul de întoarcere, ${tara} – România?`,
    a: `Da, facem transport de persoane în ambele sensuri. Pentru întoarcere ne suni cu câteva zile înainte, ca să îți ținem locul.`,
  },
  {
    q: 'Cum rezerv un loc?',
    a: 'La telefon sau pe WhatsApp. Ne spui de unde pleci, unde ajungi, data și câte persoane sunteți, iar noi îți confirmăm locul.',
  },
  {
    q: 'Pot lua și un colet cu mine?',
    a: `Da. Ne spui la rezervare ce ai de dus, ca să îi facem loc. Dacă ai doar un colet de trimis, fără să călătorești, vezi pagina de transport colete România – ${tara}.`,
    link: { href: caleRuta('colete', slug), text: `Transport colete România – ${tara}` },
  },
];

export const intrebariColete = (tara: string, slug: string) => [
  {
    q: `Cât costă să trimit un colet în ${tara}?`,
    a: 'Prețul depinde de greutatea și de mărimea coletului și de adresa la care ajunge. Ni le spui la telefon sau pe WhatsApp și afli prețul pe loc.',
  },
  {
    q: 'Veniți după colet la adresă?',
    a: `Da. Ridicăm coletul de la adresa din România și îl predăm la adresa din ${tara}. La fel și în sens invers.`,
  },
  {
    q: `Aduceți și colete din ${tara} în România?`,
    a: `Da, transportăm colete în ambele sensuri: România – ${tara} și ${tara} – România.`,
  },
  {
    q: 'Transportați și bagaje sau valize?',
    a: 'Da. Luăm valize, genți și bagaje, la fel ca pe orice alt colet. Ne spui câte sunt și cât cântăresc, cu aproximație.',
  },
  {
    q: 'Când pleacă următorul transport?',
    a: `Sună-ne sau scrie-ne pe WhatsApp și îți spunem când este următorul transport de colete spre ${tara}.`,
  },
  {
    q: 'Vreau să călătoresc și eu, nu doar să trimit coletul. Se poate?',
    a: `Da, facem și transport de persoane pe aceeași rută.`,
    link: { href: caleRuta('persoane', slug), text: `Transport persoane România – ${tara}` },
  },
];

export const intrebariAcasa = [
  {
    q: 'În ce țări faceți transport?',
    a: `Facem transport de persoane și de colete între România și ${listaTari}, în ambele sensuri.`,
  },
  {
    q: 'De unde preluați din România?',
    a: 'Din toată țara. Preluăm persoane și colete de la adresă, din orice județ, din orașe și din comune.',
  },
  {
    q: 'Cât costă transportul?',
    a: 'Prețul depinde de țară, de localitatea de plecare și de adresa la care ajungi, iar la colete și de greutate. Îl afli la telefon sau pe WhatsApp, înainte să rezervi.',
  },
  {
    q: 'Când este următoarea plecare?',
    a: 'Sună-ne sau scrie-ne pe WhatsApp și îți spunem data următoarei plecări pentru țara care te interesează.',
  },
  {
    q: 'Cum rezerv un loc sau cum trimit un colet?',
    a: 'La telefon sau pe WhatsApp. Ne spui de unde, până unde și când, iar noi îți confirmăm prețul și data.',
  },
];
