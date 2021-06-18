## Fetch Latest Products with limit

`GET /api/products/latest?limit=8`

This API is used to fetch products by limit with Token

### Notes

if `limit` does not provide, default is 8.

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
  "data": [
    {
      "productImages": [
        "https://image.png",
        "https://image2.png"
      ],
      "tags": ["java", "OS"],
      "_id": "60c9efa1382868bf958c943b",
      "title": "Catelog testing product",
      "description": "<p>Hello I am <b>Description</b></p>",
      "_user": {
        "fullName": "Your name here"
      },
      "_shop": {
        "phoneNumbers": [],
        "shopName": "LoL Shop Dream & cature",
        "city": "Tarmwe",
        "state": "Yangon",
        "slug": "lol-shop-dream-and-cature",
        "uniqueId": "wr5ud9"
      },
      "price": "Max - 1500 <br/> Min - 800 Ks",
      "estimatedPrice": 1500,
      "delivery": "Ths is Delivery",
      "payment": "This is Paymenr",
      "_category": {
        "name": "dessert",
        "parent": "/food-&-bevrage",
        "path": "/food-and-bevrage/dessert",
        "uniqueId": "GnIz_F"
      },
      "categoryId": "fuqjed",
      "createdAt": "2021-06-16T12:33:37.901Z",
      "updatedAt": "2021-06-16T12:33:37.901Z",
      "uniqueId": "7Tx0bf",
      "slug": "catelog-testing-product",
    },
    ...
}

```

---

## Fetch Product Detail

`GET /api/products/:uniqueId`

This API is used to fetch product detail

### Notes

`No Notes here`

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
  "data":
    {
      "productImages": [
        "https://image.png",
        "https://image2.png"
      ],
      "tags": ["java", "OS"],
      "_id": "60c9efa1382868bf958c943b",
      "title": "Catelog testing product",
      "description": "<p>Hello I am <b>Description</b></p>",
      "_user": {
        "fullName": "Your name here"
      },
      "_shop": {
        "phoneNumbers": [],
        "shopName": "LoL Shop Dream & cature",
        "city": "Tarmwe",
        "state": "Yangon",
        "slug": "lol-shop-dream-and-cature",
        "uniqueId": "wr5ud9"
      },
      "price": "Max - 1500 <br/> Min - 800 Ks",
      "estimatedPrice": 1500,
      "delivery": "Ths is Delivery",
      "payment": "This is Paymenr",
      "_category": {
        "name": "dessert",
        "parent": "/food-&-bevrage",
        "path": "/food-and-bevrage/dessert",
        "uniqueId": "GnIz_F"
      },
      "categoryId": "isopwe",
      "createdAt": "2021-06-16T12:33:37.901Z",
      "updatedAt": "2021-06-16T12:33:37.901Z",
      "uniqueId": "7Tx0bf",
      "slug": "catelog-testing-product",
    },
    ...
}

```

---
