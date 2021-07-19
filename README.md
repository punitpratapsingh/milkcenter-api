
# Milk center app

### Basic Guidelines:
*  Node Version Used: 14.9.0
 * Process for running:
	 1. npm install
	 2. create .env file in root and add environment file
	 3. npm run server:dev (runs with nodemon)
	 4. npm run server
	 5. curl request for adding milk center -
	  curl --location --request PUT 'http://localhost:3000/api/milkCenter/create' \
            --header 'Content-Type: application/json' \
           --data-raw '{
           "name": "staging",
           "coordinates":[26.69,78.41],
           "timings":"07:00",
           "location":"Lalitpur"
          }'
	  6. Curl request for getting all milk center 
	  curl --location --request GET 'http://localhost:3000/api/milkCenter/list'
	  
	  7. Curl request for nearby milk centers by given coordiantes
	  curl --location -g --request GET 'http://localhost:3000/api/milkCenter/list?coordinates=[25.44,78.56]'

### Key Notes:
