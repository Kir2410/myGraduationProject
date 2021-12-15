import {
    animate
} from "./helpers"

const headerModal = () => {
    const modal = document.querySelector('.header-modal ');
    const buttons = document.querySelectorAll('.btn-warning');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modal.style.display = 'block';
                    modal.style.opacity = progress;
                }
            })
        })
    });

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('header-modal__close')) {
            modal.style.display = 'none';
        }
    })
}

export default headerModal