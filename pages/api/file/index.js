var fs = require('fs');

let fileName = './pages/api/file/trial.txt';

export default function Squares(req, res) {

    var text = req.query["content"];

    fs.writeFileSync(fileName, text + "\n", function (err) {
        if (err) throw err;
    });

    res.status(200).json({result: "wrote \'" + text + "\' to file"});
}
