import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Connect from './Connect';
import Certifications from './Certifications';
import Education from './Education';
import About from './About';

function App(){
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/certifications" element={<Certifications />} />
                    <Route path="/connect" element={<Connect />} />
                   
                </Routes>
            </Router>
        </>
    )
}

export default App;