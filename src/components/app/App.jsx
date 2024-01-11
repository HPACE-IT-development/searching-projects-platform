import React from "react";

// import Header from "../Header/Header";
import AppRoutes from '../Routes/Routes'
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

const App = () => {
    return (
        <div className="body">
            <AppRoutes />
            <Projects />
            <div className="white">1</div>
            <Footer />
        </div>
    )
};

export default App;