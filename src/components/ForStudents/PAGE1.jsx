import React from 'react'
import { useNavigate } from 'react-router-dom'


const PAGE1 = ({ onScrollToProcedure, onScrollToResources, onScrollToRoadmaps, onScrollToFAQ }) => {
    const navigate = useNavigate()

  const goToInsights = () => {
    navigate('/insights')
  }

  return (
    <div className="bg-gray-900 text-white w-full h-auto flex flex-col items-center space-y-4 pt-16">
  <div className="flex flex-col items-center text-5xl font-bold mt-12">For Students</div>

  <div className="flex flex-col items-center text-xl font-sans justify-center">
    A collection of resources for students at IIT Kanpur
  </div>

  <div className="text-xl mt-8 ml-6 flex flex-wrap p-6 grid-cols-5 lg:grid-cols-4 md:grid-col-3 sm:-grid-col-2 items-center justify-center font-bold gap-4 pb-12 ">
    <button className="border-2 w-[auto] h-[auto] grid-cols-5 lg:grid-cols-4 md:grid-col-3 sm:-grid-col-2 items-center border-blue-600  px-6 py-3 rounded bg-gray-900 text-blue-600
    transition-transform duration-200 transform hover:scale-105"
    onClick={goToInsights}>Insights</button>
    <button onClick={onScrollToProcedure} className="border-2 w-[auto] h-[auto] grid-cols-5 lg:grid-cols-4 md:grid-col-3 sm:-grid-col-2 items-center border-blue-600  px-6 py-3 rounded bg-gray-900 text-blue-600
    transition-transform duration-200 transform hover:scale-105
    ">Procedures</button>
    <button onClick={onScrollToResources} className="border-2 w-[auto] h-[auto] grid-cols-5 lg:grid-cols-4 md:grid-col-3 sm:-grid-col-2 items-center border-blue-600  px-6 py-3 rounded bg-gray-900 text-blue-600
    transition-transform duration-200 transform hover:scale-105
    ">Resources</button>
    <button onClick={onScrollToRoadmaps} className="border-2 w-[auto] h-[auto] grid-cols-5 lg:grid-cols-4 md:grid-col-3 sm:-grid-col-2 items-center border-blue-600  px-6 py-3 rounded bg-gray-900 text-blue-600
    transition-transform duration-200 transform hover:scale-105
    ">Preparation Roadmaps</button>
    <button  onClick={onScrollToFAQ}className="border-2 w-[auto] h-[auto] grid-cols-5 lg:grid-cols-4 md:grid-col-3 sm:-grid-col-2 items-center border-blue-600  px-6 py-3 rounded bg-gray-900 text-blue-600
    transition-transform duration-200 transform hover:scale-105
    ">FAQs</button>
  </div>
</div>

  )
}

export default PAGE1