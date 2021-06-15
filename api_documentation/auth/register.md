```POST "/api/register"```

This API is used to register user with email

## if User is Seller, open shop by automatically

Seller Params 

```
    {
	    "fullName" 	: <string>,
    	"email" 		: "<email>",
        "shopName"      : "<string>",
        "city"          : "<string>",
        "state"         : "<string>",
    	"password" 		: "<string>" (minimum 8 character),
    	"password_confirmation" : "<string>"
    }
```
Buyer Params 

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