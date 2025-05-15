import React from 'react'

const Procedure = () => {
  const steps = [
    {
      id: 1,
      text: "You must prepare a master resume and submit it by the specified deadline.",
    },
    {
      id: 2,
      text: "Before the deadline, the Students' Placement Office must receive the proofs justifying each point in your resume as well as PVFs (Project Verification Forms) from the project or internship mentor.",
    },
    {
      id: 3,
      text: "You must register on the Recruitment Automation System (RAS) within the specified timeframe as notified by SPO.",
    },
    {
      id: 4,
      text: "After you've registered, you are supposed to upload all one/two page resumes on the portal.",
    },
    {id: 5,
      text: "The Students' Placement Office appoints a point of contact (PoC) for your resume verification.",
    },
    {id: 6,
      text: "You would be assigned a time window during which the allotted POC would verify your resume.",
    },
    {id: 7,
      text: "Once your resume has been verified, you may begin applying to companies on the RAS in which you are eligible.",
    },
    {id: 8,
      text: "Following your application, you must attend all of the company's hiring events (PPTs / Tests / GDs).",
    },
    {id: 9,
      text: "If you get an offer from a company, the SPO would notify you and your account would be frozen",
    },
  ];

  return (
    <section className="bg-[#f9f9fb] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex flex-col items-center text-4xl font-bold text-gray-900 mb-10">Procedure</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white shadow rounded-lg p-6 text-center  hover:cursor-pointer"
            >
              <h1 className="text-xl font-extrabold text-gray-900 mb-4">{step.id}</h1>
              <p className="text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedure;
