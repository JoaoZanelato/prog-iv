function contar(){
  var inicioInput = document.querySelector('input#inicio').value
  var fimInput = document.querySelector('input#fim').value
  var passoInput = document.querySelector('input#passo').value
  var res = document.querySelector('div#res')

  if(inicioInput.length == 0 || fimInput.length == 0 || passoInput.length== 0){
    res.innerHTML = '<b>FALTAM DADOS</b>'
    return;
  }

  let inicio = Number(inicioInput)
  let fim = Number(fimInput)
  let passo = Number(passoInput)

  if (passo <= 0){
    window.alert("IMPOSSIVEL CONTAR PASSO 0, CONSIDERANDO PASSO 1")
    passo = 1
  }
  res.innerHTML = 'Contando: <br>'
  if(fim >= inicio) {
    for(var i =inicio; i <= fim; i += passo){
      res.innerHTML += `${i}👉`  
    }
    res.innerHTML += `🏁`;
  }
  else{
    for(var i = inicio; i >= fim;  i -= passo){
          res.innerHTML += `${i}👉`  
        }
    res.innerHTML += `🏁`;
  }
}
const btn = document.querySelector('button#btn')
btn.addEventListener('click', contar)