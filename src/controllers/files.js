var request = require('request');
var Papa = require('papaparse');
exports.getAllFiles = async (req, res) =>{
    let options = {
        uri : 'https://echo-serv.tbxnet.com/v1/secret/files',
        method : 'GET',
        headers: {
            "authorization" : "Bearer aSuperSecretKey"
        }
    }; 
    request(options, function (error, response, body) {
        if (!error) {
            return res.status(202).json(JSON.parse(response?.body));
        }
        else return res.status(404);
    });
    return res.status(404);
}
exports.getFileByName = async (req, res) =>{
    const {filename} = req?.body;

    if(filename){
        let options = {
            uri : 'https://echo-serv.tbxnet.com/v1/secret/file/' + filename,
            method : 'GET',
            headers: {
                "authorization" : "Bearer aSuperSecretKey"
            }
        };
        request(options, function (error, response, body) {
            if(error) {
                return res.status(404).json("Invalid filename");
            } else {
                let result = Papa.parse(response?.body, { header: true, dynamicTyping: true });
                return res.status(202).json(result?.data);
            }
        });
    }else return res.status(404).json("Required body filename");
}

