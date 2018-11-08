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

## Create a quote
```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"title":"foo","quote":"Lorem ipsum", "author": "Bar"}' \
  http://localhost:3100/
```

## Get all the quotes
```
curl --header "Content-Type: application/json" \
  --request GET \
  http://localhost:3100/
```

## Get a quote by id
```
curl --header "Content-Type: application/json" \
  --request GET \
  http://localhost:3100/1
```

## Update a quote
```
curl --header "Content-Type: application/json" \
  --request PUT \
  --data '{"title":"fizz","quote":"aabbcc", "author": "Isaac Newton"}' \
  http://localhost:3100/2
```

## Delete a quote
```
curl --header "Content-Type: application/json" \
  --request DELETE \
  http://localhost:3100/2
```

## Get a random quote
```
curl --header "Content-Type: application/json" \
  --request GET \
  http://localhost:3100/
```

## Determine if a quote (by id) is funny
```
curl --header "Content-Type: application/json" \
  --request GET \
  http://localhost:3100/1/is_funny
```

## Create quotes from file
```
node loadQuotes.js
```