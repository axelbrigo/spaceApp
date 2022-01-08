import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import { Header , Home} from './components'
import {Destination, Crew, Technology} from './pages'

export default function App() {
  return(
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} ></Route>
          <Route path="/destination" element={<Destination/>} ></Route>
          <Route path="/crew" element={<Crew/>} ></Route>
          <Route path="/technology" element={<Technology/>} ></Route>

        </Routes>

    </BrowserRouter>
  )

}
