import Link from 'next/link'
import Vagas from "@/src/componentes/vagas"
import Curriculo from './curriculo/page';
import PlanoAssinatura from './plano_assinatura copy/page';


export default function Home() {
  return (
    <>
      <Curriculo />
      <PlanoAssinatura/>
    </>
    
  );
}

// Pasta page que está na pasta raiz é igual á pasta /
