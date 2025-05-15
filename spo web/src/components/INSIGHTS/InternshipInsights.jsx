import React from 'react'
import InternshipCard from './InternshipCard';






const InternshipInsights = () => {

  const Internstudents=[
    { 
      rno: 22102002,
      name:"Aayush Gupta",
      company:"Graviton",
      role:"Quant Profile",
      department:"CHE",
      year:"2024",
      imageUrl:"https://static.vecteezy.com/system/resources/previews/024/766/958/non_2x/default-male-avatar-profile-icon-social-media-user-free-vector.jpg",
      link:"https://spo.iitk.ac.in/insights/2024-intern-aayush-gupta-graviton",
  },
  { 
      rno: 1,
      name:"ajsbn",
      company:"Google",
      role:"SDE",
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
    {Internstudents.map((student,rno)=>(
        <button 
        key={student.rno}
        onClick={() => window.location.href = `${student.link}`}><InternshipCard
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

export default InternshipInsights