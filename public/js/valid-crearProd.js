window.addEventListener('load', function (){

    let formCrear = document.querySelector('form.formulario');
    let allInputsCrear = formCrear.querySelectorAll('input.inputform');
    let imagenProducto = document.querySelector('#imagen-producto')

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
            formCrear.submit()
        }
    }

    formCrear.addEventListener('submit', function(e){
        e.preventDefault();

        allInputsCrear.forEach(input => isvalid(input))

        console.log("Hola")
        
    })

    allInputsCrear.forEach(
        input => input.addEventListener('blur', ()=>{
            let inputName = input.name;
            if(inputName === 'nombre'){
                let inputValue = input.value
                if(inputValue.length < 5){
                    inputvalid(input, false)
                    input.nextElementSibling.innerHTML = '* Este campo debe tener 5 o más caracteres'
                } else{
                    input.nextElementSibling.innerHTML = ''
                    inputvalid(input)
                }
            }else if(inputName === 'desc'){
                let inputValue = input.value
                if(inputValue.length < 20){
                    inputvalid(input, false)
                    input.nextElementSibling.innerHTML = '* Este campo debe tener 20 o más caracteres'
                } else{
                    input.nextElementSibling.innerHTML = ''
                    inputvalid(input)
                }
            }else if(inputName === 'marca'){
                let inputValue = input.value
                if(inputValue.length < 2){
                    inputvalid(input, false)
                    input.nextElementSibling.innerHTML = '* Este campo debe tener 2 o más caracteres'
                } else{
                    input.nextElementSibling.innerHTML = ''
                    inputvalid(input)
                }
            }else if(inputName === 'precio'){
                let isCharPrice = /^\d+(,\d{1,2})?$/i
                let inputValue = input.value
                if(! isCharPrice.test(inputValue)){
                    inputvalid(input, false)
                    input.nextElementSibling.innerHTML = '* Precio inválido'
                } else{
                    input.nextElementSibling.innerHTML = ''
                    inputvalid(input)
                }
            }
    }))
    
    
    imagenProducto.addEventListener('change', ()=>{
        let isCharImg = /(.jpg|.jpeg|.png|.gif)$/i
        let imagenValue = imagenProducto.value
        if(! isCharImg.test(imagenValue)){
            inputvalid(imagenProducto, false)
            imagenProducto.nextElementSibling.innerHTML = '* Solo se permiten imágenes'
        } else{
            imagenProducto.nextElementSibling.innerHTML = ''
            inputvalid(imagenProducto)
        }
    })
})