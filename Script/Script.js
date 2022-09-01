const btn = document.querySelector("#enviar")

btn.addEventListener("click", function(e) {

    e.preventDefault();


    let RPA;
    let SAP;
    let Kaizen;





    const Q1 = document.querySelector('input[name="Q1"]:checked'); // Vincular com item HTML
    const valueQ1 = Q1.value;                 // Obter valor do item
    console.log("Valor Q1: " + valueQ1);      // Console.log

    const Q2 = document.querySelector('input[name="Q2"]:checked'); // Vincular com item HTML
    const valueQ2 = Q2.value;                 // Obter valor do item
    console.log("Valor Q2: " + valueQ2);       // Console.log

    const Q3 = document.querySelector('input[name="Q3"]:checked'); // Vincular com item HTML
    const valueQ3 = Q3.value;                   // Obter valor do item  
    console.log("Valor Q3: " + valueQ3);      // Console.log

    const Q4 = document.querySelector('input[name="Q4"]:checked'); // Vincular com item HTML
    const valueQ4 = Q4.value;                 // Obter valor do item
    console.log("Valor Q4: " + valueQ4);      // Console.log

    const Q5 = document.querySelector('input[name="Q5"]:checked'); // Vincular com item HTML
    const valueQ5 = Q5.value;                 // Obter valor do item
    console.log("Valor Q5: " + valueQ5);      // Console.log

    const Q6 = document.querySelector('input[name="Q6"]:checked'); // Vincular com item HTML
    const valueQ6 = Q6.value;                 // Obter valor do item
    console.log("Valor Q6: " + valueQ6);      // Console.log   

    const Q7 = document.querySelector('input[name="Q7"]:checked'); // Vincular com item HTML
    const valueQ7 = Q7.value;                 // Obter valor do item  
    console.log("Valor Q7: " + valueQ7);      // Console.log

    const Q8 = document.querySelector('input[name="Q8"]:checked'); // Vincular com item HTML
    const valueQ8 = Q8.value;                 // Obter valor do item
    console.log("Valor Q8: " + valueQ8);      // Console.log




    // const Q9 = document.querySelector('input[name="Q9"]:checked');
    // const valueQ9 = Q9.value;
    // console.log("Valor Q9: " + valueQ9); // Console.log

     if((valueQ1,valueQ2,valueQ3,valueQ4 == "sim") && (valueQ5,valueQ6,valueQ7,valueQ8=="não")) {
         console.log("RPA");
         alert("encaminhar usuário para: RPA");
     }else if((valueQ1,valueQ2,valueQ3,valueQ5,valueQ6 == "sim") && (valueQ4,valueQ7,valueQ8=="não")){
         console.log("Projetos e Melhoria SAP");
         alert("encaminhar usuário para: Projetos e Melhoria SAP");
     }else if((valueQ1,valueQ2,valueQ3,valueQ4,valueQ5,valueQ6,valueQ8 == "não") && (valueQ7 =="sim")){
         console.log("Kaizen");
         alert("encaminhar usuário para: Kaizen");
     }else if(valueQ1,valueQ2,valueQ3,valueQ4,valueQ5,valueQ6,valueQ7,valueQ8 =="sim"){
         console.log("Seu projeto será encaminhado ao Comitê de Inovação");
         alert("encaminhar usuário para: Seu projeto será encaminhado ao Comitê de Inovação");
     }else if((valueQ1, valueQ2, valueQ3, valueQ4, valueQ5, valueQ6, valueQ7, valueQ8 == "não")){
         console.log("NDA");
         alert("encaminhar usuário para: NDA");
     }else{
         console.log("Teste");
         alert("encaminhar usuário para: Teste");
     }





     if(valueQ1 = "sim"){ //O objetivo busca automatizar uma tarefa?
        RPA = 20;
        SAP = 10;
        Kaizen = 5;
    
        
    }else{
        RPA = 0;

    }
    
    
    if(valueQ2 = "sim"){ // Processo repetitivo?
         RPA = 20;


     }else{
        RPA = 0;


    }
    if(valueQ3 = "sim"){ //Existem regras claras?
        RPA = 20;
        

    }else{
       RPA = 5;

       
   }
   if(valueQ4 = "sim"){ //O objetivo/Processo envolve uma UTILIZAÇÃO de fontes externas (Como sites, API's, softwares...)?
    RPA = 20;


}else{
   RPA = 0;

   
}
if(valueQ5 = "sim"){ //O Processo é Realizado 100% no SAP?
    RPA = 10;
    SAP = 20;


}else{
    SAP= 0;

   
}
if(valueQ6 = "sim"){ //O objetivo envaolve uma CONTRATAÇÃO de fontes externas (Sites, API's, Consultorias, softwares...)?
    RPA = 5;


}else{
   RPA = 10;

   
}
if(valueQ7 = "sim"){ //O Processo/Objetivo visa reduzir desperdicios? (tais como: transporte, Inventario, Processamento Excessivo e/ou defeito(s))
    RPA = 10;


}else{
   RPA = 0;

   
}
if(valueQ8 = "sim"){ //Existe alguma dependencia da T.I para atingir o Objetivo/Processo?
    RPA = 10;


}else{
   RPA = 0;

   
}
if(valueQ9 = "sim"){ // O Objetivo é voltado para um projeto de Kaizen?
RPA = 10;


}else{
   RPA = 0;

   
}
if(value10 = "sim"){ // O processo/Objetivo busca melhoria continua?
    RPA = 10;


}else{
   RPA = 0;

   
}

    // if(valueQ1 && valueQ2 && valueQ3 && valueQ5 && valueQ6 == "sim" && valueQ4 && valueQ7 && valueQ8 =="não"){
    //     console.log("Projetos e Melhoria SAP");
    //     alert("Projetos e Melhoria SAP"); 
    // }else{
    //     console.log("Outra Categoria");
    //     alert("Outra Categoria");
    // }
});




















