# near-example

1. Clone this repo
```
git clone git@github.com:driverInside/near-example.git
```

2. Install dependencies
```
npm install
```

3. Create the database
```
mysql < db/createTable.sql
```

4. Run the server
```
node server.js
```
## Login and create token
```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"email":"user1@nearsoft.com","password":"123457"}' \
  http://localhost:3100/auth/login
```

__Note:__

When an user is authenticated, the api returns a token. This token must be sent in the __auth-token__ header.


## Create a quote
```
curl --header "Content-Type: application/json" \
--header "auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDE2NDkyNTgsImV4cCI6MTU3MzE4NTI1OCwidXNlciI6eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBuZWFyc29mdC5jb20ifX0.R0fmoY0zJWtkMFpjbY2HerEQ9rIbOpOuy8Y2u4t7eR4" \
  --request POST \
  --data '{"title":"foo","quote":"Lorem ipsum", "author": "Bar"}' \
  http://localhost:3100/
```

## Get all the quotes
```
curl --header "Content-Type: application/json" \
--header "auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDE2NDkyNTgsImV4cCI6MTU3MzE4NTI1OCwidXNlciI6eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBuZWFyc29mdC5jb20ifX0.R0fmoY0zJWtkMFpjbY2HerEQ9rIbOpOuy8Y2u4t7eR4" \
  --request GET \
  http://localhost:3100/
```

## Get a quote by id
```
curl --header "Content-Type: application/json" \
--header "auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDE2NDkyNTgsImV4cCI6MTU3MzE4NTI1OCwidXNlciI6eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBuZWFyc29mdC5jb20ifX0.R0fmoY0zJWtkMFpjbY2HerEQ9rIbOpOuy8Y2u4t7eR4" \
  --request GET \
  http://localhost:3100/1
```

## Update a quote
```
curl --header "Content-Type: application/json" \
--header "auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDE2NDkyNTgsImV4cCI6MTU3MzE4NTI1OCwidXNlciI6eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBuZWFyc29mdC5jb20ifX0.R0fmoY0zJWtkMFpjbY2HerEQ9rIbOpOuy8Y2u4t7eR4" \
  --request PUT \
  --data '{"title":"fizz","quote":"aabbcc", "author": "Isaac Newton"}' \
  http://localhost:3100/2
```

## Delete a quote
```
curl --header "Content-Type: application/json" \
--header "auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDE2NDkyNTgsImV4cCI6MTU3MzE4NTI1OCwidXNlciI6eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBuZWFyc29mdC5jb20ifX0.R0fmoY0zJWtkMFpjbY2HerEQ9rIbOpOuy8Y2u4t7eR4" \
  --request DELETE \
  http://localhost:3100/2
```

## Get a random quote
```
curl --header "Content-Type: application/json" \
--header "auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDE2NDkyNTgsImV4cCI6MTU3MzE4NTI1OCwidXNlciI6eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBuZWFyc29mdC5jb20ifX0.R0fmoY0zJWtkMFpjbY2HerEQ9rIbOpOuy8Y2u4t7eR4" \
  --request GET \
  http://localhost:3100/
```

## Determine if a quote (by id) is funny
```
curl --header "Content-Type: application/json" \
--header "auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDE2NDkyNTgsImV4cCI6MTU3MzE4NTI1OCwidXNlciI6eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBuZWFyc29mdC5jb20ifX0.R0fmoY0zJWtkMFpjbY2HerEQ9rIbOpOuy8Y2u4t7eR4" \
  --request GET \
  http://localhost:3100/1/is_funny
```

## Create quotes from file
```
node loadQuotes.js
```