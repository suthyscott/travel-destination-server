## To use server:

1. Fork and clone the repo

2. Run `npm i` in the root folder (travel-destination-server)

3. Create a new db in bit.io or comparable db server and copy the connection string

4. Create a `.env` file and add a `SERVER_PORT` number of your choice (I prefer 4545), and a `CONNECTION_STRING` variable with the connection string from bit.io.

5. Run `nodemon index.js` in your terminal. You should see the select statements from sequelize as well as the `Take us to warp...` message. 

Your server is running!