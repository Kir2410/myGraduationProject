const servicesSlider = () => {
    const sliderBlock = document.querySelector('#services')
    const slider = document.querySelector('#services').querySelector('.row')
    const slides = document.querySelector('#services').querySelectorAll('.col-md-12')
    const servicesArrows = document.querySelector('#services').querySelector('.services-arrows')

    const timerInterval = 2000

    let currentSlide = 0
    let secondSlide = 1
    let interval

    if (window.innerWidth >= 576) {
        const prevSlide = () => {
            slides[secondSlide].style.display = 'none'

            currentSlide--
            secondSlide--

            if (currentSlide < 0) {
                currentSlide = (slides.length - 1)
            }
            if (secondSlide < 0) {
                secondSlide = (slides.length - 1)
            }

            slides[secondSlide].before(slides[currentSlide])
            slides[currentSlide].style.display = 'block'
        }
        const nextSlide = () => {
            servicesArrows.before(slides[currentSlide])
            slides[currentSlide].style.display = 'none'

            currentSlide++
            secondSlide++

            if (currentSlide >= slides.length) {
                currentSlide = 0
            }
            if (secondSlide >= slides.length) {
                secondSlide = 0
            }

            slides[currentSlide].style.display = 'block'
            slides[secondSlide].style.display = 'block'
        }

        const startSlide = (timer = 1500) => {
            interval = setInterval(nextSlide, timer)
        }

        slider.addEventListener('click', (e) => {
            e.preventDefault()
            if (e.target.closest('.services__arrow--right')) {
                nextSlide()
            } else if (e.target.closest('.services__arrow--left')) {
                prevSlide()
            }
        })

        slides.forEach(slide => {
            slide.style.display = 'none'
        })
        slides[currentSlide].style.display = 'block'
        slides[secondSlide].style.display = 'block'

        startSlide(timerInterval)
    } else {
        const prevSlide = () => {
            slides[currentSlide].style.display = 'none'

            currentSlide--

            if (currentSlide < 0) {
                currentSlide = (slides.length - 1)
            }

            slides[secondSlide].before(slides[currentSlide])
            slides[currentSlide].style.display = 'block'
        }
        const nextSlide = () => {
            servicesArrows.before(slides[currentSlide])
            slides[currentSlide].style.display = 'none'

            currentSlide++

            if (currentSlide >= slides.length) {
                currentSlide = 0
            }

            slides[currentSlide].style.display = 'block'
        }

        const startSlide = (timer = 1500) => {
            interval = setInterval(nextSlide, timer)
        }

        slider.addEventListener('click', (e) => {
            e.preventDefault()
            if (e.target.closest('.services__arrow--right')) {
                nextSlide()
            } else if (e.target.closest('.services__arrow--left')) {
                prevSlide()
            }
        })

        slides.forEach(slide => {
            slide.style.display = 'none'
        })
        slides[currentSlide].style.display = 'block'

        startSlide(timerInterval)
    }
}

export default servicesSlider