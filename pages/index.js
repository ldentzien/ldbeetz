import Navbar from '../components/Navbar'
import Beats from '../components/Beats'
import Licenses from '../components/Licenses'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Beats />
      <Licenses />
      <About />
      <Contact />
    </div>
  )
}
