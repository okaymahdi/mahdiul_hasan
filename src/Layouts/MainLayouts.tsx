import { Footer } from '@/Components/Shared/Footer/Footer'
import { Navbar } from '@/Components/Shared/Navbar/Navbar'
import { ChildrenType } from '@/Types/Types'

const MainLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="flex-grow overflow-y-auto">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default MainLayout
