import { useEffect } from "react"
export default function Contact({data = []}) {
  let {title, des, info, form, iframe} = data
  useEffect(() => {
    // hamf kiem tra 
    let Validator = (option) => {
      // hàm thực hiện validate
      let validate = (inputElement, rule) => {
        let errorElement = inputElement.parentElement.querySelector(option.errorSelector)
        let errorMessage = rule.test(inputElement.value);
        if (errorMessage) {
          errorElement.innerText = errorMessage;  
        }else{
          errorElement.innerText = '';
        }

        return !errorMessage;
      }

      let formElement = document.querySelector(option.form);
      if (formElement){
        formElement.onsubmit = (e) =>{
          e.preventDefault();

          let isFormValid = true;

          option.rules.forEach((rule) => {
            let inputElement = document.querySelector(rule.selector);
            let isValid = validate(inputElement,rule);
            if(!isValid) {
              isFormValid = false;
            }
          })
          
          if(isFormValid) {
            if(typeof option.onSubmit === 'function'){
              
              let dataInput = formElement.querySelectorAll('[name]');
              let dataForm = Array.from(dataInput).reduce((values, input) => {
                return ( values[input.name] = input.value) && values;
              },{})
              option.onSubmit(dataForm)
            }
          }

        }

        option.rules.forEach((rule) => {
          let inputElement = document.querySelector(rule.selector);
          if(inputElement){
            // Xử lý khi người dùng blur khỏi input
            inputElement.onblur = () =>{
              validate(inputElement,rule);
            }

            // xử lý người dùng khi nhập vào input
            inputElement.oninput = () =>{
              let errorElement = inputElement.parentElement.querySelector(option.errorSelector)
              errorElement.innerText=''
            }
          }
        })
      }

    }

    Validator.isRequired = (selector) => {
      return{
        selector: selector,
        test : (value) => {
          return value.trim() ? undefined : "Name Is Required."
        }
      }
    }

    Validator.isEmail = (selector) =>{
      return{
        selector: selector,
        test : (value) => {
          var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return regex.test(value) ? undefined : 'Email Is Required.'
        }
      }
    }
    Validator({
      form: "#Contact__form",
      errorSelector:".contact__messgae",
      rules: [
        Validator.isRequired('#Name'),
        Validator.isEmail('#Email'),
        Validator.isRequired('#Message'),
      ],
      onSubmit: (data) => {
          console.log(data);
      }
    })
  })
  return(
    <div className="contact" id="contact">
      <div className="container">
        <div className="contact__title">
          <h3>{title}</h3>
          <p>{des}</p>
        </div>
        <div className="contact__info">
          {info.map((item,index) =>(
            <div key={index} className="contact__inner">
              <div className="contact__icon">
                <img src={item.img} />
              </div>
              <div className="contact__content">
                <h4>{item.title}</h4>
                {item.sub.map((i,index) =>(
                  <ul key={index}>
                    <li>
                      <a>{i}</a>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="contact__body">
          <div className="contact__tt">
            <div className="contact__tt-title">
              <p>{form.title} <br/> <span>{form.sub}</span></p>
            </div>
            <form className="contact_form" id="Contact__form">
              <div className="contact__input">
                <input type="text" name="name" placeholder={`${form.Name} *`} id={form.Name}/>
                <p className="contact__messgae"></p>
              </div>
              <div className="contact__input">
                <input type="text" name="email" placeholder={`${form.Email} *`} id={form.Email}/>
                <p className="contact__messgae"></p>
              </div>
              <div className="contact__input">
                <input type="text" name="message" placeholder={`${form.Message} *`} id={form.Message}/>
                <p className="contact__messgae"></p>
              </div>
              <button type="submit" className="contact__submit">Submit</button>
            </form>
          </div>
          <div className="contact__iframe">
            <iframe src={iframe} />
          </div>
        </div>
      </div>
    </div>
  )
}