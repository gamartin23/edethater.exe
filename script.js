let counter = localStorage.getItem('counter') || 0;
let lastPressTime = localStorage.getItem('lastPressTime') || 0;
document.getElementById('counter').innerText = counter;
document.getElementById('button').addEventListener('click', function() {
  const currentTime = new Date().getTime();
  
  if (currentTime - lastPressTime >= 30000) { 
    counter++;
    document.getElementById('counter').innerText = counter;
    localStorage.setItem('counter', counter);
    localStorage.setItem('lastPressTime', currentTime);
  } else {
    alert('Entendemos que tu bronca sea eterna, pero el hosting no lo es.');
  }
});
