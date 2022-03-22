const deg = 6;
const sc = document.querySelector('.sc');
const mn = document.querySelector('.mn');
const hr = document.querySelector('.hr');

function setDate() {
    const now = new Date();
            
    const seconds = now.getSeconds()*deg;   
    sc.style.transform = `rotate(${seconds}deg)`;
                
    const minutes = now.getMinutes()*deg;
    mn.style.transform = `rotate(${minutes}deg)`;

    const hours = now.getHours()*30;
    hr.style.transform = `rotate(${(hours)+(minutes/12)}deg)`;
}

setDate();
setInterval(setDate, 1000);