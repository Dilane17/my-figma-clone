import "./styles/globals.scss";
import { Poppins, Oswald, Outfit } from 'next/font/google';

// 1. POPPINS (Principale) - Corps de texte, titres non stylisés
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'], // Les graisses dont tu auras probablement besoin
  variable: '--font-poppins',
});

// 2. OSWALD (Secondaire) - Titres percutants (DEVENEZ LE BAR...), Navigation
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-oswald',
});

// 3. OUTFIT (Boutons) - Rendu des éléments d'action clairs
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['600'], // Souvent une seule graisse pour les boutons
  variable: '--font-outfit',
});

export const metadata = {
  title: "Figma Clone",
  description: "Reproduction de maquette avec Next.js + Sass",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${oswald.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}




