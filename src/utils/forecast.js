const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=557d18be91a3e825ac237041f9570eec&query='+ latitude + ',' + longitude
console.log(latitude)
console.log(longitude)
    request({ url, json: true }, (error,{body}) => {
        if (error) {
            callback('Unable to connect to forecasting services', undefined)
        } else if (body.error) {
            callback('Unable to find longitude and latitude',undefined)
        } else {
            callback(undefined, 
                [`${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees. It feels like ${body.current.feelslike} degrees outside.`,
            `The humidity is currently ${body.current.humidity}%`]
            )
        }
    })
}

module.exports = forecast