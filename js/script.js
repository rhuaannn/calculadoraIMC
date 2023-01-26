  let result = document.querySelector("#resultado");

  const forms = document.querySelector("#imc");

  const button = document.querySelector("#btn");

  const Weight = document.querySelector("#inputPeso");

  const heigth = document.querySelector("#inputAltura");

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

  const  getImc =(result)=>{
      const nivelIMC = ['Peso ideal.','Acima do peso.','Abaixo do peso.']
     // result += result;

        if(result >=25.5)  return resultImc.innerText = `${nivelIMC[1]}` ;
        if(result >= 18.6) return  resultImc.innerText = `${nivelIMC[0]}` ;
        if(result <= 18.5)  return resultImc.innerText = `${nivelIMC[2]}` ;
       
         
       
      }
      getImc (Number(Weight.value / heigth.value **2))
      setInterval(() => {
        resultImc.innerHTML = ''
      }, 9000);
        
   showResult =(Weight,heigth)=>{

        result.innerText = inputPeso.value / inputAltura.value **2
      
        setInterval(() => {
          result.innerHTML = ''
        }, 9000);
        return result.value
    }
    showResult() 
 });
 
 
  
  
  