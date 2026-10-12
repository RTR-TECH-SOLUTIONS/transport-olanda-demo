import type { ImageMetadata } from 'astro';
import germania from '../assets/tara-germania.jpg';
import austria from '../assets/tara-austria.jpg';
import belgia from '../assets/tara-belgia.jpg';
import olanda from '../assets/tara-olanda.jpg';

export const fotoTara: Record<string, { src: ImageMetadata; alt: string }> = {
  germania: { src: germania, alt: 'Domul din Köln văzut de jos, pe cer senin' },
  austria: { src: austria, alt: 'Acoperișurile Vienei la apus, cu turnul catedralei Sfântul Ștefan' },
  belgia: { src: belgia, alt: 'Centrul vechi al Bruxelles-ului la asfințit, cu turnul primăriei' },
  olanda: { src: olanda, alt: 'Canal din Amsterdam la lăsarea serii, cu case înalte din cărămidă' },
};
