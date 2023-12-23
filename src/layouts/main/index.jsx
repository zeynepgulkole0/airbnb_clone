import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../main/header/index'

function MainLayout() {
  return (
    <div className='w-full bg-white'>
      <Header/>
      {/* Wherever you want to show your children, show them with <Outlet/> component */}
      <Outlet/>
    </div>
  )
}

export default MainLayout
