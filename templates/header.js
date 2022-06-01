import {FaMoon,FaSun} from 'react-icons/Fa'
import {FiMenu} from 'react-icons/Fi' 
import {IoMdClose} from'react-icons/Io'
export default function Header(){
  return(
    <div className="header">
      <div className="container">
        <div className="header__menu">
          <a className="header__logo">
            <img className="header__dark" src="http://edinareact.ibthemespro.com/img/logo/light.png"/>
            <img className="header__light" src="http://edinareact.ibthemespro.com/img/logo/dark.png"/>
          </a>
          <div className="header__sub">
            <div className="header__setting">
              <i className="header__setting-ligth"><FaMoon/></i>
              <i className="header__setting-dark"><FaSun/></i>
            </div>
            <div className="header__mobile">
              <i className="header__open"><FiMenu/></i>
              <i className="header__exit"><IoMdClose/></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}