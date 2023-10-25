const form = document.getElementById('form')
const imgAproved = '<img src="./images/aprovado.png" alt="Emoji celebrando">'
const imgReproved = '<img src="./images/reprovado.png" alt="Emoji decepcioando">'



form.addEventListener('submit', (e) => {
    e.preventDefault()

    const grade = document.getElementById('grade')
    const nameActivity = document.getElementById('name-activity')

    let lines = '<tr>'
    lines += `<td>${nameActivity.value}</td>`
    lines += `<td>${grade.value}</td>`
    lines+=`<td>${grade.value >= 7 ? imgAproved : imgReproved}</td>`
    lines+=`</tr>`

    const table = document.querySelector('tbody')
    table.innerHTML += lines

    nameActivity.value = ''
    grade.value = ''


})
