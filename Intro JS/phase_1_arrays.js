Array.prototype.uniq = function() {

    const arr = [];

    for (let index = 0; index < this.length; index++) {
        const ele = this[index];
        if (!arr.includes(ele)) {
            arr.push(ele);
        }
    }

    return arr;
};

Array.prototype.twoSum = function(target) {
    let sums = [];

    for (let i = 0; i < this.length - 1; i++) {
        const firstEle = this[i];

        for (let j = i + 1; j < this.length; j++){
            const secondEle = this[j];
            if (firstEle + secondEle === 0) 
                sums.push([i, j]);
        }
        
    }

    return sums;
};

// console.log([-1, -3, 1, 1, 2, 3, 4, -3].twoSum(0));

Array.prototype.transpose = function() {

    let arr = [];

    for (let i = 0; i < this[0].length; i++) {
        arr.push([]);
    }

    for (let i = 0; i < this[0].length; i++) {
        let sub = [];
        
        for (let j = 0; j < this.length; j++) {
            arr[i][j] = this[j][i];
        }
    }
        
    return arr;
};

// console.log([[-1, -3, 1, 1], [2, 3, 4, -3]].transpose());