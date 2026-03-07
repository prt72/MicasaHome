import Services from './components/services'  // ✅ import as a component
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Services />
    </main>
  )
}
