const warningText = document.getElementById('warning-text');
    const audio = new Audio("C:\Users\KRISHAN SOROUT\OneDrive\Desktop\interface-welcome-131917.mp3"); // Replace 'your_warning_sound.mp3' with the path to your sound file

    function playSound() {
      audio.play();
    }

    function blinkText() {
      warningText.style.animation = 'none';
      setTimeout(() => {
        warningText.style.animation = 'blink 1s infinite';
      }, 10000);
    }

    playSound(); // Plays the warning sound
    setInterval(blinkText, 100000); // Sets the text to blink every 1 second

