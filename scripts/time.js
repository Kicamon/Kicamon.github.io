window.addEventListener("load", () => {
  function calculate_time_from_now() {
    let time_now = new Date();
    let date_targer = new Date('April 5, 2024 22:00:00');
    let time_diff = time_now.getTime() - date_targer.getTime();
    let days = Math.floor(time_diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(time_diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(time_diff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(time_diff % (1000 * 60) / 1000);
    time.innerText = days + "天" + hours + "时" + minutes + "分" + seconds + "秒";
  }

  calculate_time_from_now();

  let timer = setInterval(() => {
    calculate_time_from_now();
  }, 1000);

  timer();
});
