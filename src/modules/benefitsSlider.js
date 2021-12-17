const benefitsSlider = () => {
    const slider = document.querySelector('#benefits')
    const sliderBlock = document.querySelector('.benefits-wrap')
    const slides = document.querySelectorAll('.benefits__item')
    const timerInterval = 2000

    let currentSlide = 0
    let secondSlide = 1
    let thirdtSlide = 2
    let interval

    const prevSlide = () => {
        sliderBlock.prepend(slides[slides.length - 1])
        slides[currentSlide].style.display = 'block'
        slides[thirdtSlide].style.display = 'none'

        currentSlide--
        secondSlide--
        thirdtSlide--

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        if (secondSlide >= slides.length) {
            secondSlide = 0
        }
        if (thirdtSlide >= slides.length) {
            thirdtSlide = 0
        }

        slides[currentSlide].style.display = 'block'
        slides[secondSlide].style.display = 'block'
        slides[thirdtSlide].style.display = 'block'
    }
    const nextSlide = () => {
        sliderBlock.append(slides[currentSlide])
        slides[currentSlide].style.display = 'none'

        currentSlide++
        secondSlide++
        thirdtSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        if (secondSlide >= slides.length) {
            secondSlide = 0
        }
        if (thirdtSlide >= slides.length) {
            thirdtSlide = 0
        }

        slides[currentSlide].style.display = 'block'
        slides[secondSlide].style.display = 'block'
        slides[thirdtSlide].style.display = 'block'
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(nextSlide, timer)
    }
    const stopSlide = () => {
        clearInterval(interval)
    }

    slider.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.closest('.benefits__arrow--right')) {
            nextSlide()
            console.log('вправо')

        } else if (e.target.closest('.benefits__arrow--left')) {
            prevSlide()
            console.log('влево')
        }
    })

    slides.forEach(slide => {
        slide.style.display = 'none'
    })
    slides[0].style.display = 'block'
    slides[1].style.display = 'block'
    slides[2].style.display = 'block'

    startSlide(timerInterval)
}

export default benefitsSlider