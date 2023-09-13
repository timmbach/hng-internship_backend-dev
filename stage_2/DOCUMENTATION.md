# API Documentation

## Introduction

Welcome to the API documentation for stage-2. This API allows you to [briefly describe the main functionality and purpose of your API].

## Base URL

The base URL for all api endpoints is:

```
https://hng-internship-stage1.onrender.com/api
```

## Error Handling

HTTP status codes are responses issued for a client’s request made to a server. The following are the common status codes handled by the api.

### "500 Internal Server Error"

A 500 Internal Server Error is displayed when something is wrong with the server, e.g The database connection fails.

### "400 Bad Request"

A 400 Bad Request status code indicates that the server has received an invalid or malformed request from the client. This is most likely as a result of an empty request body.

### "201 Created"

A 201 status code indicates that a new user has been created successfully.

### "200 OK"

The 200 OK status code indicates that a client's request has been successfully received, understood, and processed by the server.

## Endpoints

### Persons

- Endpoint: `/`
- Description: This endpoint gets all persons in the database and adds a new person to the list of persons in the database

GET /

- description: Retrieve all persons
- Example Request:

```
GET /
```

- Example Response:

```
{
 "count": 1,
    "data": [
        {
            "_id": "64ffa3f5c75409df7a2653c5",
            "name": "Timothy Mbachu",
            "createdAt": "2023-09-11T23:34:13.618Z",
            "updatedAt": "2023-09-11T23:34:13.618Z",
            "__v": 0
        }
    ]
}
```

POST /

- Description: Creates a new person
- Parameters:
  - `name` (string, required): First name and last name of the new person
- Example Request:

```
Content-Type: application/json

{
  "name": "Person Name"
}

```

- Example Response

```
{
  "name": "hng internship",
    "_id": "65020a7abb0229b7243f291f",
    "createdAt": "2023-09-13T19:16:10.345Z",
    "updatedAt": "2023-09-13T19:16:10.345Z",
    "__v": 0
}
```

- Endpoint: `/:name`
- Description: This endpoint performs READ, UPDATE and DELETE operations on a specified person

GET /:name

- description: Retrieve a person's details
- Example Request:

```
GET /Timothy%20Mbachu
```

- Example Response:

```
{
    "_id": "64ffa3f5c75409df7a2653c5",
    "name": "Timothy Mbachu",
    "createdAt": "2023-09-11T23:34:13.618Z",
    "updatedAt": "2023-09-11T23:34:13.618Z",
    "__v": 0
}
```

PUT /Timothy%20Mbachu

- Description: Edits a person's details
- Request Body:
  - `name` (string, required): First name and last name of the new person
- Example Request:

```
Content-Type: application/json
{
  "name": "New Name"
}

```

- Example Response

```
{
    "_id": "65020a7abb0229b7243f291f",
    "name": "updated user",
    "createdAt": "2023-09-13T19:16:10.345Z",
    "updatedAt": "2023-09-13T19:21:53.701Z",
    "__v": 0
}
```

## Sample Code

### Javascript using axios

```
const axios = require('axios');

axios.get('https://hng-internship-stage1.onrender.com/api')
  .then((res) => {
    // Handle successful response here
    console.log(response.data);
  })
  .catch((error) => {
    // Handle error here
    console.error(error);
  });

```

### Python using requests

```
import requests

url = 'https://hng-internship-stage1.onrender.com/api'

try:
    response = requests.get(url)
    response.raise_for_status()  # Check for HTTP errors

    # Handle successful response here
    print(response.json())
except requests.exceptions.RequestException as err:
    # Handle error here
    print(f"Request error: {err}")

```

## Conclusion

Thank you for using my hng stage 2 API. If you have any questions or need further assistance, please contact me at [follow.timothy@gmail.com].
