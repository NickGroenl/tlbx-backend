var request = require('request');
exports.getAllFiles = async (req, res) =>{
    var options = {
        uri : 'https://echo-serv.tbxnet.com/v1/secret/files',
        method : 'GET',
        headers: {
            "authorization" : "Bearer aSuperSecretKey"
        }
    }; 
    request(options, function (error, response, body) {
        if (!error) {
            res.status(202).json(JSON.parse(response?.body));
        }
        else res.status(404);
    });
    return res.status(404);
}
exports.getFileByName = async (req, res) =>{
    const {name} = req;
    var options = {
        uri : 'https://echo-serv.tbxnet.com/v1/secret/file/' + name,
        method : 'POST',
        headers: {
            "authorization" : "Bearer aSuperSecretKey"
        }
    }; 
    request(options, function (error, response, body) {
        if (!error) {
            res.status(202).json(JSON.parse(response?.body));
        }
        else res.status(404);
    });
    return res.status(404);
}