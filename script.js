function Vetor360(){
  const button = document.querySelector('.vector-360')
  const img = document.querySelector('.sofa')

  if(sofa.classList.contains('vector-360')){
    img.setAttribute('src', "./img/sofa.png")
    button.setAttribute('src', "./img/vector-360")
  } else {
    img.setAttribute('src', "./img/sofa-360.gif")
    button.setAttribute('src', "./img/vector-X.svg")
  }
}