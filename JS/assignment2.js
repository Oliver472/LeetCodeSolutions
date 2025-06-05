function isPowerOfThree(n) {
    if (n <= 0) return false;
    const log3 = Math.log10(n) / Math.log10(3);
    return Number.isInteger(log3);
}


console.log(isPowerOfThree(27))