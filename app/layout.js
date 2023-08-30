import './globals.css'
import { Inter } from 'next/font/google'
// components
import Nav from '@/components/Nav/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Conversor',
  description: 'Creado con FyS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning={true}>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
