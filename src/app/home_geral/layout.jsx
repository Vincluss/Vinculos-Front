import { Poppins } from "next/font/google";
import "@/src/app/globals.css";

// A página layout é a página onde nosso código será renderizado.
// Ela serve como uma página mãe para outras páginas
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Doação",
  description:
    "A plataforma que emprega e capacita pessoas com deficiências sensoriais",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
