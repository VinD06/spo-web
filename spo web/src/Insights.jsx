import React from 'react'
import Front from './components/INSIGHTS/front'
import Footer from './components/ForStudents/Footer'

import PlacementInsights from './components/INSIGHTS/PlacementInsights.jsx'
import InternshipInsights from './components/INSIGHTS/InternshipInsights.jsx'

const Insights = () => {
  return (
    <>
    <Front/>
    <PlacementInsights/>
    <InternshipInsights/>
    <Footer/>
    </>
  )
}

export default Insights