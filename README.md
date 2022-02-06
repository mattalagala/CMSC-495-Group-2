## CMSC 495 Group 2

Pre-Req:

Install postgres with default values with password set to "password"

See knexfile.js for PG login in info

Step 1:
`npm install`

Step 2:
`npx knex migrate:latest`

Step 3:

`npx knex seed:run`

Step 4:
`npm run start-dev`
