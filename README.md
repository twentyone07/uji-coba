# uji-coba

# Documentation

## Sign In

- Method: POST
- Url: /api/v1/auth/signin

```json
{
  "email": "string",
  "password": "string"
}
```

## Sign Up

- Method: POST
- Url: /api/v1/auth/signup

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```
<br>

## Profile

### Get Profile

- Method: GET
- Url: /api/v1/users/profile
- Header: Bearer token

```json
{
  "error": "boolean",
  "message": "string",
  "data": [
    {
      "name":"string",
      "email": "string",
      "password": "string",
      "imageUrl": "string",
      "createdAt": "string",
    }
  ]
}
```

## Upload Image Article

### Get Image Article

- Method: GET
- Url: /api/v1/articles/upload
- Header: Bearer token

```json
{
  "error": "boolean",
  "message": "string",
  "data": [
    {
      "url": "string",
      "name": "string",
    }
  ]
}
```

## Article

### Get Article

- Method: GET
- Url: /api/v1/articles
- Header: Bearer token

```json
{
  "error": "boolean",
  "message": "string",
  "data": [
    {
      "imageUrl": "string",
      "name": "string",
      "latinName": "string",
      "family": "string",
      "description": "string",
      "ingredient": "string",
      "efficacy": ["string"],
      "onlineShop": "string",
    }
  ]
}
```
