import '../styles/style.scss'
import Header from '../templates/header'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //open exit menu
    let menuMobile = document.querySelector(".header__mobile");
    menuMobile.addEventListener('click',()=>{
      let sidebar = document.querySelector('.sidebar');
      let openMobile = document.querySelector('.header__open');
      let exitMobile = document.querySelector('.header__exit');
      openMobile.classList.toggle('isShow');
      exitMobile.classList.toggle('isShow');
      sidebar.classList.toggle('isShow')
    })
    // dark light 
    
    let settingMenu = document.querySelector(".header__setting");
    settingMenu.addEventListener("click",()=>{
      let site = document.querySelector(".site");
      let siteElements = site.childNodes;
      let mobileMenu = document.querySelector(".header");
      mobileMenu.classList.toggle('active');
      site.classList.toggle('active');
      siteElements[0].classList.toggle('active');
      siteElements[1].childNodes.forEach(i => i.classList.toggle('active'));
    })
  })
  return ( 
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
