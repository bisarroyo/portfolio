// import Footer from '../containers/Footer'
import NavBar from '../containers/NavBar'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default Layout
