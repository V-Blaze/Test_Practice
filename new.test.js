const  {stringLength, reverseString, Calculator, captalize}  = require('./index.js')

//testing git remmove

test('Valentine to be length of 9', () =>  
    expect(stringLength('Valentine')).toBe(9)
)
//test comment

test('ValentineBlaze to throw an error', () =>  
    expect(stringLength('ValentineBlaze')).toBe('String must be less than 10 and greater than 1')
)

test('Blaze reversed to be ezalB', () =>  
    expect(reverseString('Blaze')).toBe('ezalB')
)

describe('simple Calculator add method', () => {
    test('expects 2 + 4 to equal 6', () => {
        expect(Calculator.add(2, 4)).toBe(6)
    })
    test('expects -1 + 4 to equal 3', () => {
        expect(Calculator.add(-1, 4)).toBe(3)
    })
    test('expects 0 + 0 to equal 0', () => {
        expect(Calculator.add(0, 0)).toBe(0)
    })
})

describe('simple Calculator subtract method', () => {
    test('expects 12 - 12 to equal 0', () => {
        expect(Calculator.subtract(12, 12)).toBe(0)
    })
    test('expects -1 - 4 to equal -5', () => {
        expect(Calculator.subtract(-1, 4)).toBe(-5)
    })
    test('expects 0 - 0 to equal 0', () => {
        expect(Calculator.subtract(0, 0)).toBe(0)
    })
})

describe('simple Calculator divide method', () => {
    test('expects 12 / 12 to equal 1', () => {
        expect(Calculator.divide(12, 12)).toBe(1)
    })
    test('expects -1 / -4 to equal 0.25', () => {
        expect(Calculator.divide(-1, -4)).toBe(0.25)
    })
    test('expects 0 / 0 to equal 0', () => {
        expect(Calculator.divide(0, 0)).toBeFalsy()
    })
})
