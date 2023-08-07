import "./componets/reset.css";
import Index from "./componets/Index.jsx";
import AboutPage from "./componets/About.jsx";
import WorkPage from "./componets/Work.jsx";
import ContactPage from "./componets/Contact.jsx";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
    const location = useLocation();
    const ghPagesUrl = "/aso-portfolio";

    return (
        <div className="app">
            <Routes location={location} key={location.pathname}>
                <Route path={ghPagesUrl + "/"} element={<Index />} />
                <Route path={ghPagesUrl + "/about"} element={<AboutPage />} />
                <Route path={ghPagesUrl + "/work"} element={<WorkPage />} />
                <Route path={ghPagesUrl + "/contact"} element={<ContactPage />} />
                <Route path="*" element={<Index />} />
            </Routes>
        </div>
    );
}

export default App;
