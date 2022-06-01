import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useEffect} from 'react'
import Modal from '../templates/modal'
export default function portfolio({data = []}){
  let{title, des, list} = data;
  useEffect(() => {
    if(title === 'Blog'){
      let lists = document.querySelectorAll(".blog__img");
      let listModals = document.querySelectorAll(".blog__check");
      let modals = document.querySelector(".blog__fix");
      lists.forEach((item, index) => {
        item.addEventListener('click',()=>{
          modals.classList.add('active');
          if(index < 4){
            listModals[index].classList.add('active');
          }
          else if(index < 7){
            listModals[index - 4].classList.add('active');
          }
          else{
            listModals[index - 7].classList.add('active');
          }
        })
      })
      let exits = document.querySelector(".blog__exit");
      exits.addEventListener('click', ()=>{
        let exitItems = document.querySelector(".blog__check.active");
        let exitModals = document.querySelector(".blog__fix.active");
        exitModals.classList.remove('active');
        exitItems.classList.remove('active');
      })
    }
  },[title])
  
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      }
    ]
  };
  return(
    <div className="portfolio" id={`${title === 'Blog' ? 'blog' : 'portfolio'}`}>
      <div className="container">
        <div className={`portfolio__title ${title === 'Blog' ? 'blog__title':''}`}>
          <h3>{title}</h3>
          <p>{des}</p>
        </div>
        <div className={`portfolio__show ${title === 'Blog' ? 'blog__show':''}`}>
          <Slider {...settings}>
            {list.map((item, index) =>(
              <div key={index}>
                <div  className={`portfolio__img ${title === 'Blog' ? 'blog__img':''}`}>
                  {item.link ? <a href={item.link}><img src={item.img} alt="1"/></a> : <img src={item.img} alt="1"/>}
                </div>
                {item.info && 
                  <div className={`portfolio__info ${title === 'Blog' ? 'blog__info':''}`}>
                    <span>{item.info.day} <a>{item.info.vt}</a></span>
                    <h4>{item.info.title}</h4>
                  </div>
                }
              </div>
            ))}
          </Slider>
        </div>
        {title === 'Blog' && 
          <div className="blog__fix">
            < Modal data = {data.model} />
          </div>}
      </div>
    </div>
  )
}