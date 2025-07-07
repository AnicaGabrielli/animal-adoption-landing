import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Adoção com Amor - Encontre seu novo melhor amigo',
  description: 'Plataforma de adoção de animais que conecta corações e transforma vidas. Encontre seu novo melhor amigo e faça a diferença na vida de um animal.',
  keywords: 'adoção, animais, pets, cachorros, gatos, voluntários, eventos',
  authors: [{ name: 'Adoção com Amor' }],
  openGraph: {
    title: 'Adoção com Amor - Encontre seu novo melhor amigo',
    description: 'Plataforma de adoção de animais que conecta corações e transforma vidas.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}