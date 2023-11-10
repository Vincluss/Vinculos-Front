import Link from 'next/link'

export default function HomeCandidato() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>
        <Link href={'/'}>
          Página de homeCandidato
        </Link>
      </h3>
    </main>
  )
}
