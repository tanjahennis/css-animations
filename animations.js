function startAnimation() {
  let container = document.createElement('div');

  container.className = 'animationContainer';

  let animation = document.createElement('div');

  animation.className = "animation";
  animation.style['animation-duration'] = '4s';

  container.appendChild(animation);
  document.querySelector('.mainDiv').appendChild(container);

  // removing circles
  animation.addEventListener('animationend', function(event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  })

  animation.addEventListener('mouseover', function() {
    console.log('mouseover success!')
    animation.style.backgroundColor = 'red';
  })
}

// fire multiple objects onclick
function loop() {
  let rand = Math.round(Math.random() * 1000);
  setTimeout(function() {
    startAnimation();
    loop();
  }, rand);
}
