window.addEventListener('load', function (){

    let formLogin = document.querySelector('form.login-form');
    let loginInputs = formLogin.querySelectorAll('.login-inputbox input');

    function inputvalid(element, status = true){
        if(status){
            element.classList.add('valido')
            element.classList.remove('no-valido')
        }else{
            element.classList.add('no-valido')
            element.classList.remove('valido')
        }
    }

    function isvalid(element){
        if(element.value.length === 0){
            inputvalid(element, false)
            element.parentElement.innerHTML += '<span class="error">* Debes completar este campo</span>'
        } else {
            inputvalid(element)
        }
    }

    formLogin.addEventListener('submit', function(e){
        e.preventDefault();

        loginInputs.forEach(input => isvalid(input))
        
    })

    loginInputs.forEach(
        input => input.addEventListener('blur', ()=>{
            isvalid(input);
            let inputName = input.name;
            if(inputName === 'email'){
                let isCharEmail = /\S+@\S+\.\S+/
                let inputValue = input.value
                if(! isCharEmail.test(inputValue)){
                    inputvalid(input, false)
                    input.parentElement.innerHTML += '<span class="error">* Email inválido</span>'
                } else{
                    let error = input.parentElement.querySelector('.error')
                    input.parentElement.removeChild(error)
                }
            } else if(inputName === 'password'){
                let inputValue = input.value
                if(inputValue.length < 8){
                    inputvalid(input, false)
                    input.parentElement.innerHTML += '<span class="error">* Este campo debe tener 8 o más caracteres</span>'
                } else{
                    let error = input.parentElement.querySelector('.error')
                    input.parentElement.removeChild(error)
                }
            }
                
        }))



});
    