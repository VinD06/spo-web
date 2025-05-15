import { useRef } from 'react';

import Navbar from './components/ForStudents/Navbar.jsx';
import PAGE1 from './components/ForStudents/PAGE1.jsx';
import Procedure from './components/ForStudents/Procedure.jsx';
import Resources from './components/ForStudents/Resources.jsx';
import PreparationRoadmaps from './components/ForStudents/PreparationRoadmaps.jsx';
import ResumeFAQ from './components/ForStudents/ResumeFAQ.jsx';
import Footer from './components/ForStudents/Footer.jsx';

function ForStudents() {
  const procedureRef = useRef(null);
  const resourcesRef = useRef(null);
  const roadmapRef = useRef(null);
  const faqRef = useRef(null);

  return (
    <>
      <Navbar />
      <PAGE1
        onScrollToProcedure={() => procedureRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onScrollToResources={() => resourcesRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onScrollToRoadmaps={() => roadmapRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onScrollToFAQ={() => faqRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />
      <div ref={procedureRef}><Procedure /></div>
      <div ref={resourcesRef}><Resources /></div>
      <div ref={roadmapRef}><PreparationRoadmaps /></div>
      <div ref={faqRef}><ResumeFAQ /></div>
      <Footer />
    </>
  );
}

export default ForStudents;
