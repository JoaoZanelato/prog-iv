const btn = document.querySelector('button#btn')
btn.addEventListener('click', contar)

function contar(){
    var numInput = document.querySelector('input#num').value
    var select = document.querySelector('select#tabuada')
    if (numInput.length == 0){
        window.alert('Impossível calcular sem algarismo')
        return
    }
    select.innerHTML=''
    var num = Number(numInput)
    
        for(var i = 1; i <= 10; i++){
            let item = document.createElement('option')

            item.text = `${i} x ${num} = ${i*num}`

            item.value = `tab${i}`

            select.appendChild(item);
        }
}
