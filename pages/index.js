import Head from 'next/head'
import React from 'react'

// import components
import Sidebar from '../templates/sidebar'
import Home1 from '../templates/home'
import About from '../templates/about'
import Service from '../templates/service'
import Portfolio from '../templates/portfolio'
import Testimonial from '../templates/Testimonials'
import Contact from '../templates/contact'

// import data
import { data } from '../data/data'

import {useEffect} from 'react'
export default function Home() {
  useEffect(() => {
    //scorll
    let section = document.querySelector(".Content")
    let elements = section.childNodes
    let listChildren = document.querySelectorAll('.sidebar__choose');

    window.addEventListener("scroll",() =>{
      let current = '';
      elements.forEach(item =>{
        let itemTop = item.offsetTop;
        let itemHeight = item.offsetHeight;
        if(window.pageYOffset >= (itemTop - itemHeight/ 3)){
          current = item.getAttribute('id');
        }
      })
      listChildren.forEach(item =>{
        item.classList.remove('active');
        if(item.classList.contains(`${current}1`)){
          item.classList.add('active')
        }
      })
    })
    // dark light light
    
    let setting = document.querySelector(".sidebar__setting");
    setting.addEventListener("click",()=>{
      let site = document.querySelector(".site");
      let siteElements = site.childNodes;
      site.classList.toggle('active');
      siteElements[0].classList.toggle('active');
      siteElements[1].childNodes.forEach(i => i.classList.toggle('active'));
    })

    // scroll-animation

    window.addEventListener('scroll', checkBoxes)

    checkBoxes()

    function checkBoxes() {
        const triggerBottom = window.innerHeight / 5 * 4

        elements.forEach(box => {
            const boxTop = box.getBoundingClientRect().top

            if(boxTop < triggerBottom) {
                box.classList.add('show')
            } else {
                box.classList.remove('show')
            }
        })
    }
  })
  return (
    <React.Fragment>
      <Head>
        <title>My profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="site">
          <Sidebar data = {data.sidebar} />
          <div className="Content">
            <Home1 data = {data.home} />
            <About data = {data.about} />
            <Service data = {data.service} />
            <Portfolio data = {data.portfolio} />
            <Testimonial data = {data.testimonial}/>
            <Portfolio data = {data.blog}/>
            <Contact data = {data.contact}/>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}
