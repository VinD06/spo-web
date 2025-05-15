import React, { useState } from 'react'


const FAQ = ({ques,ans}) => {
  const [isOpen, setIsOpen] = useState(false);

  

  return( 
    <div className="bg-white shadow rounded-lg p-6 hover:cursor-pointer transition-all duration-300" onClick={() => setIsOpen(!isOpen)}>
      <button
        className="w-full text-left flex items-start justify justify-between font-medium text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='font-extrabold'>{ques}</span>
        <span className='items'>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 text-left"
        onClick={() => setIsOpen(!isOpen)}>
          <div className={`mt-4  ${
          isOpen ? 'opacity-100 scale-y-100 max-h-96' : 'opacity-0 scale-y-0 max-h-0'}`}
          onClick={() => setIsOpen(!isOpen)}>
          <br></br>Ques: {ques} <br></br><br></br>{ans}
        </div>
        </div>
      )}
    </div>
  );
};
const ResumeFAQ = () => {

  const steps = [
    {
      id: 1,
      text: "There are no restrictions on the resume format barring a few mentioned below. The top heading of your resume should be your Name, Department, year of study, and contact information. A table of educational qualifications should follow it including 10th, 12th marks, and CPI(UG and PG both if applicable) in reverse chronological order.",
      heading: 'What are the restrictions on resume format?',
    },
    {
      id: 2,
      text: "The resume file should be named as RollNumber_Name__Program_Department_ResumeNumber. For example, a student with the following details: Roll number: 190351, Name: Gyanendra Kumar, Program - BTech(BT), Department : Mechanical(ME) should name the resume files as 190351_Gyanendra_BT_ME_1, 190351_Gyanendra_BT_ME_2, 190351_Gyanendra_BT_ME_3.",
      heading: 'What should be the name of the resume file (one page)?',
    },
    {
      id: 3,
      text: " [Please note that the below exceptions are only allowed for Scholastic and Extracurricular Achievements.] For verification of 10th marks, 12th marks, and JEE ranks, a google form will be circulated through mail.All the students will need to fill out that for For the verification of any other scholastic achievements(if you do not have a scanned copy of the documents with you), you need to fill the following undertaking and include it in the zip file of proofs, to be sent to spoproofs2022@gmail.com. Undertaking Form[bit.ly/spoundertaking] These details will be cross- verified in the future and any discrepancy will be dealt with according to SPO policy.The points on your resume for which you will provide the undertaking should be # marked with a footnote 'not verified by SPO'. Such points should be given a # mark and a footnote only on the Master Resume, which is not visible to the company officials, and not on the one - page resumes, to be uploaded on the portal.",
      heading: 'How to mention JEE Mains/JEE Adv/any other examination ranks or other scholastic achievements in my resume?',
    },
    {
      id: 4,
      text: "PoR and projects under Clubs/ Teams of IITK (summer projects as well) will be ratified through the lists sent by PSG, Senate Chairperson, MnC Gensec, or SnT Gensec.",
      heading: "How will my PoR/projects under the institute clubs be verified?",
    },
    {id: 5,
      text: "For verification of such projects, one has to submit codes/git repo links/ (or any other proof ) as deemed necessary.You will have to clearly mention that the project is a self-project.",
      heading: 'I have some Self projects, how will they be verified?',
    },
    {id: 6,
      text: "For verification of online courses/online projects, you will need to submit the pdf certificate issued by the concerned organization. While mentioning the same on your resume, you will have to specify that the course/project was an online course/project.",
      heading: 'How to verify online courses/online projects?',
    },
    {id: 7,
      text: "The proof is not required for points under this heading unless they specify a certain position ex. Got 2nd place in School debate competitions.",
      heading: 'Is proof required for Extracurricular points?',
    },
    {id: 8,
      text: "Fill up the PVF with whatever work has been completed and ask your mentor to sign and send it to spoproofs2022@gmail.com.You will have to mention in the resume that the internship/project is ongoing.",
      heading: 'My internship/project is ongoing and will not be finished before resume submission. What should I do?',
    },
    {id: 9,
      text: "No, after the resume has been verified it will not be changed. The resume can only be updated in Phase-2 of the internship/placement season.",
      heading: 'Can I update my resume after the deadline?',
    },
    {id: 10,
      text: "Whatever CPI is there on Pingala during resume verification will be taken as final.",
      heading: 'Will the Summer CPI be included?',
    },
  ];

  return (
    <section className="bg-[#f9f9fb] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex flex-col items-center text-4xl font-bold text-gray-900 mb-10">Resume FAQs</h2>
        <div className="w-[80vw] space-y-4 justify-center items-center mx-auto">
          {steps.map((step,idx) => (
            <
              FAQ
              ques={step.heading}
              ans={step.text}
              key={idx}
              className="bg-white shadow  rounded-lg p-6 text-center  hover:cursor-pointer"
              
            />
          ))}
        </div>
      </div>
      <p className='p-10 text-lg'> <span className='font-bold'>NOTE:</span> Whenever you send a mail containing proofs/PVFs or anything related to resume submission, kindly ensure that the subject contains your roll number. For detailed guidelines and recommendations on resume making, all the students are advised to visit this <a href='https://docs.google.com/document/d/113Gqoz3X4ZMAybflQi2LkI2DbY7ULgyZ8mwS-QcE68s/edit?tab=t.0' className='text-blue-700 text-decoration-line: underline'>link</a>.</p>
    </section>
  );
};

export default ResumeFAQ;
