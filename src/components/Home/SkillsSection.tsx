

const skills = [
    {
        name: 'Vue.js',
        years: 5,
    },
    {
        name: 'React.js',
        years: 5,
    },
    {
        name: 'React Native',
        years: 1.5,
    },
    {
        name: 'Redux',
        years: 5,
    },
    {
        name: 'Javascript',
        years: 8,
    },
    {
        name: 'TypeScript',
        years: 4,
    },
    {
        name: 'HTML',
        years: 8,
    },
    {
        name: 'SCSS/CSS',
        years: 8,
    },
    {
        name: 'Tailiwind',
        years: 1,
    },
    {
        name: 'Bootsrap',
        years: 6,
    },
    {
        name: 'Node.js',
        years: 5,
    },
    {
        name: 'Adonis.js',
        years: 1,
    },
    {
        name: 'PHP',
        years: 8,
    },
    {
        name: 'Laravel',
        years: 8,
    },
    {
        name: 'Wordpress',
        years: 1.5,
    },
    {
        name: 'Symphony',
        years: 1,
    },
    {
        name: 'Python',
        years: 1,
    },
    {
        name: 'MYSQL',
        years: 8,
    },
    {
        name: 'MongoDB',
        years: 5,
    },
    {
        name: 'Redis',
        years: 5,
    },
]


const SkillsSection = () => {
    return (
        <section className="ftco-section" id="skills-section">
            <div className="container">
                <div className="row justify-content-center pb-5">
                    <div className="col-md-12 heading-section text-center ftco-animate">
                        <h1 className="big big-2">Technical  Skills</h1>
                        <h2 className="mb-4">Technical Skills</h2>
                        <p>Technical Skills for Backend And Frontend Frameworks Pertaning to Both Web/Mobile Applications</p>
                    </div>
                </div>
                <div className="row">
                    {skills.map((item, index) => (
                        <div className="col-md-6 animate-box" key={index}>
                            <div className="progress-wrap ftco-animate">
                                <h3>{item.name} <span className="ml-2">({item.years + (item.years > 1?' years':' year' )} )</span></h3>
                                <div className="progress">
                                    <div className={item.years>=4?'progress-bar  color-1 ':'progress-bar  color-1 bg-info'} role="progressbar" aria-valuenow={item.years}
                                        aria-valuemin={0} aria-valuemax={80} style={{ width: `${item.years>=4?'100':'85'}%` }}>
                                        {/* <span>{item.years} Years</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default SkillsSection