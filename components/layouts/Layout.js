import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <main className="wrapper py-4">{children}</main>
    </div>
  )
}

export default Layout