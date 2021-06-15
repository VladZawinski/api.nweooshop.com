```POST "/api/register"```

This API is used to register user with email

Params 

```
    {
	    "fullName" 	: <string>,
    	"email" 		: "<email>",
    	"password" 		: "<string>" (minimum 8 character),
    	"password_confirmation" : "<string>"
    }
```
Response Errors

```
    500 -> server error
```
Response Success

```
    200 	-> success 
```