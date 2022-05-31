import React from "react"
export default function Modal({data = []}){
  return(
    <React.Fragment>
      <button className="service__model-exit" >
          <img src="http://edinareact.ibthemespro.com/img/svg/cancel.svg" alt="" />
        </button>
        <div className="service__model">
        {data.map((item,index) =>(
            <div key={index} className="service__model-item">
              <div className="service__model-img">
                <img src={item.img}/>
              </div>
              <div className="service__model-des">
                <h3 className="service__model-title">{item.title}</h3>
                {item.des.map((i,index) => (
                  <p key={index}>{i}</p>
                ))}
                <h3 className="service__model-title">{item.why}</h3>
                <p>{item.p1}</p>
                <ul className="service__model-list">
                  {item.ul.map((i,index) => (
                    <li key={index}><p>{i}</p></li>
                  ))}
                </ul>
                <p>{item.p2}</p>
              </div>
            </div>
        ))}
        </div>
    </React.Fragment>
  )
}