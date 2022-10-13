const experience = [
    {
        year: 'Jan 2019 - Present',
        company: 'EGLOBAL (FINTECH)',
        location: 'DUBAI, UAE',
        designation: 'TEAM LEAD / SENIOR SOFTWARE ENGINEER',
        description: [
            'Engineered modern web applications using React,Vue,Node,Laravel, JavaScript,Redis,AWS ,SQL Server, and No SQL',
            'Currently Leading 4 Fintech products of Eglobals. Mentoring and managing a team of 4 software engineers.',
            'Built innovative api gateway features into new products to exceed industry standards and achieve 100% compliance with security practices.',
            'Initiates and develops products from scratch using a new and updated technology stack.',
            'Optimize Restful APIs latency and Database CRUD operations, ensured SOLID principles in the software.',
            'Evaluated and proposed solutions for complex software architectural challenges.',
            "Contribute new technologies and guidelines with the Development Manager while also catering to junior developers’ issues and problems."
        ],
        achievements:[
            'Identified and dealt with a significant process bottleneck that boosted system speed and coding efficiency by 65% when resolved.',
            'Built a robust security system and slashed security breaches by an average of 81% for all clients.'
        ]
    },
    {
        year: 'April 2017 - Dec 2019',
        company: 'REAVERTECH',
        location: 'KARACHI, PAKISTAN',
        designation: 'FULLSTACK DEVELOPER',
        description: [
            'Engineered a range of modern web applications using React,Vue,Laravel,Express,Jquery, Redis,AWS,MYSQL,Mongo.',
            'Integrated different payment gateways including PayPal, Stripe, Etisalat and other payment APIs.',
            'Provided leadership as a subject matter expert (SME) on hosting issues, client and staff logins, and general upgrades.',
            'Designed and implemented web application, streamlining high-server traffic resource configuration and allocation.',
            'Making REST APIs, custom guards and jwt implementation.',
            
        ],
        achievements:[
            "Different client’s software was delivered to them on time, exceeding their expectations and satisfaction.",
            'Was awarded employee of the year award for consecutively delivering 8 sprints ahead of their time.'
        ]
    },
    {
        year: 'Nov 2014 - March 2017',
        company: 'DIGITAL GRAVITY',
        location: 'KARACHI, PAKISTAN',
        designation: 'FULLSTACK DEVELOPER',
        description: [
            'Develop web applications and REST APIs using Laravel,Express,Jquery,Javascript,Symphony,Wordpress,AWS,MYSQL,Mongo.',
            'Solution-driven web development adapt at contributing to highly collaborative work environment, finding solutions and determining customer satisfaction.',
            'Proven experience developing consumer-focused websites using HTML, CSS, PHP and JavaScript Frameworks.',

            
        ],
        achievements:[
            'Built products for desktop and mobile app users, meeting highest standards for web design, user experience, best practices and speed optimization.',
        
        ]
    },
]

export default function ExperienceSection(){
    return (
        <section className="ftco-section ftco-no-pb" id="resume-section">
    	<div className="container">
    		<div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center ftco-animate">
          	<h1 className="big big-2">Experience</h1>
            <h2 className="mb-4">Professional Experience</h2>
                        <p>Software Engineer with 8+ years of experience. Working with diversified teams , integrating new features to the software applications accompanied by thorough analysis for possible structure change.
                            Aiding in the development of Web/Mobile Applications and providing consistent
                            support in assuring quality of projects with a diversified portfolio of skills.</p>
          </div>
        </div>
    		<div className="row">
    			{experience.map((item,index)=>(
                    <div className="col-md-12" key={index}>
    				<div className="resume-wrap ftco-animate">
    					<span className="date">{item.year}</span>
    					<h2>{item.designation}</h2>
    					<h6 className="text-warning">{item.company}</h6>
    					<span className="position text-info">{item.location}</span>
                        <ul>
                           {item.description.map((desBullets,desIndex)=>(
                             <li key={desIndex}>
                                {desBullets}
                             </li>
                           ))}
                        </ul>
                        <span className="position"> Key Achievements</span>
                        <ul>
                           {item.achievements.map((achBullets,achIndex)=>(
                             <li key={achIndex}>
                                {achBullets}
                             </li>
                           ))}
                        </ul>
    				</div>
    			
    			</div>
                ))}
    		</div>
    		<div className="row justify-content-center mt-5">
    			<div className="col-md-6 text-center ftco-animate">
    				<p><a href="/media/saddam-cv.pdf" download className="btn btn-info py-4 px-5">Download CV</a></p>
    			</div>
    		</div>
    	</div>
    </section>
    )
}

