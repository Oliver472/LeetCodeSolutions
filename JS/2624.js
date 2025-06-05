
Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length ) {
        return  new Error("INVALID INPUT");
    }
    var arr = []
    var count = 0;

    for (let i = 0; i < rowsCount; i++) {
        arr.push([])
    }

    while(count < this.length) {
        for (let i = 0; i < rowsCount; i++) {
            arr[i].push(this[count])
            count++;
        }
        if (count >= this.length) {
            break;
        }
        for (let i = rowsCount - 1; i >= 0; i--) {
            arr[i].push(this[count])
            count++;
        }
    }
    return arr;
}


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
const rowsCount = 5;
const colsCount = 4;

console.log(nums.snail(5,5))