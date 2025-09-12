import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Projects from './components/projects/Projects';
import TextSelection from './components/textSelection/TextSelection';
import Home from './pages/home/home';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
      </Routes>
      <TextSelection />
      <Analytics />
    </BrowserRouter>
  )
}

export default App
