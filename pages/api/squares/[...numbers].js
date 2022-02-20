export default function handler(req, res) {
    const { numbers } = req.query;
    let numberList = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        numberList.push({ number: parseInt(number), square: number * number });
    }
    res.status(200).json(numberList);
}