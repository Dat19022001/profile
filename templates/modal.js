import React from "react"
export default function Modal({data = []}){
  return(
    <React.Fragment>
        <button className={`service__model-exit ${data[0].p3 === undefined ? 'service__exit' : 'blog__exit'}`} >
          <img src="http://edinareact.ibthemespro.com/img/svg/cancel.svg" alt="" />
        </button>
        <div className="service__model">
        {data.map((item,index) =>(
            <div key={index} className={`service__model-item ${item.p3 === undefined ? 'service__check' : 'blog__check'}`}>
              <div className="service__model-img">
                <img src={item.img}/>
              </div>
              <div className="service__model-des">
                {item.day && <div className="portfolio__info">
                    <span>{item.day} <a>{item.vt}</a></span>
                  </div>}
                <h3 className="service__model-title">{item.title}</h3>
                {item.des.map((i,index) => (
                  <p key={index}>{i}</p>
                ))}
                {item.why && <h3 className="service__model-title">{item.why}</h3>}
                {item.p1 && <p>{item.p1}</p>}
                {item.ul && 
                  <ul className="service__model-list">
                    {item.ul.map((i,index) => (
                      <li key={index}><p>{i}</p></li>
                    ))}
                  </ul>
                }
                {item.textBod && <div className="blog__textBod">{item.textBod}</div>}
                <p>{item.p2}</p>
                {item.p3 && <p>{item.p3}</p>}
              </div>
            </div>
        ))}
        </div>
    </React.Fragment>
  )
}