import { Montserrat } from 'next/font/google'
import '@/app/globals.css'

// A página layout é a página onde nosso código será renderizado.
// Ela serve como uma página mãe para outras páginas
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Vínculos',
  description: 'A plataforma que emprega e capacita pessoas com deficiências sensoriais',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
