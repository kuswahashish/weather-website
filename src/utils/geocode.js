const request = require('request')

const geocode = (address,callback) => {
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYXNoaXNoa3Vzd2FoIiwiYSI6ImNrdzIzbDZyZDFmMHUycG5vd3ZjMTRlNzkifQ.0YMDGUpA9ME2Wc6p4OP0yQ&limit=1'
    request({url , json:true},(error,{body}) => {
       if(error){
          callback('Unable to Connect.! Check Internet',undefined)
       }
      else if(body.features.length === 0){
        callback('Not able to find location ! Try another',undefined)
    }
       else{
           callback(undefined,{
            latitude : body.features[0].center[1],
            longitude : body.features[0].center[0],
            location : body.features[0].place_name
           })
       }
     
   })
}
module.exports = geocode 

// upside code was efficient and using callback 
//  // to get coordinator from mapbox geocoding to use in weatherstack 
//  geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/chandlodiya.json?access_token=pk.eyJ1IjoiYXNoaXNoa3Vzd2FoIiwiYSI6ImNrdzIzbDZyZDFmMHUycG5vd3ZjMTRlNzkifQ.0YMDGUpA9ME2Wc6p4OP0yQ&limit=1'
//  request({url:geocodeurl , json:true},(error,response) => {
//     if(error){
//         console.log("Error : Connectivity Error") 
//     }
//    else if(response.body.features.lenght === 0){
//         console.log("Error : Location Not Found")  
//     }
//     else{
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude,longitude)
//     }
  
// })