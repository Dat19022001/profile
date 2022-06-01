import {FaMoon,FaSun} from 'react-icons/Fa'
import {useEffect} from 'react'
import Link from 'next/link';
export default function Sidebar({data = []}){
  let {imgLight, imgDark, Name, gmail} = data;
  useEffect(() => {
    let menu = document.querySelectorAll('.sidebar__choose');
    menu.forEach((item) => {
     item.addEventListener('click',() =>{
      let xoa = document.querySelector(".sidebar__choose.active");
      xoa.classList.remove('active')
      item.classList.add('active')
     })
    })
  },[])
  return(
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__header">
          <a>
            <img className="sidebar__imgLight" src={imgLight} alt="anh sang"/>
            <img className="sidebar__imgDark" src={imgDark} alt="anh toi"/>
          </a>
          <div className="sidebar__setting">
            <i className="sidebar__setting-ligth"><FaMoon/></i>
            <i className="sidebar__setting-dark"><FaSun/></i>
          </div>
        </div>
        <ul className="sidebar__menu">
          <li className="sidebar__item">
            <a href="#home" className="sidebar__choose active home1"><img className="sidebar__icon" src="http://edinareact.ibthemespro.com/img/svg/home.svg" /> Home</a>
          </li>
          <li className="sidebar__item">
            <a href="#about" className="sidebar__choose about1"  ><img className="sidebar__icon" src="http://edinareact.ibthemespro.com/img/svg/human.svg" /> About</a>
          </li>
          <li className="sidebar__item">
            <a href="#service" className="sidebar__choose service1"><img className="sidebar__icon" src="http://edinareact.ibthemespro.com/img/svg/service.svg" /> Service</a>
          </li>
          <li className="sidebar__item">
            <a href="#portfolio" className="sidebar__choose portfolio1"><img className="sidebar__icon" src="http://edinareact.ibthemespro.com/img/svg/portfolio.svg" /> Portfolio</a>
          </li>
          <li className="sidebar__item">
            <a href="#testimonial" className="sidebar__choose testimonial1"><img className="sidebar__icon" src="	http://edinareact.ibthemespro.com/img/svg/testimonial.svg" /> Testimonial</a>
          </li>
          <li className="sidebar__item">
            <a href="#blog" className="sidebar__choose blog1"><img className="sidebar__icon" src="http://edinareact.ibthemespro.com/img/svg/blog.svg" /> Blog</a>
          </li>
          <li className="sidebar__item">
            <a href="#contact" className="sidebar__choose contact1"><img className="sidebar__icon" src="	http://edinareact.ibthemespro.com/img/svg/contact.svg" /> Contact</a>
          </li>
        </ul>
      </div>
      <div className="sidebar__footer">
        <div className="sidebar__avarta">
          <div className="sidebar__img"></div>
        </div>
        <div className="sidebar__body">
          <h3 className="silebar__name">{Name}</h3>
          <a href={gmail.link}>{gmail.Name}</a>
        </div>
      </div>
    </div>
  )
}