let ageUpdateInterval;

function startAgeUpdate() {
    clearInterval(ageUpdateInterval); 

    calculateAge(); 

    ageUpdateInterval = setInterval(function () {
        calculateAge();
    }, 1000);
}

function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const timeInput = document.getElementById("time").value;

    const dob = new Date(dobInput + " " + timeInput);

    if (isNaN(dob.getTime())) {
        const msg = "<span style='color: #ffffff;'>Please enter a valid date of birth.</span>";
        document.getElementById("result").innerHTML = msg;
        return;
    }

    const currentDate = new Date();
    const ageMilliseconds = currentDate - dob;

    if (ageMilliseconds < 0) {
        document.getElementById("result").innerText = "Please enter a valid date of birth in the past.";
        return;
    }

    const ageInSeconds = Math.floor(ageMilliseconds / 1000);
    const years = Math.floor(ageInSeconds / (365.25 * 24 * 60 * 60));
    const remainingSeconds = ageInSeconds % (365.25 * 24 * 60 * 60);

    const months = Math.floor(remainingSeconds / (30.44 * 24 * 60 * 60)); 
    const remainingSecondsAfterMonths = remainingSeconds % (30.44 * 24 * 60 * 60);

    const days = Math.floor(remainingSecondsAfterMonths / (24 * 60 * 60));
    const remainingSecondsAfterDays = remainingSecondsAfterMonths % (24 * 60 * 60);

    const hours = Math.floor(remainingSecondsAfterDays / (60 * 60));
    const remainingSecondsAfterHours = remainingSecondsAfterDays % (60 * 60);

    const minutes = Math.floor(remainingSecondsAfterHours / 60);
    const seconds = Math.floor(remainingSecondsAfterHours % 60);

    const styledResult = "<span style='color: #ffffff;'>You've been alive for </span>" +
    `<span style='font-weight: bold; color: #FFDD95;'>${years}  </span>` +"<span style='color: #ffffff;'>years, </span>"+
    `<span style='font-weight: bold; color: #FFDD95;'>${months} </span>` + "<span style='color: #ffffff;'>months, </span>"+
    `<span style='font-weight: bold; color: #FFDD95;'>${days} </span>` + "<span style='color: #ffffff;'>days, </span>"+
    `<span style='font-weight: bold; color: #FFDD95;'>${hours} </span>` + "<span style='color: #ffffff;'>hours, and </span>"+
    `<span style='font-weight: bold; color: #FFDD95;'>${minutes}  </span>` + "<span style='color: #ffffff;'>minutes, </span>"+
    `<span style='font-weight: bold; color: #FFDD95;'>${seconds}  </span>`+ "<span style='color: #ffffff;'>seconds. </span>" +"<span style='color: #ffffff;'>Keep going, you're worth it ! </span>" ;

document.getElementById("result").innerHTML = styledResult;
}
