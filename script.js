let counter;
let lastPressTime;
let clicks = 0;
let lastClickTime = 0;

function getCounter() {
  fetch('http://kovadev.pythonanywhere.com/counter')
  .then(response => response.json())
  .then(data => {
    counter = data.counter;
    document.getElementById('counter').innerText = counter;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function incrementCounter() {
    fetch('http://kovadev.pythonanywhere.com/increment',)
    .then(response => response.json())
    .then(data => {
      counter = data.counter;
      document.getElementById('counter').innerText = counter;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function handleButtonClick() {
  const currentTime = new Date().getTime();

  if (clicks < 10) {
      incrementCounter();
      clicks++;
      lastClickTime = currentTime;
    } else {
        if (currentTime - lastClickTime >= 120000) {
            clicks = 0;
            incrementCounter();
            clicks++;
            lastClickTime = currentTime;
          } else {
            alert('Bajale un cambio, volvé en dos minutitos');
          }
    }
}

document.getElementById('button').addEventListener('click', handleButtonClick);

document.addEventListener('DOMContentLoaded', function() {
  getCounter();
  lastPressTime = localStorage.getItem('lastPressTime') || 0;
});
