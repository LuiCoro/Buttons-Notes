const button = document.querySelector( 'button' );
const buttonText = document.querySelector( '.button__text' )
const buttonIcon = document.querySelector( '.button__icon' )

button.addEventListener( 'click', playAnimation )

function playAnimation () {
  buttonText.style.animation = 'buttonSendTextAnimation ease-in-out 3s'
  buttonIcon.style.animation = 'buttonIconAnimation ease-in 3s'
  button.disabled = true
}

setTimeout( () => {
  buttonText.innerHTML = 'Sending...'
}, 250 )

setTimeout( () => {
  buttonText.innerHTML = null;
  buttonIcon.innerHTML = 'check'
  button.style.fontWeight = 'bold'
}, 1500 )

setTimeout( () => {
  button.style.backgroundColor = '#7240DE'
  button.style.color = '#F8F8F8'
  button.style.boxShadow = '0 1rem 2.5rem -1rem rgba( 114, 64, 222, .5 )'
} , 1800)

setTimeout(() => {
  buttonText.style.animation = 'none'
  buttonText.style.animation = 'none'
  button.disabled = false
  
  buttonText.innerHTML = 'Send Message'
  buttonIcon.innerHTML = 'send'
  
  button.style.backgroundColor = '#27272B'
  button.style.color = '#F8F8F8'
  button.style.boxShadow = '0 1rem 2.5rem -1rem rgba(0, 0, 0.25)'
  
}, 5 * 1000)