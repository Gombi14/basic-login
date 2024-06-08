const submit=document.getElementById('submit')
const email=document.getElementById('email')
const password=document.getElementById('password')

function mostrarAlerta(){
  alert("Bienbenido "+email.value+"!");
}

submit.addEventListener('click',mostrarAlerta)
submit.addEventListener('click', function(){
  password.value=""
})