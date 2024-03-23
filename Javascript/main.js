let hour = document.querySelector(".hour")
let minuts = document.querySelector(".minuts")
let sikund = document.querySelector(".sikund")
let handleWatch = () => {
    var date = new Date()
    hour.textContent = date.getHours().toString().padStart(2, "0")
    minuts.textContent = date.getMinutes().toString().padStart(2, "0")
    sikund.textContent = date.getSeconds().toString().padStart(2, "0")
}
setInterval(handleWatch, 1000)