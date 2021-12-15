import {
    animate
} from "./helpers"

const servicesModal = () => {
    const modal = document.querySelector('.overlay');
    const modalContent = document.querySelector('.services-modal ');
    const buttons = document.querySelectorAll('.service-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modal.style.display = 'block';
                    modalContent.style.display = 'block';
                    modalContent.style.opacity = progress;
                }
            })
        })
    });

    modalContent.addEventListener('click', (e) => {
        if (e.target.classList.contains('services-modal__close')) {
            modal.style.display = 'none';
            modalContent.style.display = 'none';
        }
    })
}

export default servicesModal