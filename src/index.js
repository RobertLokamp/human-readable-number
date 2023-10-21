module.exports = function toReadable (number) {
    const textNumbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    };

    var readableNumber = [];

    if (number == 0) {
        readableNumber[0] = 'zero';
        return readableNumber.join('')
    }
    
    while (number != 0) {
        if (number >= 101) {
            readableNumber.push(textNumbers[(number - number % 100) / 100] + ' hundred');
            number -= Math.floor(number / 100) * 100;
        };
        
        if (number >= 21 && number <= 99) {
            readableNumber.push(textNumbers[number - number % 10]);
            number -= Math.floor(number / 10) * 10;
        };

        if (number == 100) {
            readableNumber.push('one ' + textNumbers[number]);
            number -= number;
        };

        if (number <= 20) {
            readableNumber.push(textNumbers[number]);
            number -= number;
        };
    }

    return readableNumber.join(' ').trim();
}
