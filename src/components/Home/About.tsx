import React from "react";


 const About = () => {
    return (
        <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-6 col-lg-5 d-flex">
                        <div className="img-about img d-flex align-items-stretch">
                            <div className="overlay"></div>
                            <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: `url(images/bg_1.png)` }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
                        <div className="row justify-content-start pb-3">
                            <div className="col-md-12 heading-section ftco-animate">
                                <h1 className="big">About</h1>
                                <h2 className="mb-4">About Me</h2>
                                <p>Software Engineer with 8+ years of experience facilitating cutting-edge engineering solutions with a wide range of technology skills. Proven ability to
                                    leverage full-stack knowledge and experience to build interactive and user-centred website applications to scale. Extensive expertise in large system
                                    architecture development and administration, as well as catering technological needs of companies through ingenious innovation to help
                                    organizations to foster their growth.

                                </p>
                                <ul className="about-info mt-4 px-md-0 px-2">
                                    <li className="d-flex"><span>Name:</span> <span>Muhammad Saddam</span></li>
                                    <li className="d-flex"><span>Address:</span> <span>Pakistan, Karachi</span></li>
                                    <li className="d-flex"><span>Email:</span> <span>saddy.devs@gmail.com</span></li>
                                    <li className="d-flex"><span>Phone: </span> <span>+92 3330220975</span></li>
                                    <li className="d-flex"><span>GitHub: </span> <a href="https://github.com/MSaddamKamal" target="_blank" >https://github.com/MSaddamKamal</a></li>
                                    <li className="d-flex"><span>Linkedin: </span> <a href="https://www.linkedin.com/in/m-saddam-6aba76228/" target="_blank" >https://www.linkedin.com/in/m-saddam-6aba76228/</a></li>
                                    <li className="d-flex"><span>StackOverflow: </span> <a href="https://stackoverflow.com/users/13947407/saddam" target="_blank" >https://stackoverflow.com/users/13947407/saddam</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="counter-wrap ftco-animate d-flex mt-md-3">
                            <div className="text">
                                <p className="mb-4">
                                    <span className="number" data-number="26">0</span>
                                    <span> Project complete</span>
                                </p>
                                <p><a href="/media/saddam-cv.pdf" download className="btn btn-info py-3 px-3">Download CV</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About