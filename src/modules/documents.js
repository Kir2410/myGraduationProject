import {
    animate
} from "./helpers"

const documents = () => {
    const docBlock = document.querySelector('#documents');
    const modal = document.querySelector('.overlay');
    const modalContent = document.createElement('div');
    const docs = document.querySelectorAll('.document-overlay')
    const closeBtn = document.querySelector('.header-modal__close')

    docs.forEach((doc) => {
        doc.style.top = "50%"
        doc.style.left = "50%"
        doc.style.transform = "translate(-50%, -50%)"
        doc.style.height = "280px"
        doc.style.width = "200px"

        doc.addEventListener('mouseenter', () => {
            animate({
                duration: 200,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    doc.style.opacity = progress;
                }
            })
        })
        doc.addEventListener('mouseleave', () => {
            if (doc.style.position != "fixed") {
                doc.style.opacity = 0
            }
        })
        doc.addEventListener('click', (e) => {
            e.preventDefault()

            modal.style.display = "block"
            modalContent.style.display = "block"
            modalContent.style.position = "fixed"
            modalContent.style.zIndex = 9999

            modalContent.style.top = "50%"
            modalContent.style.left = "50%"
            modalContent.style.transform = "translate(-50%, -50%)"

            modalContent.style.height = "80vh"
            modalContent.style.width = "57vh"

            modalContent.style.backgroundImage = `url(${e.target.closest('a').pathname})`
            modalContent.style.backgroundSize = "contain"

            docBlock.append(modalContent)
            modalContent.append(closeBtn)

            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modalContent.style.opacity = progress;
                }
            })
        })
    })

    closeBtn.addEventListener('click', () => {
        modalContent.remove()
        modal.style.display = "none"
    })
}

export default documents