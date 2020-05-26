const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=557d18be91a3e825ac237041f9570eec&query='+ latitude + ',' + longitude

    request({ url, json: true }, (error,{body}) => {
        if (error) {
            callback('Unable to connect to forecasting services', undefined)
        } else if (body.error) {
            callback('Unable to find longitude and latitude',undefined)
        } else {
            callback(undefined, 
                //temperature: response.body.current.temperature,
                //feelsLikeTemp: response.body.current.feelslike,
                //weather_description: response.body.current.weather_descriptions[0],
                `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees. It feels like ${body.current.feelslike} degrees outside.`
            )
        }
    })
}

module.exports = forecast