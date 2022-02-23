var fs = require('fs');

let fileName = './pages/api/file/trial.txt';

export default function Squares(req, res) {

    var text = req.query["content"];
    const o = {result : "", content : ""};

    fs.writeFile(fileName, text, function (err) {
        if (err) throw err;
    });

    fs.readFile(fileName, function (err, data) {
        if (err) throw err;
        o.content = data.toString();
        o.result = "wrote \'" + text + "\' to file";
        res.status(200).json(o);
    });
}
