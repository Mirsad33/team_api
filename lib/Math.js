class Math {
    static sum(a, b) {
        return a + b
    }

    static diff(a, b) {
        return a - b
    }

    static sumArr(array) {
        return array.reduce((x, y) => x + y, 0)
    }
    
}


module.exports = Math