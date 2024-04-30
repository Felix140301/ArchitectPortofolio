import './App.css';
import { Routes, Route} from "react-router-dom";
import Projects from "./pages/Projects";
import HeroImage from "./pictures/MagdaHero.jpg"// with import
import FirstProject from "./pictures/MagdaProiect1.png"// with import
import svgline from "./pictures/SvgLine.png"//with import
import aboutBack from "./pictures/aboutBack.jpg"//with import
import {Parallax,ParallaxLayer} from '@react-spring/parallax'
import { useTrail,animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';

import "react-multi-carousel/lib/styles.css";
import Slide1 from "./pictures/Slider1.png"; 
import Slide2 from "./pictures/Slider2.png"; 
import Slide3 from "./pictures/Slider3.jpg"; 


function App() {
     
  return (
    
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/pages/Projects.js' element={<Projects/>}></Route>
    </Routes>
  );
  
}

function HomePage(){
  return (
    <div>
    <Parallax pages={5}>

      <ParallaxLayer factor={0.1} className='z-20'>
        <NavBar></NavBar>
      </ParallaxLayer>

      <ParallaxLayer factor={0.5} speed={0.5}>
        <div className="h-screen flex justify-center items-center z-0">
          <HeroText></HeroText>
        </div>
      </ParallaxLayer>

      <ParallaxLayer factor={0.25} offset={0.6} speed={0.75}>
        <HeroSubText></HeroSubText>
      </ParallaxLayer>

      <ParallaxLayer factor={1.5} offset={1} speed={0.5}>
        <ProjectPreview></ProjectPreview>
      </ParallaxLayer>

      <ParallaxLayer className=' bg-gun-powder-950' speed={0.6} offset={2.99} factor={1.2}> 
        <NavigationWrapper></NavigationWrapper>
      </ParallaxLayer>
     
      <ParallaxLayer id="2" offset={3.7} speed={0.80} factor={1}>
          <AboutMe></AboutMe>
      </ParallaxLayer>

      <ParallaxLayer id="3" offset={4.5} speed={0.4} factor={1}>
          <ContactMe></ContactMe>
      </ParallaxLayer>

    </Parallax>
    
    </div>
  );
  

}


function NavBar(){
      return(
        <div className='font-Nunito font-thin text-2xl'>
          <nav className="flex justify-between items-center content-center">
          <a href='./index' className='m-5 text-3xl flex items-center gap-1'>Magda Nemes</a>
            <ul className='flex gap-4 items-center justify-center '>
              <li><a href='#About' className='hover:italic'>About</a><span className='hidden bg-gun-powder-950 w-6 h-1'></span></li>
              <li className="hover:italic z-30">Projects</li>
            </ul>
            <a className='mx-10' href='#Contact'>Contact Me</a>
          </nav>
          <CreateLine></CreateLine>
        </div>
      )
}

function ProjectPreview(){
 
   
  
    return(
      <div>
          <h1 className='text-center text-8xl mb-10 font-Hanken-Grotesk font-light'>Concepts</h1>
          <div className='flex flex-wrap gap-5 items-center justify-evenly'>
            <ProjectCards src={Slide1} width={800} title={"House for 5 artists"}></ProjectCards>
            <ProjectCards src={Slide2} width={800} title={"Colective Housing"}></ProjectCards>
            <ProjectCards src={Slide3} width={800} title={"City House"}></ProjectCards>
          </div>
      </div>
     
    )
}

function ProjectCards({src,width,title}){


  return(
    <div id="slideImage" className='overflow-hidden w-[40rem]'>
        
        <img className='hover:scale-110 hover:duration-500 hover:ease-in-out' width={width} src={src} height={800} alt='ProjectSlide'></img>
        <div className='flex items-center justify-between'>
          <p className=' text-xl font-Hanken-Grotesk text-center '>{title}</p>
          <div className='hover:w-14 hover:ease-in-out hover:duration-500 flex items-center justify-center m-5 rounded-full w-10 h-10 bg-gun-powder-950'><FontAwesomeIcon className='text-moon-mist-100 text-xl rotate-45' icon={faArrowUp} /></div>
        </div>
    </div>
  )
}


function NavigationWrapper(){

return(
  <div>  
    <div className='flex justify-evenly'>
    <div >
      <h1 className='m-5 text-moon-mist-100 text-[6rem] font-GothicA1 font-thin z-30'>Designing Dreams</h1>
      <div className='flex items-start justify-evenly text-pretty'>
        <h2 className=' m-6  w-52 text-moon-mist-100 text-xl font-Nutino'>Welcome to my world of architectural innovation, where every project is
        a testament to the transformative power of design.
        </h2>
        <h2 className=' m-6 w-52 text-moon-mist-100 text-xl font-Nutino'> As an architect, I don't just build structures; 
        I craft experiences that captivate the senses and elevate the human spirit. 
        </h2>
      </div>
      <ul className='m-5 text-moon-mist-100 text-[3rem] font-Nunito font-thin'>
        <a href='./pages/Projects.js'>
        <li className='border-b-2'><p className='hover:translate-x-5 hover:duration-1000 flex gap-3 items-center'>Projects <FontAwesomeIcon className='text-xl' icon={faArrowUpRightFromSquare}/></p></li>
        </a>
        <li className=' border-b-2'><p className='hover:translate-x-5 hover:duration-1000 flex gap-3 items-center'>About <FontAwesomeIcon className='text-xl' icon={faArrowUpRightFromSquare}/></p></li>
        <li className=' border-b-2'><p className='hover:translate-x-5 hover:duration-1000 flex gap-3 items-center'>Contact <FontAwesomeIcon className='text-xl' icon={faArrowUpRightFromSquare}/></p></li>
      </ul>
    </div>
      <img src={FirstProject} width={500}  alt="first project"></img>
    </div>
  </div>
)
}


function HeroImageDisplay(){
  const [trails] = useTrail(1, () => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { mass: 1, tension: 300, friction: 100 }
  }));

        return(
          <div>
          {trails.map(()=>(
            <animated.div>

              <div className='flex flex-col'>
                
                    <img src={HeroImage} className="w-96 h-auto rounded-xl mx-10" alt="HeroImage"></img>
                    
              </div>

            </animated.div>
            
            )
          )
          }
          </div>
        )

}


  function HeroText() {
    const [trails] = useTrail(1, () => ({
      from: { opacity: 0, y:100 },
      to: { opacity: 1 , y:0},
      config:{mass:5, tension:1000, friction:200}
    }));
  
    return (
      <div>
        {trails.map((props,index) => (
          <animated.div style={props} key={index+1} className="  text-center font-normal ">
           <h1 className='text-[8rem] font-Hanken-Grotesk '>Magda Nemes</h1>
           
          </animated.div>
        ))}
      </div>
    );
  }

  function HeroSubText(){
    const [trails] = useTrail(1, () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { mass: 1, tension: 100, friction: 150 }
    }));
  
    return (
      <div className='flex flex-row justify-center'>
    
          {trails.map((props,index) => (
            <div className='flex items-center justify-evenly gap-4'>
            <div className='h-2'>
                <img src={svgline} width={300} height={10} alt="line" ></img>
            </div>
            <animated.div style={props} key={index+1} className="  text-center font-normal ">
                  <h1 className=' text-botticelli-800 text-[5rem] font-Nunito font-light'>Architect</h1>
            </animated.div>
            <div className='h-2'>
                <img src={svgline} width={300} height={10} alt="line"></img>
            </div>   
            </div>
          ))}
     
      </div>
    );
  }

  function CreateLine(){

    
  
    return( <div className='flex'>
              <span className='block w-56 h-1 border-x-1 mr-2 bg-botticelli-800 overflow-hidden'></span>
              <div>
                <span className='block w-14 h-1 border-x-1 bg-botticelli-800 overflow-hidden'></span>
                <span className='block w-14 h-1 border-x-1 bg-botticelli-800 overflow-hidden rotate-90'></span>
              </div>
            </div>
      )
  }


