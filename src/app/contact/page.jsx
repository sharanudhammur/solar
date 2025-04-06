"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.scss";

export default function Contact() {
    return (
        <div className="contact-component">
            <div className="details">
                <div className="subtitle">Contact Us</div>
                <div className="title">Get in touch</div>
                <div className="desc">
                    Have questions, feedback, or just want to say hello? We'd love to hear from you.
                    Our team is always ready to help and provide you with the best support possible.
                    Fill out the form or reach out to us through the details below.
                </div>
                <div className="contacts">
                    <div className="each">
                        <div className="icon"><FaPhoneAlt /></div>
                        <div>+91 80881 17092</div>
                    </div>
                    <div className="each">
                        <div className="icon"><FaEnvelope /></div>
                        <div>support@example.com</div>
                    </div>
                    <div className="each">
                        <div className="icon"><FaMapMarkerAlt /></div>
                        <div>123, Some Street, Mumbai, India</div>
                    </div>
                </div>
            </div>

            <div className="form">
                <form className="form-container">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input id="name" type="text" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input id="subject" type="text" placeholder="Subject (optional)" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" placeholder="Enter your message" rows={6}></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit">Send Message</button>
                    </div>
                    <div className="form-note">
                        We usually reply within 24 hours. Thank you for reaching out!
                    </div>
                </form>
            </div>
        </div>
    );
}
