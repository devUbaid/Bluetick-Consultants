import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Form from './components/form/Form'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home';



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Form/>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
