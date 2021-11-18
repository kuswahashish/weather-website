const request = require('request')

const forecast = (latitude,longitude,callback) => {
const url = 'http://api.weatherstack.com/current?access_key=440517e0775b4a6828414dfa7c48d676&query='+ latitude +','+ longitude +'&unit=f'
request({url, json:true},(error,{body}) => {
       if(error){
          callback('Unable to Connect.! Check Internet',undefined)
       }
      else if(body.error){
        callback('Not able to find location ! Try another',undefined)
        }
       else{
           callback(undefined,' Temperature is : '+ body.current.temperature
            +' & Weather is : '+ body.current.weather_descriptions)
       }
     
   })
}

module.exports = forecast

//OLD COde for forecast
// // to get weather forecast from weatherstack 
// const forecasturl = 'http://api.weatherstack.com/current?access_key=440517e0775b4a6828414dfa7c48d676&query=23.0830,72.5463&unit=f'
// request({url:forecasturl , json:true},(error,response) => {
//     if(error){
//         console.log("Error : Connectivity Error") 
//     }
//    else if(response.body.error){
//         console.log("Error : Location Not Found")  
//     }else{
//         console.log("Today's Temperature is "+response.body.current.temperature)  
//         console.log("its "+response.body.current.weather_descriptions)
//     }

// })