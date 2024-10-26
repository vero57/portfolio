function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function updateProgressBar() {
    const progressBar1 = document.getElementById('progressBar1');
    const progressBar2 = document.getElementById('progressBar2');
    const progressBar3 = document.getElementById('progressBar3');
    const progressBar4 = document.getElementById('progressBar4');
    const progressBar5 = document.getElementById('progressBar5');
    const progressBar6 = document.getElementById('progressBar6');
    const progressBar7 = document.getElementById('progressBar7');
    const progressBar8 = document.getElementById('progressBar8');
    const progressBar9 = document.getElementById('progressBar9');

    if (isElementInViewport(progressBar1)) {
        progressBar1.style.width = '80%';
        progressBar1.textContent = '80%';
    }
    if (isElementInViewport(progressBar2)) {
        progressBar2.style.width = '80%';
        progressBar2.textContent = '80%';
    }
    if (isElementInViewport(progressBar3)) {
        progressBar3.style.width = '60%';
        progressBar3.textContent = '60%';
    }
    if (isElementInViewport(progressBar4)) {
        progressBar4.style.width = '50%';
        progressBar4.textContent = '50%';
    }
    if (isElementInViewport(progressBar5)) {
        progressBar5.style.width = '66%';
        progressBar5.textContent = '66%';
    }
    if (isElementInViewport(progressBar6)) {
        progressBar6.style.width = '55%';
        progressBar6.textContent = '55%';
    }
    if (isElementInViewport(progressBar7)) {
        progressBar7.style.width = '10%';
        progressBar7.textContent = '10%';
    }
    if (isElementInViewport(progressBar8)) {
        progressBar8.style.width = '62%';
        progressBar8.textContent = '62%';
    }
    if (isElementInViewport(progressBar9)) {
        progressBar9.style.width = '70%';
        progressBar9.textContent = '70%';
    }
}

window.addEventListener('scroll', updateProgressBar);