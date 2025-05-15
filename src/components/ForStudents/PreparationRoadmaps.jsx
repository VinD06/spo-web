import React from 'react'

const PreparationRoadmaps = () => {
  const steps = [
    {
      id: 1,
      text: "Mechanical Core",
      Link: 'https://spo.iitk.ac.in/assets/ME%20Core%20Roadmap.pdf',
    },
    {
      id: 2,
      text: "Electrical Core",
      Link: 'https://spo.iitk.ac.in/assets/final_roadmap__EE.pdf',
    },
    {
      id: 3,
      text: "Analyst",
      Link: 'https://spo.iitk.ac.in/assets/Roadmap_Analytics.pdf',
    },
    {id: 4,
      text: "Product Management",
      Link: 'https://spo.iitk.ac.in/assets/Roadmap_PM_New.pdf',
    },
    {id: 5,
      text: "SDE",
      Link: 'https://spo.iitk.ac.in/assets/Roadmap_SDE.pdf',
    },
    {id: 6,
      text: "Consulting",
      Link: 'https://spo.iitk.ac.in/assets/Roadmap_Consulting.pdf',
    },
    {id: 7,
      text: "MSE Core",
      Link: 'https://spo.iitk.ac.in/assets/Roadmap_MSE.pdf',
    },
    {id: 8,
      text: "CHE Core",
      Link: 'https://spo.iitk.ac.in/assets/ROADMAP%20FOR%20CHE%20CORE%20(3).pdf',
    },
    {id: 9,
      text: "AE Core",
      Link: 'https://spo.iitk.ac.in/assets/Roadmap_AE.pdf',
    },
  ];

  return (
    <section className="bg-[#f9f9fb] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className=" flex flex-col items-center text-5xl font-bold text-gray-900  mb-10">Preparation Roadmaps</h3>
        <div className="w-[60vw] h-auto grid grid-cols-1 lg:grid-cols-3 gap-6  justify-center items-center mx-auto">
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

export default PreparationRoadmaps;
