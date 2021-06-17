## Fetch All Shops with limit

`GET /api/shops?limit=10`

This API is used to fetch shops by limit with Token

### Notes

if `limit` does not provide, default is 10.

### Header

Please provide authorization token in `req.headers`

### Body

No Params Needed

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
    "phoneNumbers": ["0912486921", "097971213"],
    "_id": "60c9e77765710c0004a0d933",
    "shopName": "LoL Shop Dream & cature",
    "city": "Tarmwe",
    "state": "Yangon",
    "slug": "lol-shop-dream-and-cature",
    "_user": "60c9e77665710c0004a0d931",
    "createdAt": "2021-06-16T11:58:47074Z",
    "updatedAt": "2021-06-16T11:58:47.074Z",
    "uniqueId": "tMw64M",
  }
}

```

---

## Create a new Shop

`POST /api/shop` => action from user register

This API is used to create a new shop
### Notes

Basically, this api is used after new account is registered.
if user is a seller, open shop by automatically.
