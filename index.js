//document.getElementById("count-el").innerText = 5

// let lapsCompleted = 0

// function increaseLaps() {
//     lapsCompleted = lapsCompleted + 1
// }
// increaseLaps()
// console.log(lapsCompleted)

// increaseLaps()
// console.log(lapsCompleted)

// increaseLaps()
// console.log(lapsCompleted)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let entry = count + " - "
    saveEl.textContent += entry
    count = 0
    countEl.textContent = count
}
let message = "Hi, my name is "
let username = "skyef"
let myGreeting = message + username
console.log(myGreeting)
