import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TextSelection from './components/textSelection/TextSelection';
import Home from './pages/home/home';
import PageNotFound from './pages/PageNotFound';
import ProjectsLayout from "./pages/ProjectsLayout";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<ProjectsLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <TextSelection />
      <Analytics />
    </BrowserRouter>
  )
}

export default App
