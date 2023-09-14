let intervalId; // Variable to store the interval ID

// Generate a random musical key
function generateRandomKey() {
  const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
}

// Display the current key
function displayKey(key) {
  const currentKeyElement = document.getElementById('current-key');
  currentKeyElement.textContent = key;
}

// Start the practice session
function startPractice() {
  const repetitions = parseInt(document.getElementById('repetitions').value);
  const timeLimit = parseInt(document.getElementById('time-limit').value);
  let counter = 0;
  const progressBar = document.getElementById('progress-bar');

  function generateAndDisplayKey() {
    const key = generateRandomKey();
    displayKey(key);
    counter++;

    if (counter === repetitions + 1) {
      clearInterval(intervalId);
      displayKey('Practice Complete');
    }
  }

  // Display "Ready" message immediately
  displayKey('Ready');

  progressBar.style.display = 'block';
  progressBar.style.animation = `progressAnimation ${timeLimit}s linear`;

  intervalId = setInterval(generateAndDisplayKey, timeLimit * 1000);

  document.getElementById('repetitions').disabled = true;
  document.getElementById('time-limit').disabled = true;
  document.getElementById('start-btn').disabled = true;
}

// Cancel the practice session
function cancelPractice() {
  clearInterval(intervalId);

  const progressBar = document.getElementById('progress-bar');
  progressBar.style.display = 'none';
  progressBar.style.animation = '';

  // Enable controls
  document.getElementById('repetitions').disabled = false;
  document.getElementById('time-limit').disabled = false;
  document.getElementById('start-btn').disabled = false;
  displayKey('');
}

// Attach click event listeners to the start and cancel buttons
document.getElementById('start-btn').addEventListener('click', startPractice);
document.getElementById('cancel-btn').addEventListener('click', cancelPractice);
