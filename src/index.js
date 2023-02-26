// Libraries
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Classes
import { default as Degree } from './models/degree.js'
import { default as Module } from './models/module.js'

document.getElementById("moduleFormSubmission").addEventListener("click", calculateFinalGrade)
document.getElementById("addModuleSubmission").addEventListener("click", addModule)

function addModule() {
    alert('Add module')
}

function calculateFinalGrade() {
    alert('Test')
}