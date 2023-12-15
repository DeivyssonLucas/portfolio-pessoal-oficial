import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Deivysson</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">

                    <a href="https://www.instagram.com/deivyssonluccas/" className="footer__social-icon" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/deivysson-lucas-623431265/" className="footer__social-icon" target="_blank">
                        <i class="uil uil-linkedin-alt"></i> </a>

                     <a href="https://github.com/DeivyssonLucas" className="footer__social-icon" target="_blank"> 
                         <i class="uil uil-github-alt"></i></a>
                </div>

                <span className="footer__copy">&#169; Deivysson Lucas. All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer