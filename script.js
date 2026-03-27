function prepare() {
  document.getElementById("status").innerText = "Status: READY";
}

function launch() {
  let count = 5;
  let timer = setInterval(function() {
    document.getElementById("countdown").innerText = "Launching in " + count;
    count--;
    if (count < 0) {
      clearInterval(timer);
      document.getElementById("status").innerText = "🚀 LAUNCHED!";
      document.getElementById("countdown").innerText = "";
    }
  }, 1000);
function launch() {
  let count = 5;
  let fuel = 100;
  let timer = setInterval(function() {
    document.getElementById("countdown").innerText = "Launching in " + count;
    count--;
    fuel -= 20; // reduce fuel
    document.getElementById("fuel-bar").style.width = fuel + "%";

    if (count < 0) {
      clearInterval(timer);
      document.getElementById("status").innerText = "🚀 LAUNCHED!";
      document.getElementById("countdown").innerText = "";
      document.getElementById("fuel-bar").style.background = "#ff0000"; // red when finished
    }
  }, 1000);
function triggerWarning() {
  document.getElementById("warning").style.display = "block";
