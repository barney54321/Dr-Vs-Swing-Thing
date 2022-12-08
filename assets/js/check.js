// Really this should be done using reCAPTCHA, but because this is being hosted
// without a proper server, and the fact that we are just trying to stop a webscraper
// all we need to do is create a form that will stop a bot but gets passed by a human
// This is especially true given this is all publicly accessible anyways - literally
// go to the website and it will show it to you.

let secret = false;

function trigger() {
    secret = true;
}

function reverse(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray;
}

function onSubmit(e) {
    if (secret) {
        return;
    } else if (document.getElementById("dont").value != "123") {
        return;
    }

    let backwardsPhone = "306 250 1340";
    let backwardsEmail = "ude.cesse@rehsif.nimajneB";

    document.getElementById("phone").innerText = backwardsPhone;
    document.getElementById("email").innerText = backwardsEmail;

    setTimeout(() => {
        document.getElementById("phone").innerText = reverse(backwardsPhone);
        document.getElementById("email").innerText = reverse(backwardsEmail);

        document.getElementById("checkform").style.display = "none";
        document.getElementById("details").style.display = "block";
    }, 500);

    
}