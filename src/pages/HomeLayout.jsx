
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  return (
     <>
     <Header/>
      <nav>
        <span className='text-4xl text-primary'>Comfy</span>
      </nav>
      <Navbar/>
      <section className='align-element py-20'>
          <Outlet />
      </section>
     
    </>
  )
}

export default HomeLayout