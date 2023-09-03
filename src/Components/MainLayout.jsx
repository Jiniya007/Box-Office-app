import React from 'react'
import {Outlet} from 'react-router-dom'
import AppTitle from './AppTitle'
import Navs from './Navs'

function MainLayout() {
  return (
    <>
    <AppTitle/>
    <Navs/>
    
    <Outlet/>
   
    </>
  )
}

export default MainLayout
