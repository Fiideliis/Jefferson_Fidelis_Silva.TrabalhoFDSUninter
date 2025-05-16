let button = document.querySelector("button");
let button2 = document.querySelector("button2");


     button.addEventListener("mouseout",e =>{
     button.style.background="rgb(54, 0, 201)";});
     button.addEventListener("mouseout",e =>{
     button.style.color="rgb(255, 255, 255)";});
     button.addEventListener("mouseout", function() {
     this.style.padding = "20px";
    });


     button.addEventListener("mouseenter",e =>{
     button.style.background="rb(255, 255, 255)";});
     button.addEventListener("mouseenter",e =>{
     button.style.color="rb(54, 0, 201)";});
     button.addEventListener("mouseenter", function() {
      this.style.padding = "25px";
    });

    button.addEventListener("click",e =>{
    button.style.background="rgb(165, 164, 164)";});
    button.addEventListener("click",e =>{
    button.style.color="rgb(42, 1, 155)";});
    button.addEventListener("click", function() {
    this.style.padding = "30px";
  });
     

   
     button.addEventListener("click", e=> {
     mensagem.textContent = "LEVEL UP!";});
     button.addEventListener("click", e=> {
     mensagem2.textContent = "Parabéns!";});
     button.addEventListener("click", e=> {
     mensagem3.textContent = "Você acaba de subir de Level.";});
     document.getElementById("botao").addEventListener("click", e=> {
     setTimeout( e=> {
     document.getElementById("mensagem").innerHTML = "";}, 3300);});
     document.getElementById("botao").addEventListener("click", e=> {
     setTimeout( e=> {
     document.getElementById("mensagem2").innerHTML = "";}, 3300);});
     document.getElementById("botao").addEventListener("click", e=> {
     setTimeout( e=> {
     document.getElementById("mensagem3").innerHTML = "";}, 3300);
    });



    button2.addEventListener("mouseout",e =>{
    button2.style.background="rgb(54, 0, 201)";});
    button2.addEventListener("mouseout",e =>{
    button2.style.color="rgb(255, 255, 255)";});
    button2.addEventListener("mouseout", function() {
    this.style.padding = "20px";
    });


    button2.addEventListener("mouseenter",e =>{
    button2.style.background="rb(255, 255, 255)";});
    button2.addEventListener("mouseenter",e =>{
    button2.style.color="rb(54, 0, 201)";});
    button2.addEventListener("mouseenter", function() {
    this.style.padding = "22px";
});
  

   