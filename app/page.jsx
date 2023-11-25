import Link from 'next/link'
import Vagas from "@/componentes/vagas"
import HomeUsuario from '@/app/home_usuario'

export default function Home() {
  return (
    <>
      <Vagas />
      <HomeUsuario />
    </>
  )
}

// Pasta page que está na pasta raiz é igual á pasta /
