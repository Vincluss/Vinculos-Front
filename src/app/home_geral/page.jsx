import Link from 'next/link';
import HomeGeral from '@/src/componentes/home_geral';
import Vagas from '@/src/componentes/vagas';
import Depoimentos from '@/src/componentes/depoimentos';
import Parceiros from '@/src/componentes/parceiros';

export default function Home() {
  return (
    <>
      <HomeGeral />
      <Vagas />
      <Depoimentos />
      <Parceiros />
    </>
  );
}