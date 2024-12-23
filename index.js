var currentHours = new Date().getHours();

if (currentHours < 18) {
    document.getElementById('app').innerHTML = "Good Day!";
} else {
    document.getElementById('app').innerHTML = "Good Evening!";
}
