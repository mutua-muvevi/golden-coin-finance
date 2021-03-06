import React from 'react';
import Navbar from "../navbar/navbar";
import "./contact.css"

const ContactBanner = () => {
	return (
		<div className="contact-banner">
		<Navbar/>

		<div className="contact-banner-main">
			  <div className="contact-main-content">
					<div className="top-banner-line"></div>
				  <h1 className="banner-header">
					  Contact Us
				  </h1>
			  </div>
		</div>
	</div>
	);
};

export default ContactBanner;
