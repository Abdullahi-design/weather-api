fetch('http://api.weatherapi.com/v1/current.json?key=933ab32502784c9dacd213120220310&q=Kano&aqi=no')
.then(response => response.json())
.then(json => console.log(json));