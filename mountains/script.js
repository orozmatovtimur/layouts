function parallax(event) {
    this.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateX(${event.clientX*speed/1000}px)`
    });
}

document.addEventListener('mousemove', parallax);
// сюда добавляем события когда допустим мышка будет двигаться туда-сюда