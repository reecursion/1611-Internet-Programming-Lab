import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Registration from './components/Registration';
import CallForPapers from './components/CallForPapers';
import Contact from './components/Contact';
import HeaderSample from './components/Header';
import Committee from './components/Committee';
import Workshops from './components/Workshops';
import ImportantDates from './components/ImportantDates';

function App() {
  return (
    <div className="all">
      <Router>
        <HeaderSample />
        <div className="main">
          <Routes>
            <Route path="/committee" element={<Committee />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/important-dates" element={<ImportantDates />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
