import headshot from '../data/cartoon_headshot.png'
import Education from './Education';
// export default function About() {
//     return (
//       <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//         hi
//       </div>
//     )
//   }
function About() {

    return ( 
        // <div className="translate-x-1/2 h-8/12 m-4 flex  overflow-hidden w-8/12 border-2 rounded text-4xl">
        <>
        <div className="w-screen h-[32rem] block"> 


            <div className="w-8/12 border-2 left-1/2 absolute -translate-x-1/2">
                    
                <img className="float-left border-r-2" alt="headshot" src={headshot}></img>
            
                <h2 className="pb-4">Thanks for stopping by</h2>
                <p className="text-sm">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>



        </div>
        </>
     );
}

export default About;