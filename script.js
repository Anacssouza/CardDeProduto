function Vetor360(){
  var button = document.querySelector(".vector-360")
  var img = document.querySelector(".sofa")
  var staticButton = document.querySelector(".vector")

  if(button){
    img.setAttribute('src', "./img/sofa-360.gif")
    button.setAttribute('src', "./img/vector-X.svg")
    button.removeAttribute('class', 'vector-360')
    button.setAttribute('class', 'vector')
  } else {
    img.setAttribute('src', "./img/sofa.png")
    staticButton.setAttribute('src', "./img/vector-360.svg")
    staticButton.setAttribute('class', 'vector vector-360')
  }

}