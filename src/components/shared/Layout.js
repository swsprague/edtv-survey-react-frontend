import React from 'react'

// import Header from '../Header/Header'
import Footer from './Footer'

const Layout = props => (
  <div>
    <h1>Welcome to EDTV!</h1>
    {props.children}
    <Footer/>
  </div>
)

export default Layout
