`POST "/api/register"`

This API is used to register user with email

Seller Params

```
    "email"     : "<email>",
	"password"  : "<string>",
	"userType"  : "<string>", => seller or buyer
	"fullName"  : "<string>",
	"shopName"  : "<string>",
```
#### *If user is seller, shop is automatically register.

Buyer Params

```
    {
	    "fullName" 	: "<string>",
    	"email"     : "<email>",
    	"password" 	: "<string>" (minimum 8 character),
			"userType"  : "<string>" => seller or buyer
    }
```

Response Errors

```
    500 -> server error
```

Response Success

```
    200 	-> success ( user info with token )
```
