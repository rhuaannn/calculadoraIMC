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
        
      if (inputPeso.value === "" || inputAltura.value === "" ) {
        msgError.innerHTML = 'Digite somente números'
        
        setInterval (() => {
          msgError.textContent = "";
        },  3000)

        
      }else{
        result.textContent = inputPeso.value / inputAltura.value ** 2
       
            result.textContent  
          setInterval(() => {
            result.textContent = ""
         
          }, 8000);
        console.log("clicked+")
        
      }})
 
result.addEventListener("click",(result)=>{
    if(result >=18.5){
      result.textContent = "Você está acima do peso"
      console.log("clicked++")
    }
})