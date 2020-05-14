

exports.test = function (req, res) {

    const address = req.params.address;

    res.send(address);

};