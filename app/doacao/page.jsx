import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>
        <Link href={'/'}>
          Página de homeCandidato
        </Link>
      </h3>
      <h3>
        <Link href={'/homeCandidato#section'}>
          ir para section
        </Link>
      </h3>

      <div className='h-[100vh] bg-black'></div>

      <section id='section'>
        section diferente
      </section>
    </main>
  )
}
