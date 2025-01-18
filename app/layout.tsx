import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './components/header'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { BackToTop } from './components/back-to-top'
import { Metadata } from 'next'
import { Toaster } from './components/toaster'

export const metadata: Metadata = {
  title: {
    default: 'Home',
    template: '%s | Jardiel-Dev',
  },
  icons: [
    {
      url: '/favicon.svg',
    }
  ],
  openGraph: {
    title: 'Jardiel Carlos | Desenvolvedor Full Stack',
    description: 'Portfólio de Jardiel Carlos, desenvolvedor Full Stack',
    url: 'https://jardiel-dev.vercel.app',
    locale: 'pt_BR',
    images: [
      {
        url: '/images/logoJardiel.png',
        width: 180,
        height: 49,
        alt: 'Logo Jardiel Dev Full Stack',
      },
    ],
  },
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <BackToTop />
        
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
