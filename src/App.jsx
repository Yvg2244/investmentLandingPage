import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import AmountSection from './Components/AmountSection'
import RetirementSection from './Components/RetirementSection'
function App() {
 

  return (
   <main className='p-0 grid grid-cols-12 w-[100vw]'>
    <Navbar/>
    <AmountSection/>
    <RetirementSection/>
   </main>
   
  )
}

export default App
