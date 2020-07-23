# Relocation Buddy - server

Small simple server part for performing weather and flights API calls.

This runs using node - express

# Notes for the future

Can add logger

# Used API info

### Accuweather API
```
For getting the weather forecast for a specific time range, use:

* Locations API
Returns information for an array of cities that match the search text
GET http://dataservice.accuweather.com/locations/v1/cities/search?apikey=123&q=Amsterdam

* Forecast API
- 5 Days of Daily Forecasts
GET http://dataservice.accuweather.com/forecasts/v1/daily/5day/{locationKey}?apikey={apiKey}
- Current conditions data for a specific location
GET http://dataservice.accuweather.com/currentconditions/v1/{locationKey}?apikey={apiKey}

Icons? https://developer.accuweather.com/weather-icons

Later - Translations API for internationalization


# Best practices: (https://developer.accuweather.com/best-practices)
Use GZIP Compression to reduce the size of data being transmitted. Example:
curl -H "Accept-Encoding: gzip,deflate" "http://api.accuweather.com/locations/v1/search?q=san&apikey={your key}"

Add some type of randomization to the individual device refresh time so that all devices don't refresh at the same clock time.
For example, do not request updates on all devices at :00 and :30 past the hour.

Refresh information from the AccuWeather APIs for your device based upon the cache expires time in the response headers.
```

### Kiwi API
```
* POST https://api.skypicker.com/flights_multi{?partner,locale,curr}
body: fly_from* fly_to? v=3 date_from* date_to* curr?=EUR locale?=en
response header Content-Encoding: gzip
Use the parameter partner=picky for testing your implementation (see flights API URL parameters)
```