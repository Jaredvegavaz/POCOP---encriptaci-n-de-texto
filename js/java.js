let resultadosecc = document.getElementById("resultado")
resultadosecc.style.display = 'none'

let copiarbutton = document.getElementById('imgcopy')
copiarbutton.style.display = 'none'

const snresultado = document.getElementById("piedepagina")


let textoA = document.getElementById("texttt")


const buttonEncriptar = document.getElementById("encriptar")
buttonEncriptar.addEventListener('click', textoaEncriptar)

const buttonDesencriptar = document.getElementById("desencriptar")
buttonDesencriptar.addEventListener('click', textoadesencriptar)

const parrafoResultado = document.getElementById("parrafoResultado")


function textoaEncriptar(){
  let valorTexto = textoA.value;
  let textop = encriptador(valorTexto)
  parrafoResultado.innerHTML = textop
  snresultado.style.display = 'none'
  resultadosecc.style.display = 'flex'
  copiarbutton.style.display = 'flex'
}

function textoadesencriptar(){
  let valorTexto = textoA.value;
  let textop = desencriptador2(valorTexto)
  parrafoResultado.innerHTML = textop
  snresultado.style.display = 'none'
  resultadosecc.style.display = 'flex'
}

function encriptador(cadenaDeTexto) {
  let textoincriptado = "";
  for (i = 0; i < cadenaDeTexto.length; i++) {


      let letra = cadenaDeTexto[i]


      if (letra === 'a') {
          letra = 'ai'
      } else if (letra === 'e') {
          letra = 'enter'
      } else if (letra === 'i') {
          letra = 'imes'
      } else if (letra === 'o') {
          letra = 'ober'
      } else if (letra === 'u') {
          letra = 'ufat'
      }

textoincriptado += letra;


  }
  return textoincriptado
}


function desencriptador2(textoEncriptado) {
let textoDesencriptado = "";
for (let i = 0; i < textoEncriptado.length; i++) {
  let letra = textoEncriptado[i];
  if (letra === 'a' && textoEncriptado[i+1] === 'i') {
    letra = 'a';
    i++;
  } else if (letra === 'e' && textoEncriptado.substring(i, i+5) === 'enter') {
    letra = 'e';
    i += 4;
  } else if (letra === 'i' && textoEncriptado.substring(i, i+4) === 'imes') {
    letra = 'i';
    i += 3;
  } else if (letra === 'o' && textoEncriptado.substring(i, i+4) === 'ober') {
    letra = 'o';
    i += 3;
  } else if (letra === 'u' && textoEncriptado.substring(i, i+4) === 'ufat') {
    letra = 'u';
    i += 3;
  }
  textoDesencriptado += letra;
}
return textoDesencriptado;
}


const botonCopiar = document.querySelector('#copiar');


botonCopiar.addEventListener('click', () => {
  navigator.clipboard.writeText(parrafoResultado.textContent)
    .then(() => {
      console.log('Texto copiado al portapapeles');
    })
    .catch((err) => {
      console.error('Error al copiar el texto: ', err);
    });
});


  
const mensaje = 'Estenter enters ufatn menternsaijenter senfenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!tercrentertober';
const mensajeEncriptado = desencriptador2(mensaje);
