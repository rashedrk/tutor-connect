import Navbar from '@/components/shared/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/shared/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TutorConnect',
  description: 'A Tutor Finding Service',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
export default RootLayout;