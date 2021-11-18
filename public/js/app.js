console.log('js file loaded.')



const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const p1 =  document.querySelector('#p1')
const p2 = document.querySelector('#p2')
weatherform.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log("test")
    const location = search.value
    console.log(location)
    fetch('http://localhost:3000/weather?search='+location).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            p1.textContent = 'Error: ' + data.error
            p2.textContent = ""

        }
        else {
           p1.textContent = "Location : "+ data.location
           p2.textContent = "Forecast : "+ data.ForecastData
        }
    })
   
})
})