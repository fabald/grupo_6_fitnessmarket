window.addEventListener('load', function(){

    let formRegister = document.querySelector('form.register-form');
    let allInputs = formRegister.querySelectorAll('.register-inputbox input');
    let imagenUsuario = document.querySelector('#imagenUsuario');

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
            element.parentElement.innerHTML += '<span class="error">* Este campo es obligatorio</span>'
        } else {
            inputvalid(element)
            formRegister.submit()
        }
    }

    formRegister.addEventListener('submit', function(e){
        e.preventDefault();

        allInputs.forEach(input => isvalid(input))
        
    })

    allInputs.forEach(
        input => input.addEventListener('blur', ()=>{
            let inputName = input.name;
            if(inputName === 'nombre' || inputName === 'apellido'){
                let inputValue = input.value
                if(inputValue.length < 2){
                    inputvalid(input, false)
                    input.nextElementSibling.innerHTML = '* Este campo debe tener 2 o más caracteres'
                } else{
                    input.nextElementSibling.innerHTML = ''
                    inputvalid(input)
                }
            } else if(inputName === 'email'){
                let isCharMail = /\S+@\S+\.\S+/
                let inputValue = input.value
                if(! isCharMail.test(inputValue)){
                    inputvalid(input, false)
                    input.nextElementSibling.innerHTML = '* Email inválido'
                } else{
                    input.nextElementSibling.innerHTML = ''
                    inputvalid(input)
                }
            } else if(inputName === 'password' || inputName === 'confirmPassword'){
                let inputValue = input.value
                if(inputValue.length < 8){
                    inputvalid(input, false)
                    input.nextElementSibling.innerHTML = '* Este campo debe tener 8 o más caracteres'
                } else{
                    input.nextElementSibling.innerHTML = ''
                    inputvalid(input)
                }
            }
                
        }))
    
    imagenUsuario.addEventListener('change', ()=>{
        let isCharImg = /(.jpg|.jpeg|.png|.gif)$/i
        let imagenValue = imagenUsuario.value
        if(! isCharImg.test(imagenValue)){
            inputvalid(imagenUsuario, false)
            imagenUsuario.nextElementSibling.innerHTML = '* Archivo inválido'
        } else{
            imagenUsuario.nextElementSibling.innerHTML = ''
            inputvalid(imagenUsuario)
        }
        })


});





