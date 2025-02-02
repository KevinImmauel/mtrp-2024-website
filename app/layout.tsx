import type { Metadata } from 'next'
import { Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })  

export const metadata: Metadata = {
  title: 'Integration: MTRP',
  description: 'MTRP 2024',
}

export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head><link rel="icon" href="/img/mtrp_ico_white.png" sizes="any" /></head>
    <body className="relative">
        {children}
      </body>
    </html>
  )
}
