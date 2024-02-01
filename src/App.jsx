/* NODE MODULES */
import ErrorPage from '@/pages/ErrorPage/ErrorPage.jsx'
import HomePage from '@/pages/HomePage/HomePage.jsx'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <CssBaseline>
          <Routes>
            <Route path='/' element={< HomePage />} />

            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </CssBaseline>
      </BrowserRouter>
    </div>
  )
}

export default App