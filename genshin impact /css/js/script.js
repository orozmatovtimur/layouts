function parallax(event) {
    this.querySelectorAll('.image').forEach(img => {
        let speed = img.getAttribute('data-speed');
        img.style.transform = `translateX(${event.clientX*speed/1000}px)`
    });
}

document.addEventListener('mousemove', parallax);
// сюда добавляем события когда допустим мышка будет двигаться туда-сюда