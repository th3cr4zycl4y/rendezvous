import React from 'react'
import Hero from '../components/Home/Hero'
import Events from '../components/Home/Events/Events'
import DiscoverComponent from '../components/Home/discover/DiscoverComponent'



const Home = () => {
  return (
    <div>
      <Hero />
      <Events />
      <DiscoverComponent />
    </div>
  )
}

export default Home