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
