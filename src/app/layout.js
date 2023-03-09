import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'CSR MOVI',
  description: 'Ministry Of Vape Indonesia - CSR - Gojek',
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
