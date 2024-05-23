import logo from './logo.svg';
import './App.css';
import './index.css';
import image1 from './images/image1.jpeg';
import image2 from './images/metal roofing.jpg'
import image3 from './images/side guy.jpg'
import image4 from './images/teamwork.jpg'
import image5 from './images/tractor.jpg'
import image6 from './images/testimonial guy.jpg'
import image7 from './images/house1.jpg'
import image8 from './images/house2.jpg'
import image9 from './images/house3.jpg'
import image13 from './images/logo1.jpg'
import image14 from './images/logo2.jpg'
import image15 from './images/logo3.jpg'
import image16 from './images/logo4.jpg'
import image17 from './images/logo5.jpg'
import image18 from './images/logo6.jpg'
import twitter from './images/twitter.jpg'
import facebook from './images/facebook.jpg'
import instagram from './images/instagram.jpg'
import youtube from './images/youtube.jpg'
import testimonial from './images/testimonial guy.jpg'
import logo1 from './images/logo1.jpg'
import logo2 from './images/logo2.jpg'
import logo3 from './images/logo3.jpg'
import logo4 from './images/logo4.jpg'
import logo5 from './images/logo5.jpg'
import logo6 from './images/logo6.jpg'
import { useState } from 'react';
import video from './images/construction.mp4'
import water from './images/water.jpg'
import government from './images/government.jpg'
import health from './images/health.jpg'

function App() {
  let [toggle, setToggle] = useState(false);
  const navBar = () => {
    setToggle(!toggle)
  }
  return (
  <>
  <nav className='intro_container'>
    <nav className='intro'>
<div className='logo'>
  <h1>CONSTRUCTORS</h1>
</div>

<div className={toggle? 'offlink' : 'links'}>
  <ul>
    <li><a href='#'>Home</a></li>
    <li><a href='#'>Who we are</a></li>
    <li><a href='#'>Features</a></li>
    <li><a href='#'>Services</a></li>
    <li><a href='#'>Our works</a></li>
    <li><a href='#'>Contact us</a></li>
  </ul>
</div>

    </nav>
    <section id={toggle? 'display' :''}>
     <h1>Welcome</h1>
      <h2>Creating A BrighterFuture Together</h2>
      
      <button>
        Who we are
      </button>
      
      </section>
      <a href='#' id='button' onClick={navBar}>
  <span className='bar'></span>
  <span className='bar'></span>
  <span className='bar'></span>
</a>
  </nav>
  <div className='second_container'>
    <div className='second'>
     
      <section>
        <p><video controls>
          <source src={video} type='video/mp4'></source>
</video></p>
        <h4>Proffessional constructors</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad magnam expedita? Iusto accusamus sit esse unde ipsa nesciunt maiores sed</p>
      </section>
      <section>
        <p><video controls>
          <source src={video} type='video/mp4'></source>
        </video></p>
        <h4>Modern house designs</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad magnam expedita? Iusto accusamus sit esse unde ipsa nesciunt maiores sed</p>
      </section>
      </div>
      </div>
      <h3> US Certified Contractors</h3>
      <div className='third'>
        <section>
          <p><img src={government}></img></p>
          <h4>Government Building</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad magnam expedita? Iusto accusamus sit esse unde ipsa</p>
        </section>
        <section>
          <p><img src={health}></img></p>
          <h4>Health Care Construction</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad magnam expedita? Iusto accusamus sit esse unde ipsa</p>
        </section>
        <section>
          <p><img src={water}></img></p>
          <h4>Water Treatment</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad magnam expedita? Iusto accusamus sit esse unde ipsa</p>
        </section>
        </div>
        <div className='fourth'>
          <section>
  <p>Working with us</p>
  <br></br>
          <h4>CONTRACTORS AND CONSTRUCTION<br></br> MANAGERS SINCE 1989</h4>
          <br></br>
          <button>
            Get A Quote
          </button>
          </section>
        </div>
        <div className='fifth_container'>
          <h3>What We Do</h3>
          <section>

          </section>
          <div className='fifth'>
            <section>
              <p><img src={image4}></img></p>
              <h4>Team planning</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad magnam expedita? Iusto accusamus sit esse unde ipsa nesciunt maiores sed</p>
            </section>
            <section>
              <p><img src={image5}></img></p>
              <h4>Machine work</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad magnam expedita? Iusto accusamus sit esse unde ipsa nesciunt maiores sed</p>
            </section>
            <section>
             <p> <img src={image2}></img></p>
              <h4>Metal Roofing</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad magnam expedita? Iusto accusamus sit esse unde ipsa nesciunt maiores sed</p>
            </section>
          </div>
        </div>
        <div className='sixth_container'>
              <div className='sixth'>
  
        <h2>Featured Work</h2>
        </div>
        <div className='sixth_img'>
  <img src={image7}></img>
            <img src={image8}></img>
      <img src={image9}></img>
    </div>
      </div>
      <div className='seventh'>
        <section>
          <h3>Our Clients</h3>
          <div className='images_1'>
            <img src={logo1}></img>
            <img src={logo2}></img>
            <img src={logo3}></img>
          </div>
          <div className='images_2'>
<img src={logo4}></img>
<img src={logo5}></img>
<img src={logo6}></img>
          </div>
        </section>
        <section>
          <h3>Testimonial</h3>
        <div className='seventh_testimonial'>
          <p>The service has been amazing.
            I contacted them and they in less a few minutes
          </p>
          <img src={testimonial} className='testimonial_guy'></img>
        </div>

        </section>
      </div>
      <div className='footer_container'>
        <div className='footer'>
          <section>
            <h4>ABOUT COMPANY</h4>
            <br></br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ab praesentium minus consectetur debitis ipsam, perspiciatis eligendi eum dignissimos </p>
            <br></br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ab praesentium minus consectetur debitis ipsam, perspiciatis eligendi eum dignissimos </p>
          </section>
        
          <section>
            <h4>BUSINESS HOURS</h4>
            <p>Our support available to help you 24 hours a day,<br></br> sevem days a week</p>
        
              <tr>
                <td>Mon-Fri:</td>
                <td>9am to 5pm</td>
            
              </tr>
              <hr></hr>
              <tr>
                <td>Saturday:</td>
                <td>10am to 2pm</td>
              </tr>
              <hr></hr>
              <tr>
                <td>Sunday:</td>
                <td>closed</td>
              </tr>
            <hr></hr>
          </section>
          <section>
            <h4>CONSTRUCTION OFFICE</h4>
            <p><img src={twitter}></img></p><p>1600 Amphitheater Parkway<br></br>Mountain View CA 94043</p>
            <p><img src={instagram}></img>0607173434</p>
            <img src={youtube}></img><p>girishtibatina@gmail.com</p>
            <img src={facebook}></img><p>Fax:0645666</p>
          </section>
        </div>
      </div>
  </>
  );
}

export default App;
