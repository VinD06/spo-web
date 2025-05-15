import React from 'react'

const Resources = () => {
  const steps = [
    {
      id: 1,
      text: "Deffered Placement Policy",
      Link: 'https://spo.iitk.ac.in/docs/2021-22/deferred_placement_policy.pdf',
    },
    {
      id: 2,
      text: "Placement Policy",
      Link: 'https://spo.iitk.ac.in/assets/2023-24/Placement_Policy_2024-25.pdf',
    },
    {
      id: 3,
      text: "Internship Policy",
      Link: 'https://spo.iitk.ac.in/assets/2023-24/Internship-Policy-2024-25.pdf',
    },
    {
      id: 4,
      text: "Leave Application",
      Link: 'https://spo.iitk.ac.in/docs/2021-22/LAF.doc',
    },
    {id: 5,
      text: "Project Verification Form",
      Link: 'https://spo.iitk.ac.in/docs/2021-22/PVF.doc',
    },
    {id: 6,
      text: "PPT Absence Form",
      Link: 'https://docs.google.com/forms/d/e/1FAIpQLSdV3sWKB-GSbFNkHdGSSP7N4ydybbFYumTjBSIAaZw04Na-xQ/viewform',
    },
    {id: 7,
      text: "PPT Corporate Internship Waiver Form Form",
      Link: 'https://docs.google.com/document/d/1zQg3xr6Ca0jHFWPn6o2ZCyi7ypxtjdFoYdIT4pZwncc/edit?tab=t.0',
    },
    {id: 8,
      text: "List of Companies",
      Link: 'https://spo.iitk.ac.in/docs/2021-22/List-of-companies.pdf',
    },
    {id: 9,
      text: "Previous Year Intern Proformas",
      Link: 'https://spo.iitk.ac.in/proformas/intern',
    },
    {id: 10,
      text: "Previous Year Placement Proformas",
      Link: 'https://spo.iitk.ac.in/proformas/placement',
    },
  ];

  return (
    <section className="bg-[#f9f9fb] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex flex-col items-center text-4xl font-bold text-gray-900 mb-10">Resources</h2>
        <div className="w-[70vw] grid grid-cols-1 lg:grid-cols-3 gap-6  justify-center items-center mx-auto">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white shadow rounded-lg p-6 text-center  hover:cursor-pointer"
              onClick={() => window.location.href = `${step.Link}`}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">{step.text}</h2>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
