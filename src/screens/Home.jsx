import React from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import CategoriesSection from './CategoriesSection'

const Home = () => {
  return (
    <div className='home_page min-h-screen'>
      <Header />
      <Banner />
      <CategoriesSection />
    </div>
  )
}

export default Home
