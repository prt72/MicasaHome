import './globals.css'
import "@fortawesome/fontawesome-free/css/all.min.css"

export const metadata = {
  title: 'Micasa Home',
  description: 'Home Health Care Specialist',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  )
}