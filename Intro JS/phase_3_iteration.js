Array.prototype.bubbleSort = function() {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < this.length - 1; i++) {

            if (this[i] > this[i+1]){
                temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;

                sorted = false;
            }
        }
    }

    return this;
};


// console.log([2,1,4,6,21,2,0].bubbleSort());



String.prototype.substrings = function() {
    let substrs = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i; j < this.length; j++) {
            substrs.push( this.slice(i, j+1) );
        }
    }

    return substrs;
};

// console.log('abcde'.substrings());