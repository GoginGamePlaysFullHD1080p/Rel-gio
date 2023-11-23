const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand')
const secundHand = document.querySelector('.second-hand')


const getTime = () => {
    const date = new Date();
    
    return{
        hours: date.getHours(),
        minutes: date.getMinutes(),
        secunds: date.getSeconds(),
    }
}

setInterval(() => {

    const { secunds, minutes, hours } = getTime();

    secundHand.style.transform = `translate(0, -50%) rotate(${secunds * 6}deg)`;
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;

}, 1000)