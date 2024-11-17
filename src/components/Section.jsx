import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'


export default function Section() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<FirstPage/>} />
                <Route path='/data' element={<SecondPage/>} />

            </Routes>
        </Router>
    </div>
  )
}
