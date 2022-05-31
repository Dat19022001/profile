export default function About({data = []}){
  let {Name, des, titleSkill, desSkill, secret, img, experience} = data;
  return(
    <div className="about" id="about">
      <div className="container">
        <div className="about__sub">
          <h2 className="about__title">About Me</h2>
          <div className="about__content">
            <div className="about__left">  
              <div className="about__info">
                <h3>Hi, I'm <span>{Name}</span></h3>
                <p>{des}</p>
              </div>
              <div className="about__skill">
                <h3>{titleSkill}</h3>
                <p>{desSkill}</p>
                <div className="about__progress">
                  {secret.map((item,index) =>(
                    <div key={index} className="about__inner">
                      <span className="about__label">{item.name}</span>
                      <div className="about__bg">
                        <div className="about__bar">
                          <div className="about__in" style={{width: `${item.level}%`}}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="about__button">
                  <button type="button">See More</button>
                </div>
              </div>
            </div>
            <div className="about__right">
              <div className="about__img">
                <img src={img} alt="" />
                <div className="about__experience">
                  <div className="about__body">
                    <h3>{experience}+ Years</h3>
                    <span>Of Experiance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}