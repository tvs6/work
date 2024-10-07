 // JavaScript to toggle between the two divs
 document.getElementById("showlive-event").addEventListener("click", function() {
    document.getElementById("live-event").style.display = "block";
    document.getElementById("live-tv").style.display = "none";
});

document.getElementById("showlive-tv").addEventListener("click", function() {
    document.getElementById("live-event").style.display = "none";
    document.getElementById("live-tv").style.display = "block";
});

function updateClock() {
    // Get the current time
    var now = new Date();
    
    // Extract hours, minutes, and seconds
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Format time to always be 2 digits (e.g., 09:05:08)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the clock's HTML content
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
  }

  // Update the clock every second
  setInterval(updateClock, 1000);

  // Initialize the clock when the page loads
  updateClock();

  const slider = document.querySelector('.slider');
    const slide = document.querySelector('.slide');
    const totalSlides = document.querySelectorAll('.card').length;
    const slideWidth = 100 / totalSlides;
    let isDown = false;
    let startX;
    let currentTranslateX = 0;

    // Mouse Down
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
    });

    // Mouse Leave
    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    // Mouse Up
    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    // Mouse Move
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return; // stop the function from running
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const moveX = (x - startX) * 0.3;
        let newTranslateX = currentTranslateX + moveX / slider.offsetWidth * 100;

        // Constrain movement to within the bounds (first and last slide)
        newTranslateX = Math.min(0, newTranslateX); // No movement past the first slide
        newTranslateX = Math.max(-(totalSlides - 1) * slideWidth, newTranslateX); // No movement past the last slide

        slide.style.transform = `translateX(${newTranslateX}%)`;
    });

    // Mouse Up - Save position when mouse is released
    slider.addEventListener('mouseup', () => {
        isDown = false;
        currentTranslateX = parseFloat(slide.style.transform.replace('translateX(', '').replace('%)', ''));
    });

    // Touch Events for mobile devices
    slider.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - slider.offsetLeft;
    });

    slider.addEventListener('touchend', () => {
        isDown = false;
        currentTranslateX = parseFloat(slide.style.transform.replace('translateX(', '').replace('%)', ''));
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - slider.offsetLeft;
        const moveX = (x - startX) * 0.3;
        let newTranslateX = currentTranslateX + moveX / slider.offsetWidth * 100;

        // Constrain movement within bounds (prevent overshooting)
        newTranslateX = Math.min(0, newTranslateX); // Prevent moving past the first slide
        newTranslateX = Math.max(-(totalSlides - 1) * slideWidth, newTranslateX); // Prevent moving past the last slide

        slide.style.transform = `translateX(${newTranslateX}%)`;
    });

    const mover = document.querySelector('.mover');
    const move = document.querySelector('.move');
    const totalmoves = document.querySelectorAll('.card').length;
    const moveWidth = 100 / totalmoves;
    

    // Mouse Down
    mover.addEventListener('mousedown', (e) => {
        isDown = true;
        mover.classList.add('active');
        startX = e.pageX - mover.offsetLeft;
    });

    // Mouse Leave
    mover.addEventListener('mouseleave', () => {
        isDown = false;
    });

    // Mouse Up
    mover.addEventListener('mouseup', () => {
        isDown = false;
    });

    // Mouse Move
    mover.addEventListener('mousemove', (e) => {
        if (!isDown) return; // stop the function from running
        e.preventDefault();
        const x = e.pageX - mover.offsetLeft;
        const moveX = (x - startX) * 0.3;
        let newTranslateX = currentTranslateX + moveX / mover.offsetWidth * 100;

        // Constrain movement to within the bounds (first and last move)
        newTranslateX = Math.min(0, newTranslateX); // No movement past the first move
        newTranslateX = Math.max(-(totalmoves - 1) * moveWidth, newTranslateX); // No movement past the last move

        move.style.transform = `translateX(${newTranslateX}%)`;
    });

    // Mouse Up - Save position when mouse is released
    mover.addEventListener('mouseup', () => {
        isDown = false;
        currentTranslateX = parseFloat(move.style.transform.replace('translateX(', '').replace('%)', ''));
    });

    // Touch Events for mobile devices
    mover.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - mover.offsetLeft;
    });

    mover.addEventListener('touchend', () => {
        isDown = false;
        currentTranslateX = parseFloat(move.style.transform.replace('translateX(', '').replace('%)', ''));
    });

    mover.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - mover.offsetLeft;
        const moveX = (x - startX) * 0.3;
        let newTranslateX = currentTranslateX + moveX / mover.offsetWidth * 100;

        // Constrain movement within bounds (prevent overshooting)
        newTranslateX = Math.min(0, newTranslateX); // Prevent moving past the first move
        newTranslateX = Math.max(-(totalmoves - 1) * moveWidth, newTranslateX); // Prevent moving past the last move

        move.style.transform = `translateX(${newTranslateX}%)`;
    });