// Linkuri interne care țin cont de subdirectorul demo-ului de pe GitHub Pages.
const baza = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (cale = '/') => `${baza}${cale}`;
