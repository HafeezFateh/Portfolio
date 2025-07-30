import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';

function App(){
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/education" element={<Home />} />
                    <Route path="/certifications" element={<Home />} />
                    <Route path="/connect" element={<Home />} />
                   
                </Routes>
            </Router>
        </>
    )
}

export default App;