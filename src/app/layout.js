import { Toaster } from 'sonner'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/lib/providers/Providers'
import '@smastrom/react-rating/style.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TutorConnect',
  description: 'A Tutor Finding Service',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Toaster />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
export default RootLayout;