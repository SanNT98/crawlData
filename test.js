const request = require('request');
var options ={
    uri: 'https://www.pamair.org/pamenviad/no/ref/122',
    
    method: 'POST',
    json: true,
    body: {
        "method":"get"
    }
};

request(options, function (error, response, body) {
    const _body= body.PHHAPI.body
    if (!error && response.statusCode == 200) {
        var a={value:"",time:""}
        
        // a.value= _body[17].children[0].children[0].children[0].lastvalue[0].value
        // a.time= _body[17].children[0].children[0].children[0].lastvalue[0].longtime
        // var b= body.PHHAPI.body[17].name+', '+body.PHHAPI.body[17].children[0].name+', '+body.PHHAPI.body[17].children[0].children[0].name
        
        // console.log(b)
        body.PHHAPI.body.forEach( function(province, i){
           let address= i+' '+province.name+' ';
           
           province.children.forEach(function(district, i){
                address_ = address + i+' '+district.name+' ';
                district.children.forEach(function(commune, i){
                    address__ = address_ + i+' '+commune.name;
                    console.log(address__);
                })
            })
        })
            
        
    }
});
 
