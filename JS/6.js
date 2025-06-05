var convert = function (s, numRows) {
    s = s.replace(/\n/g, "")
    var arr = []
    for (let i = 0; i < numRows; i++) {
        arr.push([])
    }
    var si = 0;
    var string = ""
    loop:
    while (true) {
        for (let i = 0; i < numRows; i++) {
            if (s[si]) {
                arr[i].push(s[si])
                si++;
            } else {
                break loop
            }
        }

        for (let i = numRows - 2; i > 0; i--) {
            for (let j = numRows - 1  ; j >= 0; j--) {
                if ( j === i) {
                    if (s[si]) {
                        arr[j].push(s[si])
                        si++;
                    } else {
                        break loop
                    }
                } else {
                    arr[j].push()
                }
            }
        }
    }

    var v = 0;
    while(arr[v]) {
        let b = 0;
        while(arr[v][b]) {
            string += arr[v][b]
            b++;
        }
        v++;
    }

   return string;
};

function printTable(arrayOfArrays) {
    const maxCols = Math.max(...arrayOfArrays.map(row => row.length));
    const tableData = arrayOfArrays.map(row => {
        // Ensure all rows have the same number of columns
        while (row.length < maxCols) row.push('');
        return row;
    });

    console.table(tableData);
}

console.log(convert("PAYPALISHIRING", 4))