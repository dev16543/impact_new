
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Home';
import Navbar from './Component/Navbar';
import EnhancedClubPage from './pages/Club';

function App() {


  return (
    
      <div>

         <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/club' element={<EnhancedClubPage/>}/>
        

      </Routes>
 
    </Router>
</div>
    
  )
}

export default App
