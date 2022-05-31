import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function portfolio({data = []}){
  
  let{title, des, list} = data;
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return(
    <div className="portfolio" id={`${title === 'Blog' ? 'blog' : 'portfolio'}`}>
      <div className="container">
        <div className="portfolio__title">
          <h3>{title}</h3>
          <p>{des}</p>
        </div>
        <div className={`portfolio__show ${title === 'Blog' ? 'blog__show':''}`}>
          <Slider {...settings}>
            {list.map((item, index) =>(
              <div key={index}>
                <div  className="portfolio__img">
                  <a src={item.link}><img src={item.img} alt="1"/></a>
                </div>
                {item.info && 
                  <div className="portfolio__info">
                    <span>{item.info.day} <a>{item.info.vt}</a></span>
                    <h4>{item.info.title}</h4>
                  </div>
                }
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}