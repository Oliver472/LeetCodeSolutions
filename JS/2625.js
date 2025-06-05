


var flat = function (arr, n) {
    function flatten(arr, currDepth) {
        var ff = []
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                if (currDepth >= n) {
                    ff.push(arr[i])
                } else {
                    ff.push(...flatten(arr[i], currDepth + 1))
                }
            } else {
                ff.push(arr[i])
            }
        }
        return ff;
    }

    if (n === 0 ) {
        return arr;
    }

    return flatten(arr, 0);
};

const arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]];
var n = 2;
console.log(flat(arr, n))