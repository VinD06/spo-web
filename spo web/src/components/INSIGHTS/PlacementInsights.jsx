import React from 'react'
import PlacementCard from './PlacementCard'





const PlacementInsights = () => {

  const Placedstudents=[
    { 
      rno: 22102002,
      name:"Abhay Gupta",
      company:"OLA",
      role:"Chemical Engineer",
      department:"CHE",
      year:"2024",
      imageUrl:"https://static.vecteezy.com/system/resources/previews/024/766/958/non_2x/default-male-avatar-profile-icon-social-media-user-free-vector.jpg",
      link:"https://spo.iitk.ac.in/insights/2024-placement-abhay-gupta-ola",
  },
  { 
      rno: 1,
      name:"ajsbn",
      company:"Google",
      role:"Software Engineer",
      department:"CSE",
      year:"2024",
      imageUrl:"https://static.vecteezy.com/system/resources/previews/024/766/958/non_2x/default-male-avatar-profile-icon-social-media-user-free-vector.jpg",
      link:"",
  },
  { 
      rno:21,
      name:"iakjfai",
      company:"Google",
      role:"Software Engineer",
      department:"CSE",
      year:"2024",
      imageUrl:"https://static.vecteezy.com/system/resources/previews/024/766/958/non_2x/default-male-avatar-profile-icon-social-media-user-free-vector.jpg",
      link:"",
  },
  {   
      rno:2,
      name:"alkwfsn",
      company:"Google",
      role:"Software Engineer",
      department:"CSE",
      year:"2024",
      imageUrl:"https://static.vecteezy.com/system/resources/previews/024/766/958/non_2x/default-male-avatar-profile-icon-social-media-user-free-vector.jpg",
      link:"",
  },
  {
      rno:4,
      name:"alkfsn",
      company:"Google",
      role:"Software Engineer",
      department:"CSE",
      year:"2024",
      imageUrl:"https://static.vecteezy.com/system/resources/previews/024/766/958/non_2x/default-male-avatar-profile-icon-social-media-user-free-vector.jpg",
      link:"",
  },

];

  return (
    <div>
    <div className='text-3xl font-extrabold flex flex-col items-center mt-20'>2024 Placement Insights</div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mx-auto p-8 max-w-7xl'>
    {Placedstudents.map((student,rno)=>(
        <button 
        key={student.rno}
        onClick={() => window.location.href = `${student.link}`}><PlacementCard
        name={student.name}
        company={student.company}
        role={student.role}
        department={student.department}
        year={student.year}
        imageUrl={student.imageUrl}
  />
  </button>
      

    ))}
  </div>


    </div>
  )
}

export default PlacementInsights