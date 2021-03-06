const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
let messageOne = document.querySelector('#message-1')
let messageTwo = document.querySelector('#message-2')
let messageThree = document.querySelector('#message-3')

weatherForm.addEventListener('submit', e => {
    e.preventDefault()
    messageOne.textContent = 'Loading....'
    messageTwo.textContent = ''
    messageThree.textContent = ''

    const location = search.value
    fetch('/weather?address=' + location).then(response => {
        response.json().then(data => {
            if (data.error) {
                messageOne.textContent = data.error
                
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                messageThree.textContent = data.humidity
            }
            
        })
    })
})