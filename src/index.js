// Libraries
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Classes
import { default as Degree } from './models/degree.js'
import { default as Module } from './models/module.js'

var modulesList = []

document.getElementById("calculateDegreeGradeBtn").addEventListener("click", calculateDegreeGrade)
document.getElementById("addModuleSubmission").addEventListener("click", addModule)

function addModule() {
    let level = document.getElementById('moduleLevelInput').value
    let credits = document.getElementById('moduleCreditsInput').value
    let code = document.getElementById('moduleCodeInput').value
    let grade = document.getElementById('moduleGradeInput').value

    let newModule = new Module(level, credits, code, grade)

    modulesList.push(newModule);

    refreshTable();
}

function refreshTable() {
    let tableBody = document.getElementById('tableBody')

    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    modulesList.forEach(module => {
        let row = tableBody.insertRow(-1)
        let levelCell = row.insertCell(-1)
        let creditsCell = row.insertCell(-1)
        let codeCell = row.insertCell(-1)
        let gradeCell = row.insertCell(-1)

        levelCell.innerText = module.getLevel();
        creditsCell.innerText = module.getCredits();
        codeCell.innerText = module.getCode();
        gradeCell.innerText = module.getGrade();
    });
}

function calculateDegreeGrade() {
    alert('Test')
}