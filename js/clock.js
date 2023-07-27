function getDate() {
    let clock = document.querySelector("#myClock");
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "  " + today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear()
    let currentTime = `${time}`
    clock.innerHTML = currentTime;

    setTimeout(getDate, 1000)

}

getDate();