const fetch = require('node-fetch');
var Papa = require('papaparse');
exports.getAllFiles = async (req, res) =>{
    fetch('https://echo-serv.tbxnet.com/v1/secret/files', {
            method: 'GET',
            headers: { 
                "authorization" : "Bearer aSuperSecretKey"
            }
    })
    .then(ress => ress.text())
    .then(json => {
        return res.status(202).json(JSON.parse(json));
    })
    .catch(err => {return res.status(404).json({error: err})});
}
exports.getFileByName = async (req, res) =>{
    const {filename} = req?.body;

    if(filename){
        fetch('https://echo-serv.tbxnet.com/v1/secret/file/' + filename, {
            method: 'GET',
            headers: { 
                "authorization" : "Bearer aSuperSecretKey"
            }
        })
        .then(ress => ress.text())
        .then(json => {
            console.log(json);
            let result = Papa.parse(json, { header: true, dynamicTyping: true });
            return res.status(202).json(result?.data);
        })
        .catch(err => {return res.status(404).json({error: err})});
    }else return res.status(404).json("Required body filename");
}


