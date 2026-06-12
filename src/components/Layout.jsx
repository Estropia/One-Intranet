import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import MobileContactBar from './MobileContactBar.jsx'

export default function Layout() {
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
      <MobileContactBar />
    </>
  )
}
