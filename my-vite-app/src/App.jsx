
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Home';

function App() {


  return (
    
      <div>

         <Router>
    
      <Routes>
        <Route path="/" element={<HomePage/>} />

      </Routes>
 
    </Router>
</div>
    
  )
}

export default App
