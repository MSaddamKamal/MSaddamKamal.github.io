import { useState } from "react"


export default function Header(){
    const [colapse,setColapse] = useState<any>('')
	const handleColapse = ()=>{
		if(colapse == ''){
			setColapse('show')
		}else{
			setColapse('')
		}
	}
	return (
	
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
	    <div className="container">
	      <a className="navbar-brand" href="https://msaddamkamal.github.io/">M.Saddam</a>
	      <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu text-primary"></span> Menu
	      </button>
	      {/* <button className="" type="button" onClick={handleColapse}>
	        <span className="oi oi-menu text-primary"></span> Menu
	      </button> */}

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav nav ml-auto">
	          <li className="nav-item"><a href="#home-section" className="nav-link"><span>Intro</span></a></li>
			  <li className="nav-item"><a href="#skills-section" className="nav-link"><span>Skills</span></a></li>
	          <li className="nav-item"><a href="#about-section" className="nav-link"><span>Bio/Git/LinkedIn</span></a></li>
	          <li className="nav-item"><a href="#resume-section" className="nav-link"><span>Experience</span></a></li>
			  <li className="nav-item"><a href="#projects-section" className="nav-link"><span>Portfolio</span></a></li>
	          <li className="nav-item"><a href="#education" className="nav-link"><span>Education</span></a></li>
	          <li className="nav-item"><a href="#publications" className="nav-link"><span>Publications/Awards</span></a></li>
	         
	      
	        </ul>
	      </div>
	    </div>
	  </nav>
    )
}

