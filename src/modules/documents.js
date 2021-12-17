import {
    animate
} from "./helpers"

const documents = () => {
    const docs = document.querySelectorAll('.document-overlay')
    const modal = document.querySelector('.overlay ');
    const modalContent = document.querySelector('.header-modal ');

    docs.forEach((doc) => {
        doc.addEventListener('mouseenter', () => {
            doc.style.opacity = 1
            // doc.style.width = '80%'
            // doc.style.left = '20px'
        })
        doc.addEventListener('mouseleave', () => {
            doc.style.opacity = 0
        })
        doc.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(e.target.closest('a').pathname)

            modalContent.innerHTML = `<img src=${e.target.closest('a').pathname} height=400px>`
            console.log(modalContent)
            // let img = e.target.closest('a').children[0]
            // console.dir(img)
            // img.src = e.target.closest('a').pathname
            // img.style.display = 'block'


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
    })
}

export default documents