import React from "react";
import Nav from "../Components/NavigationHeader";
import Resume from "../Components/Resume";
import Footer from "../Components/Footer";
import "./AllPages.css";

const ResumePage = () => {
    return (
        <div className="page-container">
            <div className="content-container">
                <Nav />
                <Resume />
            </div>
            <Footer />
        </div>
    );
};

export default ResumePage;