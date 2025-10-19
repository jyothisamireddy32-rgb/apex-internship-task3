// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // ===== Image Carousel =====
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel img');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    // Show the first image initially
    showImage(currentIndex);

    // Next button
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Previous button
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // ===== API Fetch Example =====
    const jokeBtn = document.getElementById('getJoke');
    const jokeOutput = document.getElementById('jokeOutput');

    jokeBtn.addEventListener('click', () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => {
                jokeOutput.innerText = `${data.setup} - ${data.punchline}`;
            })
            .catch(err => {
                jokeOutput.innerText = "Oops! Could not fetch joke.";
                console.error(err);
            });
    });

});
