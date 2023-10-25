const form = document.getElementById('form')
const imgAproved = '<img src="./images/aprovado.png" alt="Emoji celebrando">'
const imgReproved = '<img src="./images/reprovado.png" alt="Emoji decepcioando">'
const approvedSpan = '<span class="result approved">Aprovado</span>'
const disapprovedSpan = '<span class="result disapproved">Reprovado</span>'
const invalidAlert = document.getElementById('invalid-alert')

const activitys = []
const grades = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    addLineGrade()
    updateAverageGrade()
})

function addLineGrade() {
    const gradeActivity = document.getElementById('grade')
    const nameActivity = document.getElementById('name-activity')

    if (activitys.includes(nameActivity.value)){
        invalidAlert.style.display = 'inline' 
        nameActivity.classList.add('invalid-input')

        return true
    } else {
        invalidAlert.style.display = 'none'
        nameActivity.classList.remove('invalid-input')
    }

    activitys.push(nameActivity.value)
    grades.push(parseFloat(gradeActivity.value))

    let lines = '<tr>'
    lines += `<td>${nameActivity.value}</td>`
    lines += `<td>${gradeActivity.value}</td>`
    lines+=`<td>${gradeActivity.value >= 7 ? imgAproved : imgReproved}</td>`
    lines+=`</tr>`

    const table = document.querySelector('tbody')
    table.innerHTML += lines

    nameActivity.value = ''
    gradeActivity.value = ''
    
}


function updateAverageGrade (){
    let averageFinal = getAverageGrade()

    document.getElementById('final-average').innerHTML = averageFinal
    
    const situation = document.getElementById('result-final')
    situation.innerHTML = averageFinal >= 7 ? approvedSpan : disapprovedSpan
}

function getAverageGrade(){
    let sumGrades = 0
    
    grades.forEach(number => {
        sumGrades+=number
    });
    
    return sumGrades / grades.length

}

function checkValidInput(activity){
   
}