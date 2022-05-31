import {FiFacebook,FiTwitter,FiInstagram,FiLinkedin} from 'react-icons/Fi'
import {AiOutlineDribbble} from 'react-icons/Ai'
import {useEffect} from 'react'
export default function Home1({data = []}){
  let {img, extra, title, des } = data;
  useEffect(() => {
    const textEl = document.getElementById('text')
    let text = textEl.innerHTML;
    let idx = 1
    let speed = 300 / 1
    writeText()
    textEl.innerHTML='';
    function writeText() {
        textEl.innerText = text.slice(0, idx)

        idx++

        if(idx > text.length) {
            idx = 1;
        }

        setTimeout(writeText, speed)
    }
  },[])
  return(
   <div className="home" id="home">
     <div className="container">
      <div className="home__content">
        <div className="home__img">
          <img src={img} alt='avatar'/>
        </div>
        <div className="home__extra">
          <h5>{extra}</h5>
          <div className="home__title"><h1 id="text">{title}</h1><h1>|</h1></div>
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