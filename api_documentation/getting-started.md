## Getting Started

### BaseURL

```
Local  : http://localhost:8000
Online : https://nweooshop.herokuapp.com/
```

### Header

Example request to add token in req.headers

```
let data = {
    headers: {
        "x-access-token": clientToken,
        "content-type": "application/json"
    }
};

axios.get(`${baseURL}/api/products...`, data).then(function(response) {
    // ...
}).catch(function(error) {
    //...
});

```
