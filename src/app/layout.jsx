import { Poppins } from "next/font/google";
import "@/src/app/globals.css";
import Script from "next/script";

// A página layout é a página onde nosso código será renderizado.
// Ela serve como uma página mãe para outras páginas
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Vínculos",
  description:
    "A plataforma que emprega e capacita pessoas com deficiências sensoriais",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Script
        src="https://cdn.userway.org/widget.js"
        data-account="0PWSHa9uTA"
      />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
