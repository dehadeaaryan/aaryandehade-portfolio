function createNumbers(lower, upper) {
    var numbers = [];
    for (var i = lower; i <= upper; i++) {
        let number = {number: i, square: i * i};
        numbers.push(number);
    }
    return numbers;
}

const numbers = createNumbers(1, 1000);

export default function Squares(req, res) {
    res.status(200).json(numbers)
}