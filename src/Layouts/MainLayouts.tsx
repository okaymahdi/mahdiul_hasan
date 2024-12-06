import { Footer } from '@/Components/Shared/Footer/Footer'
import { Navbar } from '@/Components/Shared/Navbar/Navbar'
import { ChildrenType } from '@/Types/Types'

const MainLayout = ({ children }: ChildrenType) => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout
