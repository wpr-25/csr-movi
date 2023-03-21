import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'CSR MOVI',
  description: 'Ministry Of Vape Indonesia - CSR - ojek online',
  images: [
    {
      url: 'favicon.ico',
      width: 150,
      height: 150,
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>

    </html>
  )
}
