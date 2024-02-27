import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Cruesel from '../components/Cruesel'
import About from './About'
import"./css/Home.css"

export default function Home() {
  return (
    <>
   <div className='content'>
    <Cruesel />
    <br />
    <br />
   </div>
    <About/>
    
    </>
    
  )
}
