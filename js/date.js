export const time =({
    dates : new Date().getFullYear(),
    el : document.querySelector("footer p"),
    printout(){
        this.el.innerHTML += `&copy; - ${this.dates}`
    }
})