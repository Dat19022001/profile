import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Testimonial({data = []}){
  let {title,des, list} = data;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return(
    <div className="testimonial" id="testimonial">
      <div className="container">
        <div className="testimonial__title">
          <h3>{title}</h3>
          <p>{des}</p>
        </div>
        <div className="testimonial__show">
          <Slider {...settings}>
            {list.map((item, index) => (
              <div key={index} className="testimonial__body">
                <div className="testimonial__detail">
                  <div className="testimonial__author">
                    <div className="testimonial__img">
                      <img src={item.img}/>
                    </div>
                    <div className="testimonial__short">
                      <h4>{item.Name}</h4>
                      <p>{item.position}</p>
                    </div>
                  </div>
                  <div className="testimonial__icon">
                    <img src={item.icon}/>
                  </div>
                </div>
                <div className="testimonial__text">
                  <p>{item.info}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}