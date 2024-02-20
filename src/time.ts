// 设置倒计时结束的时间（注意：这里使用的是Unix时间戳格式）
const endTime = new Date("February 20, 2024 22:30:59").getTime();

// 每秒更新一次倒计时
const countdownInterval = setInterval(() => {
    // 获取当前时间
    const now = new Date().getTime();

    // 计算剩余时间
    const timeleft = endTime - now;

    // 分、秒
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // 显示倒计时
    let minDiv = document.getElementById("minutes")
    if (minDiv != null) {
        minDiv.innerHTML = String(minutes)
    }
    let secDiv = document.getElementById("seconds")
    if (secDiv != null) {
        secDiv.innerHTML = String(seconds)
    }
    // 如果倒计时结束，清除计时器
    if (timeleft < 0) {
        clearInterval(countdownInterval);
    }
}, 1000);