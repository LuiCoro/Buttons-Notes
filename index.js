// We are going into the document (index.html) and this returns the first element that matches the selectors
const button = document.querySelector( '.button' );
const buttonText = document.querySelector( '.button__text' )
const buttonIcon = document.querySelector( '.button__icon' )

// Here We are adding an eventListener that activates when the button is 'clicked',
// also it will call the "playAnimation" function
button.addEventListener( 'click', playAnimation )

function playAnimation () {
  buttonText.style.animation = 'buttonSendTextAnimation ease-in-out 3s'
  buttonIcon.style.animation = 'buttonIconAnimation ease-in 3s'
  button.disabled = true
}

// This is our first setTimeout
// This is a global method that sets a timer which executes a slice of code || a function
setTimeout( () => {
  
  // In this case we are setting the inner text of the button to "Sending..."
  buttonText.innerHTML = 'Sending...'

//  This sets the time-out to be x milliseconds
//  In this case -> 250 milliseconds (0.25 Seconds)
}, 250 )

// Second setTimeout() Executes Next
setTimeout( () => {
  
  // This now sets the inner button text to be "null" (empty)
  buttonText.innerHTML = null;
  
  // The inner icon is now being set as the inner text
  // In this case -> "Check Mark"
  buttonIcon.innerHTML = 'check'
  
  // Setting the icon in this case to be bold also works with text
  // NOTE -> we need the .style when it comes to editing the style
  button.style.fontWeight = 'bold'

//  1500 milliseconds (1.5 Seconds)
}, 1500 )

// Third setTimeout() Executes After
setTimeout( () => {
  
  // Changes the backgroundColor of the button to -> x ('#7240DE')
  button.style.backgroundColor = '#7240DE'
  
  // Changes the icon (text) color to -> x ('#F8F8F8')
  button.style.color = '#F8F8F8'
  
  // Gives it a tiny box shadow with a gray color to it
  /* REMS Explanation
    
    -> Values relative to the root "html element", not the parent element
    -> Basically lets you specify a font size in a relative fashion without being affected
    by the size of the parent
    
   */
  button.style.boxShadow = '0 1rem 2.5rem -1rem rgba( 114, 64, 222, .5 )'
  
//  1800 milliseconds (1.8 Seconds)
}, 1800 )

// Last setTimeout() That Executes
setTimeout( () => {
  
  // Clears the animation
  buttonText.style.animation = 'none'
  buttonIcon.style.animation = 'none'
  
  // button is no longer disabled
  button.disabled = false
  
  // Inner text changes -> 'Send Message'
  buttonText.innerHTML = 'Send Message'
  
  // Icon changes -> 'send' icon
  buttonIcon.innerHTML = 'send'
  
  // background color of the button becomes x ('#27272B')
  button.style.backgroundColor = '#27272B'
  
  // the icon and the text inside the button changes -> x ('#F8F8F8')
  button.style.color = '#F8F8F8'
  
  // Gives it a nice box shadow of dark-gray-ish vibes
  button.style.boxShadow = '0 1rem 2.5rem -1rem rgba(0, 0, 0, 0.25)'
  
//  this is used instead of writing long milliseconds
//  5 seconds
}, 5 * 1000 )