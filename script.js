function task1() {
    let num = 3
    alert("Num = " + num)
}

function task2() {
    let a = 10
    let b = 2

    alert("a = 10, b = 2 \na+b = " + (a+b) + "\na-b = " + (a-b) + "\na*b = " + a*b + "\na/b = " + a/b)
}

function task3() {
    let c = 15
    let d = 2

    let result = c+d
    alert("Result = " + result)
}

function task4() {
    let a = 10
    let b = 2
    let c = 5

    alert("Sum = " + (a+b+c))
}

function task5() {
    let a = 17
    let b = 10
    let c = a-b
    let d = 7
    
    let result = c+d
    alert("Result = " + result)
}

function task6() {
    let str = "Привіт, світ!"

    alert(str)
}

function task7() {
    let str1 = "Привіт,"
    let str2 = "світ!"

    alert(str1 + " " + str2)
}

function task8() {
    let name = "Тарас"

    alert(`Привіт, ${name}!`)
}

function task9() {
    let age = 20

    alert(`Мені ${age} років!`)
}

function task10() {
    let name = prompt("Введіть ваше ім'я")

    alert(`Ваше ім'я ${name}`)
}

function task11() {
    let num = prompt("Введіть число")

    alert(`Квадрат вашого числа - ${num*num}`)
}

function task12() {
    let str = "abcde"

    alert(str[0] + str[2] + str[4])
}

function task13() {
    let num = "12345"

    alert(num[0] * num[1] * num[2] * num[3] * num[4])
}

function daysInMonth(month, year) {
    if (month in [1, 3, 5, 7, 8, 10, 12]) return 31
    else if (month in [4, 6, 9, 11]) return 30
    else return (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) ? 29 : 28
}

function task14() {
    const input = document.getElementById('input-date')
    if (input) return
    const d = document.getElementById("dateTo")
    const newInput = document.createElement('input')
    newInput.type = 'date'
    newInput.id = 'input-date'

    const button = document.createElement('button')    
    button.innerText = "calculate"
    button.onclick = () => calculateSeconds(newInput.value)

    d.appendChild(newInput)
    d.appendChild(button)
}

function calculateSeconds(dateTo) {
    if (!dateTo) { 
        alert("Select a date!")
        return
    }

    const dElem = document.getElementById('dateTo')
    const [year, month, day] = dateTo.split('-').map(Number)
    const date = new Date(year, month-1, day)
    const now = new Date()

    const diffMs = (date-now)
    let b = diffMs > 0

    const seconds = Math.floor(Math.abs(diffMs) / 1000)
    let res = dElem.querySelector('p')
    if (!res) res = document.createElement('p')
    res.innerHTML = `${seconds} seconds ${b ? "left" : "passed"}.`
    dElem.appendChild(res)
}

function task15() {
    const now = new Date()
    let seconds = now.getSeconds().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let hours = now.getHours().toString().padStart(2, "0");

    document.getElementById("lastUpdate").innerText = `Last updated at ${hours}:${minutes}:${seconds}`
}

function task16() {
    let num = prompt("Введіть число")

    alert(`Квадрат вашого числа - ${Math.pow(num, 2)}`)
}