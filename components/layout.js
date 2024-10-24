import Navbar from './Navbar'
import FooterSection from './FooterSection'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <FooterSection />
    </>
  )
}
