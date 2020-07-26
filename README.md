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

# Notes:

* using Fetch API, won't support IE
* need wrapper for Fetch to handle error statuses and return response json
* i18n
* compare weather and flight costs with other offices (e.g. 'warmer than in Amsterdam', 'colder than in Madrid', 'flights are cheaper in Budapest' etc.)
* map with offices: 1) google my map - static, points are set by owner, 2) google maps API - dynamic from location search response coords
* currency - support different, add conversion field for flights to show several prices (API supports that)
* temperature - support C and F
* add integration tests for api calls - 50 calls limit? are unit tests needed for this functionality?