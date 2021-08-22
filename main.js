function currentTime() {
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var month = date.getMonth();
    var curr_date = date.getDate();
    var year = date.getFullYear();
    var monthName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    var showDay = document.querySelectorAll(".day__wrapper span")
    var midday = "AM";
    midday = (hour >= 12)
        ? "PM"
        : "AM";
    hour = (hour == 0)
        ? 12
        : ((hour > 12)
            ? (hour - 12)
            : hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    curr_date = updateTime(curr_date)
    document
        .querySelector("#time")
        .innerHTML = `${hour} : ${min}`
    document
        .querySelector("#sec")
        .innerHTML = `${sec}`
    document
        .querySelector("#med")
        .innerHTML = `${midday}`;
    document
        .querySelector("#full__date")
        .innerHTML = `${monthName[month]} ${curr_date} ${year}`
    showDay[day].style.opacity = '1';
}
function updateTime(y) {
    if (y < 10) {
        return "0" + y;
    } else {
        return y;
    }
}
setInterval(currentTime, 1000);