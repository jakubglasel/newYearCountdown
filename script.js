const date = new Date().getFullYear()
console.log(date)

const newYear = new Date(`${ date + 1 }-01-01 0:0:0`).getTime();


setInterval(() =>
{
    const timeNow = new Date().getTime();
    const timeDiff = newYear - timeNow;

    const days = Math.floor((timeDiff / (1000 * 60 * 60 * 24)));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);


    document.querySelector('.days').textContent = days;
    document.querySelector('.hours').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;

    // console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}  `)
}, 1000)