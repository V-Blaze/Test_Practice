const stringLength = (str) => {

    if(str.length > 1 && str.length < 10) {
        return str.length
    } else {
        return 'String must be less than 10 and greater than 1'
    }

    
}

const reverseString = (str) => {
    let splitedStr = str.split("")
    let reveresedArr = splitedStr.reverse()
    let reversed = reveresedArr.join("")
    return reversed
}

class Calculator {
    static add = (x, y) => {
        return x + y
    }

    static subtract = (x, y) => {
        return x - y
    }

    static divide = (x, y) => {
        return x / y
    } 

    static multiply = (x, y) => {
        return x * y
    }
}

const captalize = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1)
}

module.exports = {stringLength, reverseString, Calculator, captalize }