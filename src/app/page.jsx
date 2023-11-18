import Link from 'next/link'
import Vagas from "@/src/componentes/vagas"
import HomeGeral from '@/src/componentes/home_geral'


export default function Home() {
  return (
    <>
      <HomeGeral />
      <Vagas />
    </>
  )
}

// Pasta page que está na pasta raiz é igual á pasta /
