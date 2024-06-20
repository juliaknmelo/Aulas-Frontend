/*
-tipagem fraca dinamica (inferenia de dados)
-case sensitive (a != A)
-criação de variaveis 

DOM -> Documento-Object Model
*/
// buscar elementos pelo nome da tag (caso tenha mais que Uint8ClampedArray, vai pegar todos)
// window.document.getElementsByTagName(button)

// buscar elementos pelo id  (encontrou o primeiro, paraa busca)
// const cmapo  = window.document.getElementById("nome")

//busca tudo
//document.querySelectorAll("nome")

// busca um e para
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let mapa = document.querySelector("#mapa");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

// console.log(nome);
// console.log(email);

//funções no JS
function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome inválido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome válido";
    txtNome.style.color = "white";
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "Email inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "E-mail válido";
    txtEmail.style.color = "white";
    emailOk = true;
  }
}

function validaEmail2() {
  // cria o padrão do email, aceitando: caracteres + @ + caracteres + . + 2 ou 3 caracteres para finalizar
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let txtEmail = document.querySelector("#txtEmail");

  //o if verifica se o que a pessoa digitou condiz com o padrão (dá o match)
  if (email.value.match(regex)) {
    txtEmail.innerHTML = "E-mail válido";
    txtEmail.style.color = "white";
    emailOk = true;
  } else {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
    emailOk = false;
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector("#txtAssunto");
  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML =
      "Digite no máximo 100 caracteres";
    txtAssunto.style.color = "red";
    txtAssunto.style.display = "block";
  } else {
    // txtAssunto.innerHTML = "Texto válido";
    // txtAssunto.style.color = "white";
    txtAssunto.style.display = "none";
    assuntoOk = true;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert("Formulário enviado com sucesso");
  } else {
    alert("Preencha o formulário corretamente antes de enviar");
  }
}

function mapaZoom() {
  mapa.style.width = "600px";
  mapa.style.height = "400px";
}

function mapaNormal() {
  mapa.style.width = "400px";
  mapa.style.height = "250px";
}
