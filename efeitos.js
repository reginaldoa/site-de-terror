let horario = document.querySelector("footer#horario")
let data = new Date();
let horas = data.getHours();
let minutos = data.getMinutes();

horario.innerHTML=`${horas}:${minutos} é a hora do seu medo!`

function enviar(){
let n = window.document.getElementById("nome")
let nome = (n.value)
let historia = window.document.getElementById("historia")

if(nome == 0 || historia.value==""){
    window.alert("Nos conte a sua história! Também queremos saber o seu nome.")
} else{
    window.alert(`Tudo bem ${nome},iremos ler e se sua história for realmente macabra, iremos publicar!`)

} historia.value=""
  n.value=""
  n.focus()

}
