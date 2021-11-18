const path= require('path');
const hbs = require('hbs')
const express = require('express');
const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const app = express()
//Defined Path
const publicPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
//Setup path for views and tamplates
app.set('view engine','hbs')
app.set('views',templatePath)
hbs.registerPartials(partialsPath)

//static directory 
app.use(express.static(publicPath))

app.get('',(req, res) => {
    // console.log(req.params) 
    res.render('index',{
        htitle: 'WeatherForcast | Home',
        title: 'Weather App',
        name:'ashish'
    })
})
app.get('/about',(req, res) => {
    res.render('about',{
        htitle: 'WeatherForcast | About',
        title: 'About page',
        name:'ashish'
    })
})
app.get('/help',(req, res) => {
    res.render('help',{
        htitle: 'WeatherForcast | Help',
        title: 'Help Page',
        name:'ashish'
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.search){
        res.send({
            error : "please Enter the search query & Location"
        })
    }
    else{
        geocode(req.query.search,(error,{latitude,longitude,location} = {}) => {
            if(error) {
                return res.send({
                    error: "Unable to Find Location ! Try Again"
                })
            }
            forecast(latitude,longitude, (error,ForecastData) => {
                if(error) {
                    return res.send({
                        error: "Unable to Finda Location ! Try Again"
                    })
                }
                else{
                    res.send({
                        location:location,
                        ForecastData:ForecastData,
                        htitle: 'WeatherForcast | search',
                        title: 'Weather App',
                        name:'ashish'
                    })
                }
            })
        })
    }
    
})

app.get('/help/*',(req,res)=>{
    res.render('articalerror',{
        htitle: 'WeatherForcast | Error',
        
        name:'ashish'
      
    })
})
app.get('*',(req,res)=>{
    res.render('404error',{
        htitle: 'WeatherForcast | Error',
        name:'ashish'
    })
})
app.listen(3000,()=>{
    console.log("Server is Ready at port number 3000")

}) 