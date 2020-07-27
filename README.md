# relocation-buddy

A small tool to help people find the office of The Company they will be happy to work at.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Technologies used:
* Vue.js + Buefy for the client
* Node.js + Express for the server
* Fetch API for REST calls
* Accuweather API for weather information
* Kiwi API for flights information

# Further improvements:
* i18n - package is added, but not currently being used, would be great to localize all messages
* error handling - handle requests errors on server side and send appropriate error messages to client, then show toasts on client side
* configure history fallback for prod server properly - without it refresh throws 404, adding it just as it is messes real API calls
* would be nice to compare weather and flight costs with other offices (e.g. 'warmer than in Amsterdam', 'colder than in Madrid', 'flights are cheaper in Budapest' etc.)
* map with offices can be added: 1) google my map - static, points are set by owner, 2) google maps API - dynamic from location search response coords
* currency - support different currency (switcher in header), add conversion field for flights to show several prices (API supports that)
* temperature - support C and F (currently we show C on main page and F on details - would be great to have a switcher in header as well and show appropriate units)
* for datepicker - add date-parcer for d/m/yyyy format
* probably add store or storage saving for currentWeather on home page not to reload current weather every time as Accuweather provides limited amount of REST calls per day (50).