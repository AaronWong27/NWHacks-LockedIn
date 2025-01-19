import { Link } from "react-router-dom";

import './css/output.css'
import './css/Index.css'

// Images
import logo from './assets/lockedin-logo.png'

function Index(){
    return(
        <>
            <header class="mx-[10rem] mt-[1rem]"> 
                <nav>
                    <Link to="/">
                        <img src={logo} alt="Home"
                            class="h-[3rem]" />
                    </Link>
                </nav>

                {/* Heading */}
                <h1 class="font-semibold text-[2.5rem] mt-[2rem]">
                    Hello,&nbsp; 
                    <span id="username" class="dark-blue">
                        Yonka!</span>
                </h1>
                {/* Subheading */}
                <p>
                    Nice to meet you! I'm here to help you <span class="font-bold">lock in</span> and get a job!
                </p>
            </header>


        </>
    )

}

export default Index;