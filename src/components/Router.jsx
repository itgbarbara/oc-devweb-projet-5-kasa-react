import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DataProvider from '../utils/context/Context'
import Home from '../pages/Home'
import About from '../pages/About'
import ErrorPage from '../pages/ErrorPage'
import Logement from '../pages/Logement'

function Router() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  )
}

export default Router
