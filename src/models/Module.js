export default class Module {
    #level
    #credits
    #code
    #grade

    constructor(level, credits, code, grade) {
        if(!(level > 0 && level < 4)) {
            throw new Error('Module level is invalid')
        }

        if(!(credits == 30 || credits == 60 || credits == 90)) {
            throw new Error('Module credits are invalid')
        }

        if(!(/^[a-zA-Z]{1,3}[0-9]{3}$/.test(code))) {
            throw new Error('Module code is invalid')
        }
        
        if(!(Number.isInteger(grade))) {
            parseInt(grade)
        }

        this.level = level
        this.credits = credits
        this.code = code
        this.grade = grade
    }

    getLevel() {
        return this.level
    }

    getCredits() {
        return this.credits
    }

    getCode() {
        return this.code
    }

    getGrade() {
        return this.grade
    }

    weightedCredits() {
        if(this.level == 1) {
            return credits
        } else if (this.level == 2) {
            return this.credits * this.grade
        } else if (this.level == 3) {
            return 2 * (this.credits * this.grade)
        }
    }
}