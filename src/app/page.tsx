import React from 'react'
// import styles from './page.module.css'
import HeroBanner from '@/components/HeroHome'
import FeaturedCategories from '@/components/FeaturedCategories'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'

const page = () => {
  return (
    <>
    <HeroBanner />
    <FeaturedCategories />
    <About />
    <Testimonials />
    <CallToAction />
      
    </>
  )
}

export default page