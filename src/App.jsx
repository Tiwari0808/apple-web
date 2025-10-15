import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ShowCase from './components/ShowCase'


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
      <ShowCase/>
    </>
  )
}

export default App