function AboutMe(){
  return(
    <div  id="About">
   
      <div className='flex justify-evenly items-center'>
        <div>
          <HeroImageDisplay></HeroImageDisplay>
        </div>
        <div >
          <h1 className='text-6xl font-semibold font-GothicA1 '>Get to know me</h1>
          
          <div className='w-[50rem] font-Nunito font-medium text-xl '>
            <br></br>
              <p>At the heart of my design philosophy lies a deep appreciation for the interplay between form, function,
              and emotion. Her designs seamlessly blend aesthetic elegance with practical utility,
              creating spaces that inspire, empower, and evoke a sense of wonder.
              With an unwavering commitment to sustainability and social responsibility, 
              my creations not only enrich the lives of their inhabitants but 
              also contribute to the greater good of the community and the environment.</p>
          </div>
          <img className='absolute m-5 top-44 right-20 z-[-10] opacity-30 w-96' src={aboutBack} alt='about Background'></img>
        </div>
       </div>
    </div>
  )
}
function ContactMe(){
  return(
    <div id='Contact' className='flex items-start justify-start gap-5'>
      <div>
        <h1 className='m-5 text-7xl text-center font-GothicA1 text-gun-powder-950 font-bold'>Got a dream house?</h1>
        <h2 className='m-5 text-5xl text-center text-gun-powder-900 font-Nunito'>Let's chat!</h2>
      </div>
      <div>
        <h1 className='font-Nunito text-2xl text-botticelli-900'>Get in touch with me to discuss any 
        <br></br>ideea or projects you might have </h1>
        <h2 className='font-Nunito text-xl text-botticelli-800'>magda.nemes@architecture.com</h2>
      </div>
    </div>
  )
}

export default App;
