function currentTime() {
    let theTime = new Date();

    let theDayNum = theTime.getDay();

    let theHour = theTime.getHours();

    let theMins = theTime.getMinutes();

    let theSecs = theTime.getSeconds();

    let theDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    let amPm ="AM"

    if(theHour >= 12){
        amPm = "PM";
    }

    if(theHour > 12){
        theHour = theHour % 12;
    }

    if(theHour < 10) {
        theHour = "0" + theHour;
    }

    if(theSecs < 10) {
        theSecs = "0" + theSecs
    }

    if(theMins < 10) {
        theMins ="0" + theMins
    }
    document.getElementById('day').innerHTML = theDay[theDayNum];
    document.getElementById('hour').innerHTML = theHour;
    document.getElementById('minute').innerHTML = theMins;
    document.getElementById('second').innerHTML = theSecs;
    document.getElementById('ampm').innerHTML = amPm;

    let evenSeconds = theSecs % 2;
    if(evenSeconds === 0) {
        document.getElementById('colon1').style.color = "red";
        document.getElementById('colon2').style.color = "red";
    }
    else{
        document.getElementById('colon1').style.color = "black";
        document.getElementById('colon2').style.color = "black";
    }

}

setInterval(() => {
    currentTime();
}, 1000);