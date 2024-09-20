import React from 'react'
import Hero from '../../components/Hero/Hero';
import Sponsors from '../../components/Sponsors/Sponsors';
import AboutUs from '../../components/AboutHome/AboutHome';
import Courses from '../../components/Courses/Courses';
import Students from '../../components/Students/Students';
import Testimonies from '../../components/Testimonies/Testimonies';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Sponsors/>
      <AboutUs/>
      <Courses/>
      <Students/>
      <Testimonies/>
    </div>
  )
}

export default Home
