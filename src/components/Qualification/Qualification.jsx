import React, {useState} from "react";
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development (Freelancer)</h3>
                                <span className="qualification__subtitle">KeyCast Studio</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                            <div>
                                <h3 className="qualification__title">Web Development (Freelancer)</h3>
                                <span className="qualification__subtitle">XPD Soluções Tecnológicas</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>
                         
                        </div>

                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">Web Development (Freelancer)</h3>
                                <span className="qualification__subtitle">JNET</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>

                            <div>
                                <h3 className="qualification__title">Web Development Jr</h3>
                                <span className="qualification__subtitle">ITEC - Instituto de Tecnologia em Informática e Informação do Estado de Alagoas</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                            <div>
                                <h3 className="qualification__title">Tecnologia da Informação</h3>
                                <span className="qualification__subtitle">UFMS - Universidade Federal do Mato Grosso do Sul</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - 2025
                                </div>
                            </div>
                       
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Análise e Desenvolvimento de Sistemas</h3>
                                <span className="qualification__subtitle">Unopar</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - 2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>

                            <div>
                                <h3 className="qualification__title">HTML5, CSS3 & Javascript</h3>
                                <span className="qualification__subtitle">Digital Inovation One</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>
                        </div>
                            <div></div>
                    </div>
                </div>
            </div>
            </section>
        
    );
};

export default Qualification