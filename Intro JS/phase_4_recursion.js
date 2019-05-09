function range(start, end) {
    if (start > end) {
        return [];
    }

    if (start === end) {
        return [start];
    }

    return [start].concat(range(start + 1, end));
}

// console.log(range(1, 10));

function sumRec(arr) {
    if (arr.length <= 1) return arr[0];
    return arr[0] + sumRec(arr.slice(1));
}

function exponent(base, exp) {
    if (exp === 0) return 1;
    return base * exponent(base, exp - 1);
}

function exponent2(base, exp) {
    if (exp === 0) return 1;
    if (exp === 1) return base;

    if (exp % 2 === 0) {
        return exponent2(base, exp / 2) ** 2;
    }
    else {
        return base * (exponent2(base, (exp - 1) / 2) ** 2);
    }
}

// console.log(exponent(2, 5));
// console.log(exponent2(2, 5));
// console.log(exponent2(2, 6));

function fibonacci(n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    fibs = fibonacci(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

    return fibs;
}

// console.log(fibonacci(5));

function bsearch(arr, target) {
    if (arr.length < 1) return -1;

    let mid = Math.floor(arr.length / 2);
    if (target === arr[mid]) return mid;

    let left = arr.slice(0, mid - 1);
    let right = arr.slice(mid + 1);

    if (target < arr[mid]) {
        return bsearch(left, target);
    }

    if (target > arr[mid]) {
        if (arr === undefined) {
            return -1;
        } 
        else {
            right_search = bsearch(right, target);
            if (right_search !== -1) return mid + right_search;
        }
    }
    return -1;

}

console.log(bsearch([1,2,3,4,5,6,7,8,9,10,11], 0));
console.log(bsearch([1,2,3,4,5,6,7,8,9,10,11], 3));
console.log(bsearch([1,2,3,4,5,6,7,8,9,10,11], 7));
console.log(bsearch([1,2,3,4,5,6,7,8,9,10,11], 12));
console.log(bsearch([1,2,3,4,5,6,7,8,9,10,11], 2));
console.log(bsearch([1,2,3,4,5,6,7,8,9,10,11], 10));

