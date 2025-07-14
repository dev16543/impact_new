
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Home';
import Navbar from './Component/Navbar';

function App() {


  return (
    
      <div>

         <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        

      </Routes>
 
    </Router>
</div>
    
  )
}

export default App
