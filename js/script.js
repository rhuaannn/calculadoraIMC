    const botao = document.querySelector('#btn');

    document.getElementById("btn").addEventListener("click", function(event){
      event.preventDefault()
      console.log("clicked")
    });0

    const peso  = document.querySelector("#inputPeso");
    const altura = document.querySelector('#inputAltura');
    const result = document.querySelector('#resultado');
    const msgError = document.querySelector('.error');
    const formulario = document.querySelector("#imc")
   

    botao.addEventListener("click", (peso,altura,x)=>{
      if (inputPeso.value === ""  ) {
        msgError.innerHTML = 'Digite peso válido.'
        
        setInterval (() => {
          msgError.textContent = "";
        },  3000)
      }else if (inputAltura.value ==""){
        msgError.innerHTML = 'Digite uma altura válido.'
        
        setInterval (() => {
          msgError.textContent = "";
        },  3000)
      }
      
      else{
        result.textContent = inputPeso.value / inputAltura.value ** 2
          setInterval(() => {
            result.textContent = ""
         
          }, 8000);
        console.log("clicked+")
        
      }})
 