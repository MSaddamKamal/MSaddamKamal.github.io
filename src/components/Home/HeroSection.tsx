import { useEffect } from "react"


function HeroSection() {
 
   
    return <section id="home-section" className="hero">
        <div className="home-slider  owl-carousel">
            {/* <div className="slider-item ">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                        <div className="one-third js-fullheight order-md-last img" style={{backgroundImage:`url(images/bg_1.png)`}}>
                            <div className="overlay"></div>
                        </div>
                        <div className="one-forth d-flex  align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <div className="text">
                                <span className="subheading">Hello!</span>
                                <h1 className="mb-4 mt-3">I'm <span>Saddam</span></h1>
                                <h2 className="mb-4">A FullStack Developer/Engineer</h2>
                                <p><a href="#" className="btn btn-primary py-3 px-4">Hire me</a> <a href="#" className="btn btn-white btn-outline-white py-3 px-4">My works</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="slider-item">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row d-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                        <div className="one-third js-fullheight order-md-last img" style={{backgroundImage:`url(images/bg_2.png)`}}>
                            <div className="overlay"></div>
                        </div>
                        <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <div className="text">
                                <span className="subheading">Hello!</span>
                                <h1 className="mb-4 mt-3">I'm a <span>FullStack Developer/Engineer</span> based in Pakistan And <span>Open For Remote Work</span></h1>
                                <p><a href="mailto:saddy.devs@gmail.com" className="btn btn-primary py-3 px-4">Hire me</a> <a href="#projects-section" className="btn btn-white btn-outline-white py-3 px-4">My works</a><a href="/media/saddam-cv.pdf" download className="btn btn-info py-3 px-4">Download CV</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}


export default HeroSection