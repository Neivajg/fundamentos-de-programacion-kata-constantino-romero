const data = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";//No puede ser const

  newHTML += imprimeTitulo(pregunta); //Forma larga  =newHTML = newHTML + imprimeTitulo(pregunta) 
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  return "<p>"+ pregunta.titulo +"</p>" 
}

function imprimeTodasLasRespuestas(pregunta) {

  let todaslasrespuestas = "";
  for(let i =0 ; i< pregunta.respuestas.length; i++){
    todaslasrespuestas += imprimeUnaRespuesta(pregunta.respuestas[i])
  }
 
  // todaslasrespuestas += imprimeUnaRespuesta(pregunta.respuestas[0])
  // todaslasrespuestas += imprimeUnaRespuesta(pregunta.respuestas[1])
  // todaslasrespuestas += imprimeUnaRespuesta(pregunta.respuestas[2])
  // todaslasrespuestas += imprimeUnaRespuesta(pregunta.respuestas[3])
  // todaslasrespuestas += imprimeUnaRespuesta(pregunta.respuestas[4])

return todaslasrespuestas 
}


function imprimeUnaRespuesta(respuesta) {
  return imprimeLabel(respuesta) + imprimeInput(respuesta)
}

function imprimeLabel(respuesta) {
 console.log(respuesta)
  return  `<label for=" ${respuesta.id} "> ${respuesta.label}  </label>`
}

function imprimeInput(respuesta) {
  return `<Input type="radio" id=" ${respuesta.id} " name=" ${respuesta.name}" value=" ${respuesta.value}"/>`
}

 document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(data);