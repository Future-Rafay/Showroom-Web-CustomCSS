import React from 'react'
import HeroBanner from '@/components/HeroHome'
import FeaturedCategories from '@/components/FeaturedCategories'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'

const page = () => {
  return (
    <>
    <HeroBanner />
    <FeaturedCategories />
    <About />
    <Testimonials />
    </>
  )
}

export default page