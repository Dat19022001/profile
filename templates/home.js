import {FiFacebook,FiTwitter,FiInstagram,FiLinkedin} from 'react-icons/fi'
import {AiOutlineDribbble} from 'react-icons/ai'
import Typed from 'react-typed'
export default function Home1({data = []}){
  let {img, extra, title, des } = data;
  return(
   <div className="home" id="home">
     <div className="container">
      <div className="home__content">
        <div className="home__img">
          <img src={img} alt='avatar'/>
        </div>
        <div className="home__extra">
          <h5>{extra}</h5>
          <div className="home__title">
            <h1><Typed strings={[...title]} typeSpeed={100} backSpeed={100} loop/></h1>
          </div>
          <p>{des}</p>
          <ul className="home__icon">
              <li>
                <a><FiFacebook/></a>
              </li>
              <li>
                <a><FiTwitter/></a>
              </li>
              <li>
                <a><FiInstagram/></a>
              </li>
              <li>
                <a><AiOutlineDribbble/></a>
              </li>
              <li>
                <a><FiLinkedin/></a>
              </li>
          </ul>
          <div className="home__btn">
            <a>Download CV</a>
          </div>
        </div>
      </div>
     </div>
   </div>
  )
}