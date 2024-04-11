const Math = require('../lib/Math')

describe('Math Tests', () => {
    it('Should return the sum of two numbers', () => {
        const sum = Math.sum(10, 15)

        expect(sum).toBe(25) 
    })

    it('Should return the sum of two numbers', () => {
        const diff = Math.diff(10, 15)
        
        expect(diff).toBe(-5)
    })

    // Write a test that checks that Math.sumArray returns the sum of n number of  numbers in a provided argument array[10,15, 3] should return 28

    


    it('Should return the sum of the array', () => {
        const sum =Math.sumArr([10, 15, 3])
        
        expect(sum).toBe(28)
    })
})
 