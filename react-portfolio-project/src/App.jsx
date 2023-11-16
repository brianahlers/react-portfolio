import { useState } from 'react'
// import 'bootswatch/dist/Vapor/bootstrap.min.css'
import './App.css'
import Home from './Components/Home'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Header from './Components/Header'

function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
}

const handlePageChange = (page) => setCurrentPage(page)

  return (
    <>
    <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    <main>
      {renderPage()}
    </main>
    </>
  )
}
export default App
