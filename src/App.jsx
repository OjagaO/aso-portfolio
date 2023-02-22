import './componets/reset.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Index from './componets/Index.jsx';
import AboutPage from './componets/About.jsx';
import WorkPage from './componets/Work.jsx';
import ContactPage from './componets/Contact.jsx';
// import { AnimatePresence } from "framer-motion";

function App() {

  // const location = useLocation();

  // return (
  //   <div className="app">
  //     <Router>
  //       <AnimatePresence>
  //         <Routes location={location} key={location.pathname}>
  //           <Route path='/' element={<Index />} />
  //           <Route path='/about' element={<AboutPage />} />
  //           <Route path='/work' element={<WorkPage />} />
  //           <Route path='/contact' element={<ContactPage />} />
  //         </Routes>
  //       </AnimatePresence>
  //     </Router>
  //   </div>
  // );

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/work' element={<WorkPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
