const randomContent = [
    "You will have to wait here for eternity because your internet is so slow. MWAHAHAHAHAHAHAHA!!!!",
    "Loading... Please wait patiently.",
    "Calculating the meaning of life... Just kidding, it's just loading.",
    "Counting down the seconds until your impatience grows... 5... 4... 3... 2... 1... Just kidding, it's still loading."
  ];
  function changeText() {
    const loadingText = document.querySelector('.loading-text');
    const randomIndex = Math.floor(Math.random() * randomContent.length);
    loadingText.style.opacity = 0;
    setTimeout(() => {
      loadingText.textContent = randomContent[randomIndex];
      loadingText.style.opacity = 1;
    }, 1000);
  }
  setInterval(changeText, 2000);
  
  setTimeout(() => {
    document.querySelector('.loading-container').style.display = 'none';
    document.querySelector('header').style.display = 'block';
    document.querySelector('.Main').style.display = 'block';
    document.querySelector('body').style.backgroundImage = "url('Images/Stage.jpeg')";
    document.querySelector("audio").pause();
    document.querySelector("audio").muted = true;
  }, 15000);

document.querySelector("audio").muted = false;