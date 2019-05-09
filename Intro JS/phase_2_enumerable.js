Array.prototype.myEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
};





Array.prototype.myMap = function (cb) {

    let result = [];

    this.myEach((el) => {
        result.push(cb(el));
    });

    return result;
};

// console.log([1,2,3].myMap(el => el * 2));




Array.prototype.myReduce = function(cb, accumulator) {

    let arr = this;

    if(!accumulator) {
        accumulator = this[0];
        arr = this.slice(1);
    }


    arr.myEach((el) => {
        accumulator = cb(accumulator, el);
    });
    
    return accumulator;
    
};

// console.log([1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }, 25)); // => 31