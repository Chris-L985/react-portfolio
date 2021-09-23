import React from "react";
import Portfolio from "../Components/Portfolio";
import Footer from "../Components/Footer";
import Nav from "../Components/NavigationHeader";
import "./AllPages.css";

const PortfolioPage = () => {
    return (
        <div className="page-container">
            <div className="page-content-container">
                <Nav />
                <Portfolio />
            </div>
        </div>
    );
};

export default PortfolioPage;