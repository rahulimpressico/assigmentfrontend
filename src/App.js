import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegistrstionForm } from './Components/Registration';
import { Dashboard } from './Components/Dashboard';

function App() {
  return (
  

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        
        <Route exact path="/Registration" element={<RegistrstionForm/>} />
        <Route exact path="/Dashboard" element={<Dashboard/>} />


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
