import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Main from './Main';
import { NewPage } from './NewPage';

function App() {
  return (
    
    <Router>
      <div className='App'>
    <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path="/newpage" element={<NewPage/>}/>
    </Routes>
    </div>
  </Router>
      
    
  );
}

export default App;
