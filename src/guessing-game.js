class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max=max;
        this.min=min;
        
    }

    guess() {
        
        this.number=Math.round((this.max+this.min)/2);
     return this.number;
    }

    lower() {
       this.max=this.number;
        
    }

    greater() {
       this.min=this.number;
    }
}

module.exports = GuessingGame;
