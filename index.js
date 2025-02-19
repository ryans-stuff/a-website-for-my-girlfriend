const startedDating = new Date("February 7, 2025 18:46:08")


function diff_hours() 
  {
    let timeNow = new Date()
    console.log(timeNow, startedDating)
    let difference = (timeNow.getTime() - startedDating.getTime()) / 1000;
    let weeks = Math.floor(difference / (60*60*24*7))
    let days = Math.floor(difference / (60*60*24))
    let hours = Math.floor(difference/ (60*60))%24
    let minutes = Math.floor(difference/60)%60
    let seconds = Math.floor(difference)%60


    let dayLabel = document.getElementById("days-elapsed")
    dayLabel.innerHTML = days + " days of funny reels,"

    let hourLabel = document.getElementById("hours-elapsed")
    hourLabel.innerHTML = hours + " hours of good nights and good mornings,"

    let minutesLabel = document.getElementById("minutes-elapsed")
    minutesLabel.innerHTML = minutes + " minutes of those funny looking dog pictures,"

    let secondsLabel = document.getElementById("seconds-elapsed")
    secondsLabel.innerHTML = "and " + seconds + " more seconds of loving you ❤️"

  }


setInterval(diff_hours, 1000)