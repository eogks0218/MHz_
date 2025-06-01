import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import MHzHome from './components/pages/MHzHome';
import ContactPage from './components/pages/ContactPage';
import ServiceViralPage from './components/pages/ServiceViralPage';
import ServiceNCHPage from './components/pages/ServiceNCHPage';
import SuccessPage from './components/pages/SuccessPage';
import PortPolioPage from './components/pages/PortPolioPage';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MHz" element={<MHzHome />} />
        <Route path="/MHz/Contact" element={<ContactPage />} />
        <Route path="/MHz/ServiceCV" element={<ServiceViralPage />} />
        <Route path="/MHz/ServiceNCH" element={<ServiceNCHPage />} />
        <Route path="/MHz/Success" element={<SuccessPage />} />
        <Route path="/MHz/PortPolio" element={<PortPolioPage />} />
      </Routes>
    </>
  );
}

export default App;
