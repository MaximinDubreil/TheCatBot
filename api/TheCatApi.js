require('dotenv').config();
const request = require('request');
let options = { 
    method: 'GET',
    url: 'https://api.thecatapi.com/v1/images/search',
    qs: { mime_types: '',breed_id: '',category_ids: '' },
    headers: { 'x-api-key': process.env.API_KEY }
};

module.exports = class TheCatApi{
    static httpGetMessages (callback,format,raceId,categoryId){
        if(format != ''){
            options.qs.mime_types = format;
        }else{
            options.qs.mime_types = 'gif,jpg,png';
        }
        if(raceId != ''){
            options.qs.breed_id = raceId;
        }else{
            options.qs.breed_id ='';
        }
        if(categoryId != ''){
            options.qs.category_ids = categoryId;
        }else{
            options.qs.category_ids = '';
        }
        
        request(options, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                let info = body.slice(1,-1);
                try {
                    callback(JSON.parse(info));
                } catch (error) {
                    console.log(error.name);
                }
            }else{
                callback("TheCatApi does not respond : " + response.statusCode)
                console.log(error);
            }
        })
    }
    
    //return la liste de races de chat possible
    static httpGetBreeds(callback){
        request('https://api.thecatapi.com/v1/breeds',function (error, response, body) {
            if (!error && response.statusCode === 200) {
                callback(JSON.parse(body));
            }else{
                callback("TheCatApi does not respond : " + response.statusCode);
                //console.log(error);
            }
        })
    }

    static httpGetCategories(callback){
        request('https://api.thecatapi.com/v1/categories',function (error, response, body) {
            if(!error && response.statusCode === 200) {
                callback(JSON.parse(body));
            }else{
                callback("TheCatApi does not respond : " + response.statusCode);
            }
        })
    }
}