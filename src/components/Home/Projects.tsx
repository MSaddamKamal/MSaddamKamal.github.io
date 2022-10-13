import { useEffect, useState } from "react"
import axios from "../../config/apiRequest"


interface Props{
	handleProjectView:any
}
const Projects = ({handleProjectView}:Props) =>{
	const [data,setData] = useState<any[]>([])
	const getData = async () =>{
		let url = "https://msaddamkamal.github.io/projects/projects.json"
		let data = await axios.get(url)
		setData(data.data)
	
	}
	useEffect(()=>{
		getData()
	},[])
    return (
        <section className="ftco-section ftco-project" id="projects-section">
    	<div className="container">
    		<div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
          	<h1 className="big big-2">Portfolio</h1>
            <h2 className="mb-4">Projects Portfolio</h2>
            <p >Projects With Different TechStack incuding <span className="text-info font-weight-bolder">React,React Native,Vue,Javascript,Adonis.js,Laravel,PHP,Node,Express,Wordpress,Symphony. </span></p>
            <p className="text-primary">Following are the screenshots of some of the projects from my Portfolio. For other projects & details refer/download MY CV </p>
          </div>
        </div>
    		<div className="row">
				{data.map((item,index)=>(
					<div className="col-md-6" key={index}>
    				<div className="project img  d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${item.baseUrl+item.name+'/'+1+'.'+item.format})`}}>
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3>{item.displayName}</h3>
	    					<h6 className="text-danger">TechStack</h6>
							<h5>
								<button onClick={()=>handleProjectView(item)} type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
									View
								</button>
							</h5>
	    					<span>{item.tech}</span>
	    				</div>
    				</div>
  				</div>
				))}
    		
  				
    		</div>
    	</div>
    </section>
    )
}

export default Projects