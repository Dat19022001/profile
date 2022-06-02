import {FiFacebook,FiTwitter,FiInstagram,FiLinkedin} from 'react-icons/fi'
import {AiOutlineDribbble} from 'react-icons/ai'
import {useEffect} from 'react'
export default function Home1({data = []}){
  let {img, extra, title, des } = data;
  useEffect(() => {
    const textElement = document.querySelector('#text')
    const mang = [...title]
    const text = mang[0]
    let speed = 200

    let index = 0

    const writeText = () => {

      textElement.innerText = `${text.slice(0, index)} |`;

      index++;

      if (index > text.length) {
        index = 0;
        let random = Math.floor(Math.random() * mang.length)
        text = mang[random]
      }
      setTimeout(writeText, speed);

    };

    writeText();
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
          <div className="home__title"><h1 id="text"></h1></div>
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