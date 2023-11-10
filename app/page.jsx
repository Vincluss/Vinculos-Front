import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>
        <Link href={'/homeCandidato'}>
          Segura na mão de Deus
        </Link>
      </h3>
    </main>
  )
}
