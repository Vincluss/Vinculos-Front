import Link from 'next/link';
import Usuario from './usuario/page';
import Curriculo from './curriculo/page';

export default function Home() {
  return (
    <>
      <Usuario/>
    </>
  );
}

// Pasta page que está na pasta raiz é igual á pasta /
// Página de renderização - Home