import React from "react";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Nav from "../Components/NavigationHeader";

const ContactPage = () => {
    return(
        <div className="page-container">
            <div className="content-container">
                <Nav />
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;