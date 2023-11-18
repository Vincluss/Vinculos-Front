import Link from 'next/link'
import Vagas from "@/componentes/vagas"
import HomeGeral from './home_geral/page'

export default function Home() {
  return (
    <>
      <HomeGeral />
      <Vagas />
    </>
  )
}

// Pasta page que está na pasta raiz é igual á pasta /
