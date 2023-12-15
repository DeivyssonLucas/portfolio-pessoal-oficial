import React, {useState} from "react";
import "./services.css"


const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Web <br /> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Web Development</h3>
                            <p className="services__modal-description">Service with 1 year of experience. Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__mocal-icon"></i>
                                    <p className="services__modal-info">I develop the user interface.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__mocal-icon"></i>
                                    <p className="services__modal-info">Web page development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__mocal-icon"></i>
                                    <p className="services__modal-info">I use languages like HTML, CSS, and JavaScript.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__mocal-icon"></i>
                                    <p className="services__modal-info">I build the structure, style, and functionality of websites.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__mocal-icon"></i>
                                    <p className="services__modal-info">I optimize websites or applications for speed, performance, and efficiency.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Responsive <br /> Design</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Responsive Design</h3>
                            <p className="services__modal-description">Service with 1 year of experience. Providing quality work to clientss and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__mocal-icon"></i>
                                    <p className="services__modal-info">I develop the user interface.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__mocal-icon"></i>
                                    <p className="services__modal-info">Web page development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__mocal-icon"></i>
                                    <p className="services__modal-info">I make sure that the website or application adapts well to various screen sizes.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__mocal-icon"></i>
                                    <p className="services__modal-info">I perform tests to identify and fix errors or bugs.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__mocal-icon"></i>
                                    <p className="services__modal-info">I create the visual elements of a website or application.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Animation &<br />Interactivity</h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Animation and Interactivity</h3>
                            <p className="services__modal-description">Service with 1 year of experience. Providing quality work to clientss and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__mocal-icon"></i>
                                    <p className="services__modal-info">I develop the user interface.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__mocal-icon"></i>
                                    <p className="services__modal-info">Web page development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__mocal-icon"></i>
                                    <p className="services__modal-info">I use frontend frameworks and libraries like React.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__mocal-icon"></i>
                                    <p className="services__modal-info">I collaborate with backend developers to integrate frontend elements with server-side logic and databases.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__mocal-icon"></i>
                                    <p className="services__modal-info">I structure code in an organized and modular way, facilitating system maintenance and scalability..</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Services