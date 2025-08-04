
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Home';
import Navbar from './Component/Navbar';
import EnhancedClubPage from './pages/Club';
import CouncilMembersPage from './pages/Councilmember';
import UpcomingEvent from './pages/UpcomingEvents';
import ContactUs from './pages/Contact';
import StudentAffairsFooter from './Component/Footer';
import WhatsappButton from './Component/WhatsAppButton'
import Event from './pages/Event';


function App() {


  return (
    
      <div>

         <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/club' element={<EnhancedClubPage/>}/>
        <Route path='/team' element={<CouncilMembersPage/>}/>
        <Route path='/upcomingevents' element={<UpcomingEvent/>}/>
        <Route path='/contact' element={<ContactUs/>}/>

        <Route path='/pastevents' element={<Event/>}/>


      </Routes>
      <WhatsappButton/>
   <StudentAffairsFooter/>
    </Router>
</div>
    
  )
}

export default App
