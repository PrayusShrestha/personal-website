import { useRef, useState } from "react"
import Typist from 'react-typist'
import About from "./About"
import Education from "./Education"
import ExperienceList from "./ExperienceList"
import Header from "./Header"
import ProjectList from "./ProjectList"
import ResumeSection from "./ResumeSection"

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

    const workExperienceRef = useRef();

    const handleWorkExperienceClick = () => {
        console.log("clicked work experience"); 
        console.log(workExperienceRef);
        workExperienceRef.current.scrollIntoView({ behavior: 'smooth' })
    }


    return(
        <>
            <Header workExperienceClick={handleWorkExperienceClick}/>
            <div className="h-screen">
                <div className="text-4xl text-center absolute left-1/2 top-2/4 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-8xl pb-4">Prayus Shrestha</h1>    
                    <Typist onTypingDone={onTypingDone} avgTypingDelay={80} stdTypingDelay={0} key={idx}>
                        {`I'm` } {messages[idx % messages.length]}
                        <Typist.Backspace count={messages[idx % messages.length].length} delay={2000}/>
                    </Typist>
                </div>  
            </div>
            <About />
            <div className="">
                <ExperienceList ref={workExperienceRef} type="Work Experience"/>
                <ExperienceList type="Additional Experience"/>
                <ProjectList />
            </div>
            
        </>
    )
}


export default LandingPage;