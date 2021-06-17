## User Register

`POST /api/register`

This API is used to register user.


### Notes

if userType is seller, please provide ```seller property``` in Body.

### Header

```No Header needed```

### Body
#### Seller Body

```
    "email": "lol@gmail.com",
	"password": "123456789",
	"userType": "seller",
	"fullName": "Your name here",
	"shopName": "LoL Shop Dream & cature",
	"city": "Tarmwe",
	"state": "Yangon"
```
#### buyer Body

```
    "email": "lol@gmail.com",
	"password": "123456789",
	"userType": "buyer",
	"fullName": "Your name here"
```

### Response Errors

```
    500 -> server error
```

### Response Success

```
    200 	-> success
```

### Response Object

```
{
  "success": true,
  "data": {
    "_id": "60c8aee8ef7c56c19c7b5ba6",
    "email": "lol@gmail.com",
    "password": "<Hash Password>",
    "userType": "seller",
    "fullName": "Your name here",
    "createdAt": "2021-06-15T13:45:12.207Z",
    "updatedAt": "2021-06-15T13:45:12.207Z",
  }
}

```
---

## User Login or Authenticate

`POST /api/authenticate`

This API is used to authenticate user.


### Notes

```No Noteds here```

### Header

```No Header needed```

### Body

```
    "email": "lol@gmail.com",
	"password": "123456789",
```

### Response Errors

```
    500 -> server error
```

### Response Success

```
    200 	-> success
```

### Response Object

```
{
  "success": true,
  "data": {
    "id": "60c89389a2f11fa5ef996e02",
    "fullname": "Your name here",
    "email": "lol@gmail.com",
    "token": "<Generate Token come from API>"
  }
}

```