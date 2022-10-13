import { useEffect, useState } from "react";
import HeroSection from "../../components/Home/HeroSection"
import AboutSection from "../../components/Home/About"
import ExperienceSection from "../../components/Home/ExperienceSection"
import SkillsSection from "../../components/Home/SkillsSection"
import Projects from "../../components/Home/Projects"
import Gallery from "../../components/Utility/Gallery"
import Layout from "../../components/Layout"
import Modal from "../../components/Utility/Modal"
import Education from "../../components/Home/Education";
import Others from "../../components/Home/Others";
import Awards from "../../components/Home/Awards";


const Home = () => {
    useEffect(() => {
        let url = "/js/main.js"
        if (!isMyScriptLoaded(url)) {
            const script = document.createElement("script");
            script.src = url;
            script.async = true;
            document.body.appendChild(script);
        }


    }, [])

    const [galleryData, setGalleryData] = useState<any>({})
    const [modalTitle, setModalTitle] = useState('')

    const handleProjectView = (data) => {
        setGalleryData(data)
        setModalTitle(data.displayName)
    }

    function isMyScriptLoaded(url: string): boolean {
        var scripts = document.getElementsByTagName('script');
        for (var i = scripts.length; i--;) {
            if (scripts[i].src == url) return true;
        }
        return false;
    }
    return (
        <Layout>
            <HeroSection />
            <SkillsSection />
            <AboutSection />
            <ExperienceSection />
            <Projects handleProjectView={handleProjectView} />
            <Education/>
            <Others/>
            <Awards/>
            <Modal title={modalTitle}>
                <Gallery data={galleryData} />
            </Modal>


        </Layout>
    )
}

export default Home