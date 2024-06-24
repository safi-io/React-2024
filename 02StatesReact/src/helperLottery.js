function randomNum(n) {
    let nums = new Array(n);
    for(let i=0; i<n; i++) {
        nums[i] = Math.floor(Math.random()*10);
    }
    return nums;
}

function sumRandomNum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export {randomNum, sumRandomNum}