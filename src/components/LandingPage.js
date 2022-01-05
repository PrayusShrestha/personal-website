import { useRef, useState } from "react"
import Typist from 'react-typist'
import About from "./About"
import ExperienceList from "./ExperienceList"
import Footer from "./Footer"
import Header from "./Header"
import ProjectList from "./ProjectList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";

function LandingPage() {
    const [idx, setIdx] = useState(0)
    const messages = [
        "happy that you're here",
        "a growing software engineer", 
        "the creator of this website", 
    ]

    const onTypingDone = () => {
        setIdx(idx + 1);
    }

    const offset = -120;
    return(
        <div className="bg-glitter">
            <Header offset={offset}/>
            <div className="h-screen bg-white">
                <div className="block text-4xl text-center relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-payne_grey">
                    <h1 className="text-8xl pb-4 text-oxford_blue">Prayus Shrestha</h1>    
                    <Typist className="pb-12 relative" onTypingDone={onTypingDone} avgTypingDelay={80} stdTypingDelay={0} key={idx}>
                        {`I'm` } {messages[idx % messages.length]}
                        <Typist.Backspace count={messages[idx % messages.length].length} delay={2000}/>
                    </Typist>
                    <div className="mt-14 w-14 h-14 border border-black p-1 rounded-full m-auto hover:border-2 relative">
                        <Link
                            activeClass="active"
                            to="About"
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={500}
                        >
                            <FontAwesomeIcon className="text-5xl hover:text-oxford_blue" icon={faAngleDoubleDown}></FontAwesomeIcon>
                        </Link>
                    </div>

                </div>  
            </div>
            <div className="h-1/2">
                <About />
            </div>
            <div className="bg-white">
                <div className="pb-10 p-10"><ExperienceList type="Work Experience"/></div>
                <div className="bg-glitter pb-10 p-10"><ExperienceList type="Additional Experience"/> </div>
                <div className="pb-5 p-10"><ProjectList /></div>
            </div>
            <Footer />
        </div>
    )
}


export default LandingPage;