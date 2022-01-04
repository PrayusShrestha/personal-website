import { useRef, useState } from "react"
import Typist from 'react-typist'
import About from "./About"
import Education from "./Education"
import ExperienceList from "./ExperienceList"
import Footer from "./Footer"
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


    return(
        <div className="bg-glitter">

            <Header/>
            <div className="h-screen bg-white">
                <div className="text-4xl text-center relative left-1/2 top-2/4 -translate-x-1/2 -translate-y-1/2 text-payne_grey">
                    <h1 className="text-8xl pb-4 text-oxford_blue">Prayus Shrestha</h1>    
                    <Typist onTypingDone={onTypingDone} avgTypingDelay={80} stdTypingDelay={0} key={idx}>
                        {`I'm` } {messages[idx % messages.length]}
                        <Typist.Backspace count={messages[idx % messages.length].length} delay={2000}/>
                    </Typist>
                </div>  
            </div>
            <About />
            <div className="bg-white my-10 py-8">
                <div className="pb-5 p-10"><ExperienceList type="Work Experience"/></div>
                <div className="bg-glitter pt-5 pb-5 p-10"><ExperienceList type="Additional Experience"/> </div>
                <div className="pt-5 pb-5 p-10"><ProjectList /></div>
            </div>
            <Footer />
        </div>
    )
}


export default LandingPage;