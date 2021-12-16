const documents = () => {
    const docs = document.querySelectorAll('.document-overlay')

    docs.forEach((doc) => {
        doc.addEventListener('mouseenter', () => {
            doc.style.opacity = 1
            doc.style.width = '80%'
            doc.style.left = '20px'
            console.log('in')
        })
        doc.addEventListener('mouseleave', () => {
            doc.style.opacity = 0
            console.log('leave')
        })
        doc.addEventListener('mouseleave', () => {
            doc.style.opacity = 0
            console.log('leave')
        })
    })
}

export default documents