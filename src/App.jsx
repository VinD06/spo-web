import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ForStudents from './ForStudents'
import Insights from './Insights'
import Navbar from './components/ForStudents/Navbar'
import ResumeFAQ from './components/ForStudents/ResumeFAQ'
import Resources from './components/ForStudents/Resources'
import Procedure from './components/ForStudents/Procedure'



function App() {
  return (<>
    <Navbar/>
    <Router>
      
      <Routes>
        <Route path="/" element={<ForStudents />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
