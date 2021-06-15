```POST "/api/authenticate"```

This API is used to authenticate user

Params 

```
    {
    	"email" 		: "<email>",
    	"password" 		: "<string>" (minimum 8 character),
    }
```
Response Errors

```
    500 -> server error
```
Response Success

```
    200 	-> success with Token
```