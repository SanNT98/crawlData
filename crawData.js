const request = require('request');
// var url = "https://www.pamair.org/pamenviad/sub/ref/109";

var options ={
    uri: 'https://www.pamair.org/pamenviad/no/ref/122',
    
    method: 'POST',
    json: true,
    body: {
        "method":"get"
    }
};

request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        layData(xuLi(body));
      }
      
    });
function xuLi(body){
    body.PPHAPI.body.
    var data = {
        nhietDo: "",
        doAm: "",
        PM: "",
        time:"",
        name:""
    }
return data;
}    
function layData(data){
    var DuLieuTai1Diem= {   
        nhietDo: "",
        doAm: "",
        PM2: "",
        PM10:"",
        co:"",
        time:""
    }
}