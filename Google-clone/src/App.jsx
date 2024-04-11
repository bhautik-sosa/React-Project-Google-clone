import { useState } from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'

import './App.css'
import SearchResult from './Components/SearchResult'
import Home from './Components/Home'
import { AppContext } from './utils/ContextApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppContext>
      <BrowserRouter>
          <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/:query/:startIndex" element={<SearchResult/>}/>
          </Routes>
      </BrowserRouter>
    </AppContext>
  )
}

export default App
