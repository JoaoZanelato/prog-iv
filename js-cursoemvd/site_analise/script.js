let nums = [];
const add = document.querySelector("button#add");
const btn = document.querySelector("button#analisar");

add.addEventListener("click", adicionar);
btn.addEventListener('click', analisar)

function adicionar() {
  var select = document.querySelector("select#select");
  var numInput = document.querySelector("input#num").value;
  if (numInput.length == 0) {
    window.alert("Nada para adicionar");
    return;
  } else {
    var num = Number(numInput);
    nums.push(num);
    let option = document.createElement("option");
    option.text = `Valor ${num} adicionado`;
    select.appendChild(option);
  }
}

function analisar() {
  var res = document.querySelector("div#res");
  nums.sort();
  var tamanho = nums.length;
  var menor = nums[0];
  var maior = nums[tamanho-1];
  var soma = 0;
  for (var num in nums) {
    soma += nums[num];
  }
  var media = soma / tamanho;
  res.innerHTML = `Ao todo, temos ${tamanho} números cadastrados <br> O maior valor informado é ${maior} <br> O menor valor informado é ${menor} <br> Somando todos os valores, temos ${soma}<br>A média dos valores digitados é ${media}`;
}
