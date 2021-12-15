const timer = (deadLine) => {
    const timerDays = document.querySelector('.count_1').querySelector('span');
    const timerHours = document.querySelector('.count_2').querySelector('span');
    const timerMinutes = document.querySelector('.count_3').querySelector('span');
    const timerSeconds = document.querySelector('.count_4').querySelector('span');

    const getTimeRemainig = () => {
        let dateStop = new Date(deadLine).getTime();
        let dateNow = new Date().getTime();
        let timeRemainig = (dateStop - dateNow) / 1000;
        let days = Math.floor((((timeRemainig / 60) / 60) / 24) % 31);
        let hours = Math.floor(((timeRemainig / 60) / 60) % 24);
        let minutes = Math.floor((timeRemainig / 60) % 60);
        let seconds = Math.floor(timeRemainig % 60);

        return {
            timeRemainig,
            days,
            hours,
            minutes,
            seconds
        }
    };

    const styler = (elem) => elem < 10 ? `0${elem}` : elem;

    const updateClock = () => {
        let getTime = getTimeRemainig();

        timerDays.textContent = styler(getTime.days);
        timerHours.textContent = styler(getTime.hours);
        timerMinutes.textContent = styler(getTime.minutes);
        timerSeconds.textContent = styler(getTime.seconds);

        if (getTime.timeRemainig <= 1) {
            clearInterval(timeCounter);
            timerDays.textContent = "00";
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
        }
    }

    let timeCounter = setInterval(updateClock, 1000);
}

export default timer