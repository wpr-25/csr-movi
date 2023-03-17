import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'CSR MOVI',
  description: 'Ministry Of Vape Indonesia - CSR - Gojek',
  images: [
    {
      url: 'favicon.ico',
      width: 800,
      height: 600,
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
