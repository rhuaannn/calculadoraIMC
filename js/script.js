  let result = document.querySelector("#resultado");

  const forms = document.querySelector("#imc");

  const button = document.querySelector("#btn");

  const Weight = document.querySelector("#inputPeso");

  const heigth = document.querySelector("#inputPeso");

  const resultImc = document.querySelector ('#msgResult');

  const erro = document.querySelector(".error");

  
 

  button.addEventListener("click", function(event){
    event.preventDefault()
    console.log("clicked")


    if (inputPeso.value == "") {
      erro.textContent = 'Digite um peso válido.'
      setInterval(() => {
        erro.textContent = ""
      }, 9000);
      return
    }
   else  if (inputAltura.value == "") {
      erro.innerHTML = 'Digite uma altura válida.'
      setInterval(() => {
        erro.textContent = ""
      }, 9000);
      return
    }if (inputPeso.value ==0 ){
      erro.textContent = 'Digite um peso diferente de 0'
      setInterval(() => {
        erro.textContent = ""
      }, 9000);
      return
    }if(inputAltura.value == 0){
      erro.textContent = 'Digite altura diferente de 0 '
      setInterval(() => {
        erro.textContent = ""
      }, 9000);
        return
    }

    getImc =(result)=>{
      const nivelIMC = ['Peso normal.','Obesidade detectada.','Abaixo do peso.']

        if(result >= 25) return nivelIMC[1];
        if(result >=18.6)  return nivelIMC[0];
        if(result <= 18.5)  return nivelIMC[2];

        resultImc.textContent = `IMC: ${nivelIMC} `
       // result.textContent =  inputPeso.value / inputAltura.value **2
         
        setInterval(() => {
          resultImc.innerHTML = ''
        }, 9000);
      }
      getImc ()
        
    showResult =(Weight,heigth)=>{

        result.textContent = inputPeso.value / inputAltura.value **2
          console.log(resultImc,result)
        setInterval(() => {
          result.innerHTML = ''
        }, 9000);
        return result.value
    }
    showResult() 
 });
 
 
  
  
  