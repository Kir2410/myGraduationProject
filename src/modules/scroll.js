const scroll = () => {
    const btn = document.querySelector('.smooth-scroll')

    btn.style.cursor = "pointer";
    btn.style.display = 'none'

    document.addEventListener('scroll', () => {
        let header = document.getElementById('header').scrollHeight
        let navigation = document.getElementById('navigation').scrollHeight
        let offer = document.getElementById('offer').scrollHeight

        if (scrollY > (header + navigation + offer)) {
            btn.style.display = 'block'
        } else {
            btn.style.display = 'none'
        }
    })

    btn.addEventListener('click', () => {
        scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    })
}

export default scroll