import React, { useState } from 'react'
import InternshipCard from './InternshipCard';






const InternshipInsights = () => {

  const [search, setSearch] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('All');

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

    // Filtered list
      const filteredStudents = Internstudents.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase());
        const matchesDept = departmentFilter === 'All' || student.department === departmentFilter;
        return matchesSearch && matchesDept;
      });

  return (<>
    {/* 🔍 Search & Filter */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-6 items-center px-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded px-4 py-2"
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option value="CSE">CSE</option>
          <option value="CHE">CHE</option>
          {/* Add more departments as needed */}
        </select>
      </div>



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
    </>
  )
}

export default InternshipInsights