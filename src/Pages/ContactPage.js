import React from "react";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const ContactPage = () => {
    return(
        <div className="page-container">
            <div className="content-container">
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;