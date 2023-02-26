export default class Degree {
    #classification
    #totalWeightedCredits
    
    constructor(totalWeightedCredits) {
        if(!(totalWeightedCredits >= 240 && totalWeightedCredits <= 1440)) {
            throw new Error('Total weighted credits must be between 240 and 1440')
        }

        this.totalWeightedCredits = totalWeightedCredits
    }

    calculateClassification() {
        if(this.totalWeightedCredits >= 240 && this.totalWeightedCredits <= 630) {
            return 'First'
        } else if (this.totalWeightedCredits >= 631 && this.totalWeightedCredits <= 900) {
            return 'Upper second'
        } else if (this.totalWeightedCredits >= 901 && this.totalWeightedCredits <= 1170) {
            return 'Lower second'
        } else if (this.totalWeightedCredits >= 1171 && this.totalWeightedCredits <= 1440) {
            return 'Third'
        } else {
            return 'Invalid'
        }
    }
}