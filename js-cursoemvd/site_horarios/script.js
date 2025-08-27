function carregar (){
var msg = window.document.querySelector('div#msg')
var img = window.document.querySelector('img#imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora sao ${hora} horas`

if (hora >= 0 && hora < 12){
 img.src = "manha.png"
 document.body.style.background = '#d3b03dff'
} else if(hora >= 12 && hora < 18) {
 img.src = "tarde.png" 
 document.body.style.background = '#cca740'
} else{
 img.src = 'noite.png' 
 document.body.style.background = '#030246c7'

}
}
