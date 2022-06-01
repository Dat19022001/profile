import {BsArrowRightShort} from 'react-icons/Bs'
import {useEffect} from 'react'
import Modal from '../templates/modal'
export default function Service({data = []}){
  let {title, subtitle, list, model} =data
  useEffect(() => {
    let list = document.querySelectorAll(".service__inner");
    let listModal = document.querySelectorAll(".service__check");
    let modal = document.querySelector(".service__fix");
    list.forEach((item, index) => {
      item.addEventListener('click',()=>{
        modal.classList.add('active');
        listModal[index].classList.add('active');
      })
    })
    let exit = document.querySelector(".service__exit");
    exit.addEventListener('click', ()=>{
      let exitItem = document.querySelector(".service__check.active");
      let exitModal = document.querySelector(".service__fix.active");
      exitModal.classList.remove('active');
      exitItem.classList.remove('active');
    })
  },[])
  return(
    <div className="service" id="service">
      <div className="container">
        <div className="service__sub">
          <div className="service__title">
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
          <ul className="service__list">
            {list.map((item,index) =>(
              <li key={index} className="service__item">
                <div className="service__inner">
                  <div className="service__hover">
                    <img src={item.img} alt=""/>
                    <div className="service__subtitle">
                      <p >{item.title}</p>
                    </div>
                    <div className="service__link">
                      <p>{item.link}</p> 
                      <span><BsArrowRightShort/></span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="service__fix">  
        <Modal data ={model}/>
      </div>
    </div>
  )
}